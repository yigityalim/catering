'use client';
import { dashboardMenu } from '@/lib/menu';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/store/sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export function DashboardMobileMenu() {
  const { mobileMenu, setMobileMenu } = useDashboard();
  return (
    <AnimatePresence mode="wait">
      {mobileMenu && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
          className={cn(
            'fixed inset-x-0 bottom-0 top-16 z-50 bg-background/50 saturate-200 backdrop-blur-lg sm:hidden',
          )}
        >
          <div className="grid h-full w-full place-items-center">
            {dashboardMenu.children.map((item) => (
              <div key={item.title} className="flex flex-col items-start justify-center gap-y-6">
                <Link
                  onClick={() => setMobileMenu(false)}
                  href={item.href}
                  className="text-5xl font-semibold text-white"
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="flex flex-col items-start justify-center gap-y-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={() => setMobileMenu(false)}
                        className="text-2xl font-semibold text-white"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
