'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { atom, useAtom } from 'jotai';

const sidebarAtom = atom(false);

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom);
  return;
  return (
    <motion.aside
      className={cn(
        'fixed bottom-0 left-0 top-16 hidden bg-blue-400 transition-all sm:block',
        isOpen ? 'w-64' : 'w-24',
      )}
    >
      <div className="flex h-full flex-col p-4">
        <div className="flex items-center justify-between">
          {isOpen && <h1 className="text-white">Dashboard</h1>}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
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
        </div>
        {isOpen ? (
          <nav className="flex-1">
            <ul>
              <li>
                <a href="#" className="block p-4 hover:bg-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 hover:bg-blue-500">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 hover:bg-blue-500">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center px-4 py-2">
              <a href="#" className="text-white">
                Home
              </a>
            </div>
          ))
        )}
        <div className="flex items-center justify-center px-4 py-2">
          <a href="#" className="text-white">
            Logout
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
