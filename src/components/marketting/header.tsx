'use client';

import { useScroll } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import { create } from 'zustand';

type Store = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
};

export const useHeader = create<Store>()((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));

export function Header() {
  const isMenuOpen = useHeader((state) => state.isMenuOpen);
  const toggleMenu = useHeader((state) => state.toggleMenu);
  const headerRef = React.useRef<React.ElementRef<typeof motion.header>>(null);
  const { isScrolled } = useScroll(50);

  return (
    <>
      <motion.header
        ref={headerRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-black px-6 py-2 text-black md:px-12 md:py-4',
          isMenuOpen ? 'bg-[#141413]' : 'bg-white',
          isScrolled && 'shadow-md',
          'mix-blend-difference',
        )}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h1
          className={cn(
            'text-2xl font-bold',
            //'transition-colors duration-300',
          )}
        >
          Catering
        </h1>
        <button className="block size-12 p-2 md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </motion.header>
      <AnimatePresence>{isMenuOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  return (
    <motion.nav
      //initial={{ opacity: 0 }}
      //animate={{ opacity: 1 }}
      //exit={{ opacity: 0 }}
      //transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-10 flex flex-col items-center justify-start overflow-y-auto bg-[#141413] px-6 py-24 md:hidden"
    >
      <ul className="flex w-full flex-col items-center justify-start gap-6 pt-12">
        {menuItems.map((item) => (
          <li key={item.name} className="flex w-full items-center justify-start">
            <a
              href={item.href}
              className="inline-flex w-full items-center justify-between gap-x-3 text-4xl font-bold text-white transition-colors duration-300"
            >
              {item.name}
              {pathname === item.href && <span className="mt-1 block size-2 bg-white" />}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex w-full flex-col items-center justify-start gap-6 pt-12">
        {menuSubItems.map((item) => (
          <li key={item.name} className="flex w-full items-center justify-start">
            <a
              href={item.href}
              className="inline-flex w-full items-center justify-between gap-x-3 text-xl font-bold text-[#a3a299] transition-colors duration-300"
            >
              {item.name}
              {pathname === item.href && <span className="mt-1 block size-2 bg-white" />}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

const menuItems = [
  {
    name: 'Anasayfa',
    href: '/',
  },
  {
    name: 'Örnek',
    href: '/example',
  },
  {
    name: 'Hakkımızda',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const menuSubItems = [
  {
    name: 'Breakfast',
    href: '/menu/breakfast',
  },
  {
    name: 'Lunch',
    href: '/menu/lunch',
  },
  {
    name: 'Dinner',
    href: '/menu/dinner',
  },
  {
    name: 'Dessert',
    href: '/menu/dessert',
  },
  {
    name: 'Drinks',
    href: '/menu/drinks',
  },
  {
    name: 'Specials',
    href: '/menu/specials',
  },
  {
    name: 'All',
    href: '/menu',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  // catering
  {
    name: 'Catering',
    href: '/catering',
  },
  {
    name: 'Weddings',
    href: '/catering/weddings',
  },
  {
    name: 'Corporate',
    href: '/catering/corporate',
  },
  {
    name: 'Events',
    href: '/catering/events',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];
