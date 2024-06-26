import type React from 'react';

export default async function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-red-500">
      {children}
    </div>
  );
}

export const metadata = {
  title: 'Auth Layout',
};
