import { ArrowUpRight, Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { InstagramIcon } from '@/components/shared/instagram-icon'
import { SectionHeading } from '@/components/shared/section-heading'
import type { GalleryContent, GalleryItem } from '@/types/content'

interface GallerySectionProps {
  content: GalleryContent
}

export function GallerySection({ content }: GallerySectionProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  function closeVideo() {
    setActiveItem(null)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!activeItem) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveItem(null)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeItem])

  return (
    <section id="gallery" className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading intro={content} />

          <a
            href={content.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-brand-border px-5 py-3 text-sm font-extrabold text-brand-navy transition-colors hover:border-brand-blue/30 hover:text-brand-blue lg:self-auto"
          >
            <InstagramIcon size={18} />
            {content.ctaLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4 xl:grid-cols-6">
          {content.items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                aria-label={`Play video: ${item.title}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setActiveItem(item)
                }}
                className="group relative block w-full overflow-hidden rounded-xl bg-brand-navy text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                <img
                  src={item.poster}
                  alt=""
                  width={720}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/20 via-55% to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-brand-navy shadow-xl transition-transform group-hover:scale-110 sm:h-11 sm:w-11">
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-3">
                  <span className="block text-xs font-extrabold leading-4 text-white sm:text-[13px] sm:leading-[1.15rem]">
                    {item.title}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-video-title"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-navy-deep/90 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeVideo()
          }}
        >
          <div className="max-h-full w-full max-w-sm overflow-y-auto">
            <div className="mb-3 flex justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeVideo}
                aria-label="Close video"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <video
              key={activeItem.id}
              src={activeItem.video}
              poster={activeItem.poster}
              controls
              autoPlay
              loop
              playsInline
              aria-label={activeItem.title}
              className="max-h-[76vh] w-full rounded-2xl bg-black shadow-2xl"
            />

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 id="gallery-video-title" className="text-lg font-extrabold text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-brand-mist">{activeItem.description}</p>
              </div>
              <a
                href={activeItem.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-2 text-xs font-bold text-brand-yellow underline-offset-4 hover:underline"
              >
                <InstagramIcon size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
