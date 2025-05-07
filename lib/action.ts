'use server'
import { writeFile } from "fs/promises";
import path from "path";
import { z } from "zod";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const UploadSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4_000_000, {
      message: "Image must be less than 4MB",
    }),
});

export const Creatdata = async (prevState: unknown, formData: FormData) => {
  const file = formData.get("image") as File;

  const validated = UploadSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    image: file,
  });

  if (!validated.success) {
    return {
      error: validated.error.flatten().fieldErrors,
    };
  }

  const { title, description, image } = validated.data;

  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = image.name.replaceAll(" ", "_");

    await writeFile(
      path.join(process.cwd(), "public/assets", filename),
      buffer
    );

    await prisma.post.create({
      data: {
        title,
        description,
        image: filename,
      },
    });
  } catch (err) {
    console.error("Error di createData", err);
    return { message: "Gagal menyimpan data" };
  }

  revalidatePath("/#");
  redirect("/#");
};
