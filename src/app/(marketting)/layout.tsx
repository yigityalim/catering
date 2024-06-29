import { Header } from '@/components/marketting/header';
import { generateStaticMetadata } from '@/lib/metadata';
import type React from 'react';

export default async function MarkettingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex h-[5000px] w-full flex-col items-center justify-start">{children}</main>
    </>
  );
}

export const metadata = generateStaticMetadata({
  title: {
    default: 'Marketting',
    template: '%s | Marketting APP',
  },
  description: 'Marketting APP is a web application for managing marketting orders.',
  keywords: ['marketting', 'app', 'orders', 'management'],
});
