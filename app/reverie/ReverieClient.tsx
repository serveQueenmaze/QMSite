'use client';
import { useEffect, useMemo, useState, useCallback } from 'react';

type Props = { images?: string[] };
const base = '/assets/reverie/reverie-';
const makeSrc = (n: number) => `${base}${String(n).padStart(2, '0')}.jpg`;

function useAutoImages(seed: string[] = []) {
  const [list, setList] = useState<string[]>(seed);
  useEffect(() => {
    let i = Math.max(1, seed.length || 1);
    let misses = 0; const MAX = 200; let cancelled = false;
    const probe = () => {
      if (cancelled) return;
      const src = makeSrc(i);
      const img = new Image();
      img.onload = () => { setList(prev => (prev.includes(src) ? prev : [...prev, src])); misses = 0; i += 1; if (i <= MAX) probe(); };
      img.onerror = () => { misses += 1; i += 1; if (misses < 3 && i <= MAX) probe(); };
      img.src = src;
    };
    if (seed.length === 0) { i = 1; probe(); } else { i = seed.length + 1; probe(); }
    return () => { cancelled = true; };
  }, [seed]);
  return list;
}

export default function ReverieClient({ images = [] }: Props) {
  const discovered = useAutoImages(images);
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen(i => (i === null ? i : (i + discovered.length - 1) % discovered.length)), [discovered.length]);
  const next = useCallback(() => setOpen(i => (i === null ? i : (i + 1) % discovered.length)), [discovered.length]);

  useEffect(() => {
    if (open !== null) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  const tiles = useMemo(() => discovered.map((src, i) => ({ src, i })), [discovered]);

  return (
    <>
      {/* Mobile carousel */}
      <section className="block md:hidden px-4 pb-10">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory" id="carousel">
          {tiles.map(({ src, i }) => (
            <button key={src} className="flex-shrink-0 w-[85vw] h-[60vh] snap-center rounded-2xl overflow-hidden shadow-lg shadow-black/40"
              onClick={() => setOpen(i)} aria-label={`Open Reverie image ${i + 1}`}>
              <img src={src} alt={`Reverie ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Desktop collage */}
      <section className="hidden md:grid max-w-6xl mx-auto grid-cols-12 gap-4 p-6 select-none">
        {tiles.map(({ src, i }) => (
          <button key={src}
            className="tile relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            style={{ gridColumn: `span ${i % 5 === 0 ? 6 : 4}`, height: (i % 3 === 0 ? 420 : 320), boxShadow: '0 6px 22px rgba(0,0,0,.38)' }}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
              const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
              el.style.setProperty('--rx', `${dy * -2}deg`);
              el.style.setProperty('--ry', `${dx * 2}deg`);
              el.style.transform = `rotateX(var(--rx)) rotateY(var(--ry)) scale(1.03)`;
            }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = `none`; }}
            onClick={() => setOpen(i)} aria-label={`Open Reverie image ${i + 1}`}>
            <img src={src} alt={`Reverie ${i + 1}`} className="w-full h-full object-cover will-change-transform" style={{ transition: 'transform 300ms ease' }} />
          </button>
        ))}
      </section>

      {/* Lightbox */}
      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={close} aria-modal="true" role="dialog">
          <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 text-2xl" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">‹</button>
          <img src={discovered[open]} alt={`Reverie full ${open + 1}`} className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 text-2xl" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">›</button>
          <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 text-xl" onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close">✕</button>
        </div>
      )}
    </>
  );
}
