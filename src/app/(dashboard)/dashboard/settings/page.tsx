import prisma from '@/lib/prisma';
import type { User } from '@prisma/client';

export default async function DashboardSettings() {
  const userRole = await prisma.user.findFirst({
    where: {
      id: '1',
      role: 'USER',
    },
    select: {
      role: true,
      posts: {
        where: {
          published: true,
        },
        select: {
          title: true,
          content: true,
        },
      },
    },
  });
  return <div>DashboardSettings ADMIN</div>;
}

export const metadata = {
  title: 'Dashboard settings',
};
