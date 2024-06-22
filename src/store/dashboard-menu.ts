import { create } from 'zustand';

interface SidebarState {
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  openMenus: string[];
  toggleMenu: (title: string) => void;
  setOpenMenus: (titles: string[]) => void;
}

export const useDashboard = create<SidebarState>((set, get) => ({
  mobileMenu: false,
  setMobileMenu: (open) => {
    set({ mobileMenu: open });
    if (get().mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
  openMenus: [],
  toggleMenu: (title) =>
    set((state) => ({
      openMenus: state.openMenus.includes(title) ? [] : [title], // sadece bir menüyü açık bırak
    })),
  setOpenMenus: (titles) => set({ openMenus: titles }),
}));
