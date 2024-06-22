import { dashboardMenu, findMenuItemByHref } from '@/lib/menu';
import type { Params } from '@/types';

export default function DashboardSettings() {
  return <div>DashboardSettings child page</div>;
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
