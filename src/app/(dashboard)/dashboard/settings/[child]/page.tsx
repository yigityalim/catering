import { dashboardMenu, findMenuItemByHref } from '@/lib/menu';
import type { Params } from '@/types';
import { notFound, redirect } from 'next/navigation';

export default async function DashboardSettings({ params }) {
  const child =
    dashboardMenu.children
      .find((item) => item.href === `/dashboard/settings`)
      ?.children.find((item) => item.href === `/dashboard/settings/${params.child}`) ?? notFound();

  return (
    <div>
      DashboardSettings child page - {params.child} - {child?.id}
    </div>
  );
}

export async function generateMetadata({ params: { child } }: Readonly<Params<{ child: string }>>) {
  if (findMenuItemByHref(dashboardMenu, `/dashboard/settings/${child}`) === undefined) {
    return {
      title: 'Page not found',
    };
  }

  return {
    title: `Dashboard settings - ${child}`,
  };
}
