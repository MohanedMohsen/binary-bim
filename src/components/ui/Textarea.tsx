import { cn } from '@/lib/utils';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-slate-300">
            {label}
            {props.required && (
              <span className="ml-1 text-blue-400" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            'w-full resize-y rounded-lg border bg-[#172033] px-4 py-2.5 text-sm text-slate-100',
            'placeholder:text-slate-500',
            'border-[#263449] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
            'transition-colors duration-150 min-h-[120px]',
            'disabled:cursor-not-allowed disabled:opacity-60',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} role="alert" className="text-xs text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export { Textarea };
