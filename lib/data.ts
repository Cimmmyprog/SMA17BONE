import { prisma } from "./prisma"

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
