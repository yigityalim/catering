import * as React from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function _Input(
  { type = 'text', className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [open, setOpen] = React.useState<boolean>(false);

  const classNames = cn(
    'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    className,
  );

  if (type === 'password') {
    return (
      <div className="relative">
        <input type={open ? 'text' : 'password'} className={classNames} ref={ref} {...props} />
        <button
          type="button"
          className="absolute right-2 top-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <EyeOff size={20} className="text-muted-foreground" />
          ) : (
            <Eye size={20} className="text-muted-foreground" />
          )}
        </button>
      </div>
    );
  }

  return <input type={type} className={classNames} ref={ref} {...props} />;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(_Input);
Input.displayName = 'Input';

export { Input };
