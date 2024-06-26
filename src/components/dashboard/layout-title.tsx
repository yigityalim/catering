'use client';

import { dashboardMenu, findMenuItemByHref } from '@/lib/menu';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardLayoutTitle({ notFound = false }) {
  const pathname = usePathname();
  const { item, parent } = findMenuItemByHref(dashboardMenu, pathname) || {};
  return (
    <div className="my-4 flex w-full flex-row items-center justify-between gap-x-2">
      <h1 className="text-4xl font-bold text-primary">{item?.title}</h1>
      <Link
        href={parent?.href ?? '/'}
        className={cn(
          'flex items-center gap-x-2 rounded bg-primary px-2 py-1 text-primary-foreground',
        )}
      >
        <ArrowLeft size={24} />
        <span>Geri</span>
      </Link>
    </div>
  );
}
