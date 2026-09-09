import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

type BadgeVariant = 'blue' | 'cyan' | 'green' | 'slate';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: 'bg-blue-950/60 text-blue-400 border-blue-800/50',
  cyan: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/50',
  green: 'bg-green-950/60 text-green-400 border-green-800/50',
  slate: 'bg-slate-900/60 text-slate-400 border-slate-700/50',
};

export function Badge({
  className,
  variant = 'blue',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
