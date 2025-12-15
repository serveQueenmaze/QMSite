/*
 * Kneel — server wrapper with hero + footer
 */
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Kneel — Queen Maze',
  description: 'Petition to serve · Private contact form',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          <div className="font-display text-xl md:text-2xl" style={{ color: 'var(--gold)' }}>Queen Maze</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-[var(--gold)]">Home</a>
            <a href="/structure" className="hover:text-[var(--gold)]">Structure</a>
            <a href="/#house" className="hover:text-[var(--gold)]">Empire</a>
            <a href="/reverie" className="hover:text-[var(--gold)]">Reverie</a>
            <a href="/contact" className="hover:text-[var(--gold)]">Kneel</a>
          </nav>
        </div>
      </header>

      {/* Hero / Introduction */}
      <section className="relative pt-28 pb-16 px-6">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background:
            `radial-gradient(900px 600px at -10% 50%, rgba(199,168,105,0.18), transparent 55%),` +
            `radial-gradient(700px 480px at 50% -15%, rgba(65,22,27,0.12), transparent 70%),` +
            `linear-gradient(180deg, #0B0B0C 0%, #000 100%)` }} />
          <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{ backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27><rect width=%2716%27 height=%2716%27 fill=%27%23000000%27/><circle cx=%228%27 cy=%228%27 r=%271%27 fill=%27%23121212%27/></svg>")', backgroundSize: '16px 16px' }} />
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h1 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--gold)' }}>Kneel</h1>
          <p className="text-zinc-300">Petition to serve. Submissions are reviewed at My discretion. 
            Your information remains confidential.</p>
          <div className="h-px w-24 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
        </div>
      </section>

      {/* Form */}
      <ContactForm />

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
