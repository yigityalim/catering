import { DashboardHeader, DashboardMobileMenu, DashboardSidebar } from '@/components/dashboard';
import { DashboardLayoutTitle } from '@/components/dashboard/layout-title';
import type React from 'react';

export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <DashboardHeader />
      <DashboardMobileMenu />
      <DashboardSidebar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4">
        <div className="bg-muted/40 p-4 sm:p-8 md:p-10">
          <DashboardLayoutTitle />
          {/*
            <nav className={cn('flex w-full flex-col gap-4 md:flex-row md:justify-between md:gap-8')}>
              <h2 className="text-xl font-semibold text-primary">Menü</h2>
              <ul className="flex flex-col gap-4">
                {dashboardMenu.children.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="flex items-center gap-x-2">
                      <Icon name={item.icon} size={24} />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            */}
        </div>
        <div className="flex w-full flex-col gap-2 p-4">{children}</div>
      </main>
    </div>
  );
}
