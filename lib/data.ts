import { prisma } from "./prisma"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getpost = async (query: string) => {
  try {
    const contains = await prisma.post.findMany({
      orderBy: { creatdAt: "desc" }, // ✅ diperbaiki
    });
    return contains;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
