'use server';

import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { z } from "zod";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const UploadSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4_000_000, {
      message: "Image must be less than 4MB",
    }),
  PostId: z.string().min(1, "Post ID is required"),
});

export async function createData(prevState: any, formData: { get: (arg0: string) => any; }) {
  const file = formData.get("image");
  const PostId = formData.get("PostId");

  console.log("Received form data:", { PostId });

  const validated = UploadSchema.safeParse({
    image: file,
    PostId,
  });

  if (!validated.success) {
    return {
      error: validated.error.flatten().fieldErrors,
    };
  }

  const { image, PostId: validatedPostId } = validated.data;

  try {
    // Create the directory if it doesn't exist
    const galleryPath = path.join(process.cwd(), "public/gallery");
    await mkdir(galleryPath, { recursive: true });

    // Convert file to buffer
    const buffer = Buffer.from(await image.arrayBuffer());

    // Generate unique filename
    const filename = `${Date.now()}_${image.name.replaceAll(" ", "_")}`;

    // Write the file to the gallery folder
    await writeFile(path.join(galleryPath, filename), buffer);

    console.log('About to create gallery entry');
    
    // Create a gallery entry in the database
    // Using try/catch to get more detailed error info
    try {
      const postIdNumber = parseInt(validatedPostId, 10);
      
      
      // Check if Post exists
      const post = await prisma.post.findUnique({
        where: { id: postIdNumber }
      });
      
    
      
      // Create gallery entry with explicit relation
      const result = await prisma.gallery.create({
        data: {
          url: filename,
          post: {
            connect: { id: postIdNumber }
          }
        },
      });
      
      console.log('Created gallery entry:', result);
    } catch (dbError) {
      console.error('Prisma error details:', dbError);
      return { 
        success: false,
        message: "Database error: Failed to save gallery entry", 
        errorDetails: dbError.message 
      };
    }
    
    // Success!
    revalidatePath("/");
    return { success: true, message: "Image uploaded successfully!" };
  } catch (err) {
    console.error("Error in createData:", err);
    return { 
      success: false,
      message: "Failed to process or save data", 
      errorDetails: err.message 
    };
  }
}