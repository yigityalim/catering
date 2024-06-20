import type React from "react";

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div>
      <p>auth layout</p>
      {children}
    </div>
  );
}
