import { atom, useAtom } from 'jotai';

export const mobileMenuAtom = atom<boolean>(false);

export const useDashboard = () => {
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);
  const toggleMobileMenu = () => setMobileMenu((prev) => !prev);
  return { mobileMenu, toggleMobileMenu, setMobileMenu };
};
