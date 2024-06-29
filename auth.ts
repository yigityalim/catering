import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize({ email, password }: any) {
        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });
        if (user && user.password === password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
