import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/cn'

const controlClassName =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-100'

interface FieldProps {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}

export function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-bold text-brand-navy"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs font-semibold text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return <input className={cn(controlClassName, className)} {...props} />
}

export function Select({ className, ...props }: ComponentProps<'select'>) {
  return (
    <select
      className={cn(controlClassName, 'appearance-none', className)}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(controlClassName, 'resize-none', className)}
      {...props}
    />
  )
}
