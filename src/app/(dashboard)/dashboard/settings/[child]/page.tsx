import { dashboardMenu, findMenuItemByHref } from '@/lib/menu';

export default function DashboardSettings() {
  return <div>DashboardSettings child page</div>;
}

type Params = {
  params: {
    child: string;
  };
};

export async function generateMetadata({ params: { child } }: Readonly<Params>) {
  if (findMenuItemByHref(dashboardMenu, `/dashboard/settings/${child}`) === undefined) {
    return {
      title: 'Page not found',
    };
  }

  return {
    title: `${child.at(0).toUpperCase()}${child.slice(1)} | Dashboard settings`,
  };
}
