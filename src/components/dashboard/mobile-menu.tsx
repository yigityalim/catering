'use client';
import Link from 'next/link';
import React from 'react';
import { dashboardMenu } from '@/lib/menu';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/store/dashboard-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function DashboardMobileMenu() {
  const mobileMenu = useDashboard((state) => state.mobileMenu);
  const setMobileMenu = useDashboard((state) => state.setMobileMenu);

  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      {mobileMenu && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
          className={cn(
            'fixed inset-x-0 bottom-0 top-16 z-50 bg-background/50 saturate-200 backdrop-blur-xl sm:hidden',
          )}
        >
          <div className="flex h-full w-full flex-col items-start justify-start gap-8 p-6">
            <Link
              onClick={() => setMobileMenu(false)}
              href="/dashboard"
              className={cn('p-1 text-4xl font-semibold text-foreground', {
                'italic underline underline-offset-8': pathname === '/dashboard',
              })}
            >
              Kontrol Paneli
            </Link>
            {dashboardMenu.children.map((item) => (
              <CollapseMenu key={item.title} item={item} pathname={pathname} />
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

type CollapseMenuProps = {
  item: (typeof dashboardMenu)['children'][number];
  pathname: string;
};

function CollapseMenu({ item, pathname }: Readonly<CollapseMenuProps>) {
  const setMobileMenu = useDashboard((state) => state.setMobileMenu);
  const toggleMenu = useDashboard((state) => state.toggleMenu);
  const openMenus = useDashboard((state) => state.openMenus);
  const isOpen = openMenus.includes(item.title);

  return (
    <div key={item.title} className="flex w-full flex-col items-start justify-center gap-y-6">
      <div className="flex w-full items-center justify-between gap-x-2 overflow-hidden p-1 text-4xl font-semibold">
        <Link
          onClick={() => setMobileMenu(false)}
          href={item.href}
          className={cn('p-1 text-3xl font-semibold text-foreground', {
            'italic underline underline-offset-8': pathname === item.href,
          })}
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => toggleMenu(item.title)}
            className={cn(
              'flex w-full items-center justify-end gap-x-2 p-1 text-lg font-semibold text-foreground',
            )}
          >
            <ChevronDown
              size={24}
              className={cn('transform transition-transform', isOpen && 'rotate-180')}
            />
          </button>
        )}
      </div>
      <AnimatePresence mode="popLayout">
        {item.children && isOpen && (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, type: 'tween', ease: 'easeInOut' }}
            className="flex w-full flex-col items-start justify-center gap-y-4 border-l-2 border-muted pl-8 text-lg font-semibold text-foreground"
          >
            {item.children.map((child) => (
              <Link
                key={child.title}
                href={child.href}
                onClick={() => setMobileMenu(false)}
                className={cn('w-full p-1 text-lg font-semibold text-foreground', {
                  'italic underline underline-offset-8': pathname === child.href,
                })}
              >
                {child.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
