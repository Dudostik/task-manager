// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.user.upsert({
    where: { email: 'first@email.com' },
    update: {},
    create: {
      email: 'first@email.com',
      password: 'password',
    },
  });

  const post2 = await prisma.user.upsert({
    where: { email: 'second@email.com' },
    update: {},
    create: {
      email: 'second@email.com',
      password: 'password',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
