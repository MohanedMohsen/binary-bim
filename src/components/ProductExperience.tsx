'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { product } from '@/data/products';
import { useI18n } from '@/lib/i18n';

type Media = { kind: 'image'; src: string } | { kind: 'video' };
const media: Media[] = [...product.screenshots.map((src) => ({ kind: 'image' as const, src })), { kind: 'video' }];

function Action({ children, quiet = false }: { children: React.ReactNode; quiet?: boolean }) {
  return <span className={quiet ? 'inline-flex items-center rounded-md border border-[#263449] px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800' : 'inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500'}>{children}</span>;
}

function CompanyVisual() {
  return <div className="relative isolate aspect-[16/10] overflow-hidden rounded-2xl border border-[#263449] bg-[#111827] shadow-2xl">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#2563EB 1px,transparent 1px),linear-gradient(90deg,#2563EB 1px,transparent 1px)', backgroundSize: '44px 44px' }} />
    <div className="absolute inset-[13%] rounded-xl border border-blue-500/40 bg-[#0B1120]/70 p-5">
      <div className="h-2 w-20 rounded bg-blue-500/70" />
      <div className="mt-6 grid grid-cols-3 gap-3"><i className="h-20 rounded border border-[#263449] bg-[#172033]" /><i className="h-20 rounded border border-[#263449] bg-[#172033]" /><i className="h-20 rounded border border-[#263449] bg-[#172033]" /></div>
      <div className="mt-4 h-2 w-2/3 rounded bg-slate-600/70" />
    </div>
    <div className="absolute bottom-[17%] end-[12%] rounded-lg border border-cyan-500/40 bg-[#172033] px-5 py-4 shadow-xl"><span className="block text-xs tracking-[.14em] text-cyan-400">BIM</span><span className="mt-1 block text-sm font-semibold text-slate-100">Automation</span></div>
  </div>;
}

function MediaGallery() {
  const { t } = useI18n();
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const active = media[selected];
  const thumb = (entry: Media, index: number) => <button key={entry.kind === 'image' ? entry.src : 'video'} onClick={() => setSelected(index)} className={'relative h-16 w-24 flex-none overflow-hidden rounded-md border transition ' + (selected === index ? 'border-blue-500 ring-1 ring-blue-500' : 'border-[#263449] hover:border-slate-500')} aria-label={entry.kind === 'video' ? 'Play product video' : t('product.shots.open') + ' ' + (index + 1)}>{entry.kind === 'image' ? <Image fill src={entry.src} alt="" className="object-cover" /> : <><video className="h-full w-full object-cover opacity-60" muted preload="metadata"><source src="/videos/binary-bim-promo.mp4" type="video/mp4" /></video><Play className="absolute inset-0 m-auto h-4 w-4 text-white" /></>}</button>;
  return <section className="relative overflow-hidden bg-[#111827] py-24">
    <div className="absolute inset-x-0 top-0 h-px bg-[#263449]" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <div className="lg:pt-5">
          <p className="text-xs font-semibold tracking-[.16em] text-cyan-400">{t('product.shots.kicker')}</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-100">{t('product.shots.title')}</h2>
          <div className="mt-8 hidden border-s border-[#263449] ps-4 lg:block">{media.map((entry, index) => <button key={entry.kind === 'image' ? entry.src : 'video'} onClick={() => setSelected(index)} className={'group flex w-full items-center gap-3 border-s-2 py-2 ps-3 text-start text-sm transition ' + (selected === index ? '-ms-[17px] border-blue-500 text-slate-100' : '-ms-[17px] border-transparent text-slate-500 hover:text-slate-300')}><span className="font-mono text-xs text-blue-400/80">{String(index + 1).padStart(2, '0')}</span><span>{entry.kind === 'video' ? 'Video' : 'Interface'}</span>{entry.kind === 'video' && <Play className="ms-auto h-3.5 w-3.5" />}</button>)}</div>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-[#263449] bg-[#0B1120] p-2 shadow-[0_28px_70px_rgb(2_6_23_/_0.32)]">
            <div className="flex h-8 items-center gap-1.5 border-b border-[#263449] px-3"><i className="h-1.5 w-1.5 rounded-full bg-slate-600" /><i className="h-1.5 w-1.5 rounded-full bg-slate-600" /><i className="h-1.5 w-1.5 rounded-full bg-slate-600" /><span className="ms-3 h-1.5 w-24 rounded bg-slate-700" /></div>
            <button onClick={() => active.kind === 'image' && setLightbox(true)} className="relative block aspect-[16/9] w-full overflow-hidden text-left">{active.kind === 'image' ? <Image fill priority src={active.src} alt="Binary BIM product interface" className="object-contain p-3 transition duration-500 hover:scale-[1.012]" /> : <video className="h-full w-full bg-black object-contain p-3" controls playsInline preload="metadata"><source src="/videos/binary-bim-promo.mp4" type="video/mp4" /></video>}</button>
          </div>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2 lg:hidden">{media.map(thumb)}</div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">{[1, 4, 7].map((index) => <button key={index} onClick={() => setSelected(index)} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#263449] bg-[#0B1120] transition hover:-translate-y-1 hover:border-blue-500"><Image fill src={product.screenshots[index]} alt="" className="object-cover opacity-85" /></button>)}<button onClick={() => setSelected(media.length - 1)} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#263449] bg-[#0B1120] transition hover:-translate-y-1 hover:border-cyan-500"><video className="h-full w-full object-cover opacity-60" muted preload="metadata"><source src="/videos/binary-bim-promo.mp4" type="video/mp4" /></video><Play className="absolute inset-0 m-auto h-6 w-6 text-white" /></button></div>
        </div>
      </div>
    </div>
    {lightbox && active.kind === 'image' && <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/90 p-4" role="dialog" aria-modal="true"><button className="absolute end-5 top-5 text-white" onClick={() => setLightbox(false)} aria-label="Close"><X /></button><div className="relative h-[85vh] w-full max-w-7xl"><Image fill src={active.src} alt="Binary BIM product interface enlarged" className="object-contain" /></div></div>}
  </section>;
}

export function ProductExperience({ home = false }: { home?: boolean }) {
  const { t } = useI18n();
  if (home) return <main className="overflow-hidden bg-[#0B1120]"><section className="pt-32 pb-20 sm:pt-40 sm:pb-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="text-xs font-semibold tracking-[.16em] text-blue-400">{t('hero.kicker')}</p><h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">{t('hero.title')}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">{t('hero.body')}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/products"><Action>{t('hero.explore')} <ArrowRight className="ms-2 h-4 w-4" /></Action></Link><Link href="/contact"><Action quiet>{t('nav.request')}</Action></Link></div></div><CompanyVisual /></div></section><section className="border-y border-[#263449] bg-[#111827] py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-xs font-semibold tracking-[.16em] text-cyan-400">{t('home.product.kicker')}</p><h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-100">{t('home.product.title')}</h2><p className="mt-5 max-w-2xl leading-7 text-slate-400">{t('home.product.body')}</p><Link className="mt-7 inline-flex items-center text-sm font-semibold text-blue-400" href="/products">{t('home.product.link')} <ArrowRight className="ms-2 h-4 w-4" /></Link></div></section></main>;
  return <main className="bg-[#0B1120]"><section className="pt-32 pb-16 sm:pt-40"><div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-xs font-semibold tracking-[.16em] text-blue-400">{t('product.kicker')}</p><h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">{t('product.title')}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{t('product.body')}</p><Link href="/contact" className="mt-8 inline-block"><Action>{t('nav.request')}</Action></Link></div></section><MediaGallery /><section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-xs font-semibold tracking-[.16em] text-blue-400">{t('product.problem.title')}</p><p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">{t('product.problem.body')}</p><h2 className="mt-14 text-2xl font-bold text-slate-100">{t('product.capabilities')}</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{[1,2,3].map(n => <div key={n} className="rounded-xl border border-[#263449] bg-[#172033] p-6"><h3 className="font-semibold text-slate-100">{t('product.cap'+n+'.title')}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{t('product.cap'+n+'.body')}</p></div>)}</div></div></section></main>;
}
