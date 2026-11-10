import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-extrabold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-brand-yellow text-brand-navy hover:-translate-y-0.5',
        outline: 'border border-white/30 font-bold text-white hover:bg-white/10',
        solid: 'rounded-xl bg-brand-blue text-white hover:bg-brand-navy',
      },
      size: {
        sm: 'rounded-full px-4 py-2 text-sm',
        md: 'rounded-full px-6 py-3.5 text-sm',
        lg: 'rounded-full px-7 py-4 text-base',
        form: 'rounded-xl px-5 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
