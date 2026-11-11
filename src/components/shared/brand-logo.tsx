import { cn } from '@/lib/cn'

type BrandLogoTone = 'dark' | 'light'

interface BrandLogoProps {
  className?: string
  /**
   * `dark` uses the logo with the navy background for dark/blue surfaces.
   * `light` uses the logo with the white background for light surfaces.
   */
  tone?: BrandLogoTone
}

const logoSources: Record<BrandLogoTone, string> = {
  dark: `${import.meta.env.BASE_URL}images/logo-03.webp`,
  light: `${import.meta.env.BASE_URL}images/logo-01.webp`,
}

export function BrandLogo({ className, tone = 'dark' }: BrandLogoProps) {
  return (
    <img
      src={logoSources[tone]}
      alt="Veltro Appliances"
      width={512}
      height={512}
      decoding="async"
      className={cn('h-14 w-14 shrink-0 rounded-xl object-cover', className)}
    />
  )
}
