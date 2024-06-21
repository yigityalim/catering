'use client';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/store/sidebar';

export function DashboardHeader() {
  const { mobileMenu, toggleMobileMenu } = useDashboard();
  return (
    <header className="flex h-16 w-full items-center justify-between border-b px-4 sm:hidden">
      <button onClick={toggleMobileMenu} className="z-[60] size-10 mix-blend-difference">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
          <span
            className={cn(
              'block h-0.5 w-2/3 transform bg-white transition-all duration-300',
              mobileMenu && 'translate-y-[5px] rotate-45',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-2/3 transform bg-white transition-all duration-300',
              mobileMenu && '-translate-y-[5px] -rotate-45',
            )}
          />
        </div>
      </button>
    </header>
  );
}
