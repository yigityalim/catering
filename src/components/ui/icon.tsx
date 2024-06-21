import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

function Icon({ name, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name])

   return (
     <Suspense>
      <LucideIcon {...props} />
     </Suspense>
   )
}

export { Icon };
export type { IconProps };

