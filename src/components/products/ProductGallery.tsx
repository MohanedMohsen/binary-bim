'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Expand, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Product } from '@/data/products';
import { useI18n } from '@/lib/i18n';

type Media = { type: 'video' } | { type: 'image'; src: string };

export function ProductGallery({ product }: { product: Product }) {
  const { t, locale } = useI18n();
  const media: Media[] = [
    { type: 'video' },
    ...product.screenshots.map((src) => ({ type: 'image' as const, src })),
  ];
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const item = media[current];
  const previous = () => setCurrent((current - 1 + media.length) % media.length);
  const next = () => setCurrent((current + 1) % media.length);
  const label =
    item.type === 'video'
      ? t('ux.video')
      : `${locale === 'ar' ? 'واجهة المنتج' : 'Product interface'} ${current}`;

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    const strip = stripRef.current;
    if (strip && strip.children[current]) {
      (strip.children[current] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') previous();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (stripRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      stripRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="product-showcase border-y border-[#263449] bg-[#111827] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{t('ux.interface')}</p>
          <h2 className="section-title mt-3 sm:mt-4">
            {item.type === 'video' ? t('ux.gallery.title') : label}
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
            {item.type === 'video'
              ? t('ux.gallery.body')
              : locale === 'ar'
              ? 'لقطة حقيقية من Binary BIM، مصممة لتبقي إعدادات التشطيبات وقرارات الغرف واضحة وقابلة للمراجعة.'
              : 'A real Binary BIM workspace view, designed to keep finish settings and room decisions clear and reviewable.'}
          </p>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-950/20 px-4 py-2 text-sm font-semibold text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-300 transition-colors shadow-sm"
              onClick={() => setOpen(true)}
            >
              {item.type === 'video' ? (
                <>
                  <Play className="h-4 w-4 fill-current" />{' '}
                  {locale === 'ar' ? 'شاهد الفيديو بالكامل' : 'Watch full video'}
                </>
              ) : (
                <>
                  <Expand className="h-4 w-4" />{' '}
                  {locale === 'ar' ? 'شاهد بالحجم الكامل' : 'View full size'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Centered Main Stage (Video / Active Screenshot) */}
        <div className="mt-8 sm:mt-10">
          <div className="relative mx-auto w-full aspect-video max-w-5xl overflow-hidden rounded-2xl border border-[#263449] bg-black shadow-2xl">
            {/* Clickable Media Surface */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
              className="group absolute inset-0 h-full w-full cursor-pointer select-none overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              aria-label={item.type === 'video' ? 'Play product video' : 'Open product image'}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    key="gallery-video"
                    className="absolute inset-0 h-full w-full object-contain bg-black opacity-95 transition duration-500 group-hover:scale-[1.01]"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={product.video} type="video/mp4" />
                  </video>

                  {/* Play Button - Dead Center */}
                  <span className="showcase-play pointer-events-none z-20">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current text-white ms-0.5" />
                  </span>

                  {/* Label - Top Start */}
                  <span className="showcase-media-label top-3 start-3 sm:top-4 sm:start-4 pointer-events-none z-20">
                    {label}
                  </span>
                </>
              ) : (
                <>
                  <Image
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    src={item.src}
                    alt={label}
                    className="object-contain p-2 sm:p-5"
                  />
                  <span className="showcase-media-label top-3 start-3 sm:top-4 sm:start-4 pointer-events-none z-20">
                    {label}
                  </span>
                  <span className="showcase-expand z-20">
                    <Expand className="h-4 w-4" />
                  </span>
                </>
              )}
            </div>

            {/* Media Navigation Controls (Arrows + Counter) */}
            <div className="showcase-controls bottom-3 end-3 sm:bottom-4 sm:end-4 z-20 pointer-events-auto shadow-lg">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  previous();
                }}
                aria-label="Previous media"
                className="hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              <span className="px-1 text-xs font-mono font-medium">
                {String(current + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next media"
                className="hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails Underneath the Video (Scrollable & Interactive) */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-5xl">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400">
              {locale === 'ar' ? 'معاينة الوسائط ولقطات الشاشة' : 'Screenshots & Demo'}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-slate-400">
                {current + 1} / {media.length}
              </span>
              <div className="hidden sm:flex items-center gap-1 ms-2">
                <button
                  type="button"
                  onClick={() => scrollThumbnails('left')}
                  className="rounded-md border border-[#263449] bg-[#0B1120] p-1.5 text-slate-400 hover:text-white hover:bg-[#172033] transition-colors"
                  aria-label="Scroll thumbnails left"
                >
                  <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollThumbnails('right')}
                  className="rounded-md border border-[#263449] bg-[#0B1120] p-1.5 text-slate-400 hover:text-white hover:bg-[#172033] transition-colors"
                  aria-label="Scroll thumbnails right"
                >
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Scrollable Filmstrip */}
          <div
            ref={stripRef}
            className="showcase-strip flex gap-2.5 sm:gap-3 overflow-x-auto pb-3 pt-1 px-1 scroll-smooth"
          >
            {media.map((entry, index) => {
              const isActive = index === current;
              return (
                <button
                  key={entry.type === 'video' ? 'video' : entry.src}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`relative aspect-[16/10] w-24 sm:w-28 md:w-32 shrink-0 overflow-hidden rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'border-cyan-400 ring-2 ring-cyan-400/60 opacity-100 shadow-lg scale-105 z-10'
                      : 'border-[#263449] opacity-55 hover:opacity-90 hover:border-slate-500'
                  }`}
                  aria-label={`Select item ${index + 1}`}
                >
                  {entry.type === 'video' ? (
                    <div className="relative h-full w-full bg-slate-900 flex items-center justify-center">
                      <video
                        className="h-full w-full object-cover"
                        muted
                        preload="none"
                      >
                        <source src={product.video} type="video/mp4" />
                      </video>
                      <span className="absolute inset-0 m-auto grid h-7 w-7 place-items-center rounded-full bg-blue-600/90 text-white shadow-md">
                        <Play className="h-3.5 w-3.5 fill-current ms-0.5" />
                      </span>
                    </div>
                  ) : (
                    <Image
                      fill
                      sizes="128px"
                      src={entry.src}
                      alt=""
                      className="object-cover bg-[#0B1120]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Modal View */}
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/95 p-3 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <button
            type="button"
            className="absolute end-4 top-4 sm:end-6 sm:top-6 z-20 rounded-full border border-white/20 bg-slate-900/80 p-2.5 text-white hover:bg-slate-800 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close fullscreen modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            {item.type === 'video' ? (
              <video
                className="max-h-[80vh] sm:max-h-[85vh] w-full"
                controls
                autoPlay
                playsInline
              >
                <source src={product.video} type="video/mp4" />
              </video>
            ) : (
              <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh]">
                <Image
                  fill
                  sizes="100vw"
                  src={item.src}
                  alt={label}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
