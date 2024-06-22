import { DashboardHeader, DashboardMobileMenu, DashboardSidebar } from '@/components/dashboard';
import { DashboardLayoutTitle } from '@/components/dashboard/layout-title';
import { generateStaticMetadata } from '@/lib/metadata';
import type React from 'react';

export const metadata = generateStaticMetadata({
  title: 'Dashboard',
  description: 'Dashboard APP is a web application for managing dashboard orders.',
  keywords: ['dashboard', 'app', 'orders', 'management'],
});

export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <DashboardHeader />
      <DashboardMobileMenu />
      <DashboardSidebar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4">
        <div className="bg-muted/40 p-4 sm:p-8 md:p-10">
          <DashboardLayoutTitle />
        </div>
        <div className="flex w-full flex-col gap-2 p-4">{children}</div>
      </main>
    </div>
  );
}
