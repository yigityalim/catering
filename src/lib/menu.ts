import { IconProps } from '@/components/ui/icon';
import { notFound } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export type Menu = Readonly<{
  id: string;
  name: string;
  title: string;
  href: string;
  icon?: IconProps['name'];
  children?: Menu[];
}>;

export const dashboardMenu = {
  id: uuidv4(),
  name: 'dashboard',
  title: 'Kontrol Paneli',
  href: '/dashboard',
  icon: 'home',
  children: [
    {
      id: uuidv4(),
      name: 'settings',
      title: 'Ayarlar',
      href: '/dashboard/settings',
      icon: 'settings',
      children: [
        {
          id: uuidv4(),
          name: 'security',
          title: 'Güvenlik',
          href: '/dashboard/settings/security',
          icon: 'key',
        },
        {
          id: uuidv4(),
          name: 'integrations',
          title: 'Entegrasyonlar',
          href: '/dashboard/settings/integrations',
          icon: 'workflow',
        },
        {
          id: uuidv4(),
          name: 'support',
          title: 'Destek',
          href: '/dashboard/settings/support',
          icon: 'user-round-cog',
        },
        {
          id: uuidv4(),
          name: 'organization',
          title: 'Organizasyon',
          href: '/dashboard/settings/organization',
          icon: 'building',
        },
        {
          id: uuidv4(),
          name: 'advanced',
          title: 'Gelişmiş',
          href: '/dashboard/settings/advanced',
          icon: 'shield',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'billing',
      title: 'Faturalandırma',
      href: '/dashboard/billing',
      icon: 'credit-card',
      children: [
        {
          id: uuidv4(),
          name: 'invoices',
          title: 'Faturalar',
          href: '/dashboard/billing/invoices',
          icon: 'receipt',
        },
        {
          id: uuidv4(),
          name: 'payment-methods',
          title: 'Ödeme Yöntemleri',
          href: '/dashboard/billing/payment-methods',
          icon: 'credit-card',
        },
        {
          id: uuidv4(),
          name: 'subscription',
          title: 'Abonelik',
          href: '/dashboard/billing/subscription',
          icon: 'coins',
        },
      ],
    },
  ],
} satisfies Menu;

export const menu = [
  dashboardMenu,
  {
    id: uuidv4(),
    name: 'products',
    title: 'Ürünler',
    href: '/products',
    icon: 'shopping-cart',
  },
] satisfies Menu[];

export const findMenuItemByHref = (
  menu: Menu,
  href: string,
): { item: Menu | null; parent: Menu | null } => {
  if (menu.href === href) {
    return { item: menu, parent: null };
  }

  if (menu.children) {
    for (const child of menu.children) {
      if (child.href === href) {
        return { item: child, parent: menu };
      }
      const found = findMenuItemByHref(child, href);
      if (found.item) {
        return found.parent ? found : { ...found, parent: menu };
      }
    }
  }

  return { item: null, parent: null };
};
