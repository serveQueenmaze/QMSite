'use client';
import { useEffect, useState } from 'react';

/* Option B Crown — matte gold line‑art */
function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 72" aria-hidden {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 56 L28 28 L44 44 L64 20 L84 44 L100 28 L120 56 Z" />
        <circle cx="28" cy="28" r="2.4" />
        <circle cx="64" cy="20" r="2.6" />
        <circle cx="100" cy="28" r="2.4" />
        <path d="M16 60 H112" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#manifesto', label: 'Enter the House' },
    { href: '/structure', label: 'Structure' },
    { href: '#house', label: 'Explore the Empire' },
    { href: '/reverie', label: 'Chamber of Reverie' },
    { href: '/contact', label: 'Kneel' },
  ];

  const houseLinks = [
    { href: 'https://www.loyalfans.com/queenmaze', label: 'LoyalFans', sub: 'Exclusive & Custom Content' },
    { href: 'https://throne.com/maziqueen', label: 'Throne', sub: 'Invest & Tribute' },
    { href: 'https://www.instagram.com/mistress_mazequeen', label: 'Instagram', sub: 'Visual Journal' },
    { href: 'https://fetlife.com/QueenMaze', label: 'Fetlife', sub: 'Inner Sanctum' },
    { href: 'https://x.com/QueenMazetweets', label: 'X (Twitter)', sub: 'Thoughts & Philosophy' },
    { href: 'https://bsky.app/profile/queenmaze.bsky.social', label: 'Bluesky', sub: 'Parallel Reflections' },
    { href: '#email', label: 'Email List', sub: 'Join the House' },
    { href: '#merch', label: 'Merch (Coming soon)', sub: 'Objects of Discipline' },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      
      {/* Hero */}
      <section id="top" className="relative min-h-[100svh] grid place-items-center px-6 bg-center bg-cover" style={{ backgroundImage: "url('/assets/hero/hero.jpg')" }}>
        <div className="candle-pulse" aria-hidden />
        <div aria-hidden className="absolute inset-0 hero-overlay" style={{ zIndex: 0 }}>
          <div className="absolute inset-0" style={{ background:
            `radial-gradient(900px 600px at -10% 50%, rgba(199,168,105,0.10), transparent 55%),` +
            `radial-gradient(700px 480px at 50% -15%, rgba(65,22,27,0.10), transparent 70%),` +
            `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.70) 100%)` }} />
        </div>
        <div className="text-center space-y-6 relative" style={{ zIndex: 1 }}>
          <CrownIcon className="mx-auto w-12 h-12" style={{ color: 'var(--gold)' }} />
          <h1 className="font-display text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--gold)' }}>QUEEN MAZE</h1>
          <p className="text-lg md:text-xl text-zinc-200">where desire meets discipline …</p>
          <p className="text-sm text-zinc-400">Facilitator of Refined Power Dynamics</p>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3">
            {links.map(l => (
              <a key={l.label} href={l.href} className="w-full md:w-auto px-5 py-3 rounded-2xl border transition shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200 ease-out text-center" style={{ borderColor: 'var(--gold-dark)', color: 'var(--gold)' }}>{l.label}</a>
            ))}
          </div>
          <div className="mt-3">
            <button type="button" onClick={() => {
              const el = document.documentElement;
              const off = el.classList.toggle('candle-off');
              try { localStorage.setItem('qm-candle', off ? 'off' : 'on'); } catch (e) {}
            }} className="text-xs text-zinc-500 hover:text-[var(--gold)] underline" aria-label="Toggle candlelight">
              Candlelight: <span>{typeof document !== 'undefined' && document.documentElement.classList.contains('candle-off') ? 'Off' : 'On'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="h-px w-24 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-xl md:text-2xl leading-relaxed">
            There is power in obedience.<br />There is beauty in restraint.<br />
            In the House of Maze, discipline becomes devotion and surrender a form of art.<br />
            I create structured spaces where those who crave control learn the grace of letting go. <span className="whitespace-nowrap">And those who long to serve... bow at my throne.</span>
          </p>
          <div className="h-px w-24 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-sm text-zinc-400">Welcome to my praxis of power. Where elegance and authority coexist, and luxury is the standard.</p>
        </div>
      </section>

      {/* House */}
      <section id="house" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-3" style={{ color: 'var(--gold)' }}>The House of Maze</h2>
          <p className="text-center text-zinc-300 mb-10 leading-relaxed text-lg">Every empire needs its corridors. Choose your path and step deeper into the Maze.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {houseLinks.map(({ href, label, sub }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="house-card group rounded-2xl p-6 border text-center transition duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: 'var(--gold-dark)' }}>
                <span className="house-label block text-lg md:text-xl font-medium transition" style={{ color: 'var(--gold)', letterSpacing: '.02em' }}>{label}</span>
                <div className="mt-1 text-sm text-zinc-400 tracking-wide leading-snug">{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-zinc-200">“Power is not taken. It is granted. Only those who understand sweet surrender ever experience true freedom.”</blockquote>
          <div className="mt-4 text-sm text-zinc-400">— <span className="font-medium">Queen Maze</span> ⚜️ · Tormentor of Men</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-zinc-900 text-center">
        <div className="max-w-5xl mx-auto space-y-1">
          <div className="text-sm" style={{ color: 'var(--gold)' }}>© {new Date().getFullYear()} Queen Maze 👑 · All Rights Reserved.</div>
          <div className="text-xs" style={{ color: 'var(--micro)' }}>A forward-facing brand exploring refined power dynamics and facilitating elite sensory experiences for discerning gentlemen.</div>
        </div>
      </footer>
    </main>
  );
}
