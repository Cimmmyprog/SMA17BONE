import { PrismaClient } from "../lib/generated/prisma"; // <-- penting: sesuaikan path ini

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma