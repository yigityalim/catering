import type React from "react";

export default async function MarkettingLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div>
      <p>marketting layout</p>
      {children}
    </div>
  );
}
