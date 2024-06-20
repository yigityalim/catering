import type React from "react";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div>
      <p>dashboard layout</p>
      {children}
    </div>
  );
}
