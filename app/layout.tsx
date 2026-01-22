import type { Metadata } from 'next';
import './globals.css';
import { Cinzel_Decorative, Spectral } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
   title: 'Queen Maze refinement through discipline.',
  description: 'Queen Maze is a luxury sensory experience designer and facilitator of refined power dynamics, offering structure-led transformation and curated submission encounters.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${spectral.variable}`}>
      <head />
      <body suppressHydrationWarning className="bg-black text-zinc-100 overflow-x-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var pref = localStorage.getItem('qm-candle');
                  if(pref === 'off'){ document.documentElement.classList.add('candle-off'); }
                }catch(e){}
              })();
            `,
          }}
        />

        <header className="fixed top-0 inset-x-0 z-[999] backdrop-blur-sm pointer-event-auto">
          <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
            {/* Brand / Home */}
            <a
              href="/"
              className="font-display text-lg tracking-wide text-[var(--gold)] hover:opacity-90"
            >
              Queen Maze
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/#" className="hover:text-[var(--gold)]">Home</a>
            <a href="/structure" className="hover:text-[var(--gold)]">Structure</a>
            <a href="/#house" className="hover:text-[var(--gold)]">Empire</a>
            <a href="/reverie" className="hover:text-[var(--gold)]">Reverie</a>
            <a href="/contact" className="hover:text-[var(--gold)]">Kneel</a>
          </nav>

            {/* Mobile menu placeholder */}
            <button className="md:hidden text-sm text-zinc-200" aria-label="Open menu">
              <a href="/#" className="hover:text-[var(--gold)]">House</a>
            </button>
          </div>
        </header>

        <main className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
