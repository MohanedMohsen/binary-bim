import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function PageContainer({
  children,
  className,
  fullWidth = false,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        !fullWidth && 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
