import type { Metadata } from 'next';
import './globals.css';
import { Cinzel_Decorative, Spectral } from 'next/font/google';

const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400','700'], variable: '--font-cinzel' });
const spectral = Spectral({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-body' });

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
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            try{
              var pref = localStorage.getItem('qm-candle');
              if(pref === 'off'){ document.documentElement.classList.add('candle-off'); }
            }catch(e){}
          })();
        `}} />
        {children}
      </body>
    </html>
  );
}
