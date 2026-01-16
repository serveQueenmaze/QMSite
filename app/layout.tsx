import type { Metadata } from 'next';
import './globals.css';
import { Cinzel_Decorative, Spectral } from 'next/font/google';

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
  title: 'Queen Maze — Where desire meets discipline.',
  description: 'Queen Maze: Elite Dominatrix, BDSM facilitator & transformational guide.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${spectral.variable}`}>
      <head />
      <body suppressHydrationWarning>
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

        <header className="fixed top-0 inset-x-0 z-[9999] bg-black/85 backdrop-blur-sm pointer-events-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between pointer-events-auto">
            <a
              href="/"
              className="font-display text-lg tracking-wide text-[var(--gold)] hover:opacity-90"
            >
              Queen Maze
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-200">
              <a href="/structure" className="hover:text-[var(--gold)]">Structure</a>
              <a href="/reverie" className="hover:text-[var(--gold)]">Reverie</a>
              <a href="/contact" className="hover:text-[var(--gold)]">Kneel</a>
            </nav>

            <button className="md:hidden text-sm text-zinc-200" aria-label="Open menu">
              Menu
            </button>
          </div>
        </header>

        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
