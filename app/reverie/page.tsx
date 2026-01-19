export const metadata = {
  title: 'Chamber of Reverie — Queen Maze',
  description: 'An Archive of devotion, desire and deviance.',
};
import ReverieClient from './ReverieClient';
export default function ReveriePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
    
      <section className="pt-28 pb-10 px-6 text-center">
        <h1 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--gold)' }}>Chamber of Reverie</h1>
        <p className="text-sm text-zinc-400 mt-1">An Archive of devotion, desire and deviance.</p>
      </section>

      <ReverieClient />

      <footer className="py-10 px-6 border-t border-zinc-900 text-center mt-8">
        <div className="max-w-5xl mx-auto space-y-1">
          <div className="text-sm" style={{ color: 'var(--gold)' }}>© {new Date().getFullYear()} Queen Maze 👑 · All Rights Reserved.</div>
          <div className="text-xs" style={{ color: 'var(--micro)' }}>A forward-facing brand exploring refined power dynamics and facilitating elite sensory experiences for discerning gentlemen.</div>
        </div>
      </footer>
    </main>
  );
}
