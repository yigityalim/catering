import type React from 'react';
import { generateStaticMetadata } from '@/lib/metadata';

export default async function MarkettingLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-start">
      <header className="flex h-16 w-full items-center justify-between px-4 py-2">
        <span>menu</span>
        marketting header
      </header>
      {children}
    </main>
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
