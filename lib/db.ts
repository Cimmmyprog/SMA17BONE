import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.$executeRaw`UPDATE users SET active = true WHERE last_login > now() - interval '7 days'`
  console.log(result)
}

main()
