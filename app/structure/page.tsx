export const metadata = {
  title: 'Structure — Queen Maze',
  description: 'Structure · Queen Maze',
};

const offerings: Array<{ title: string; lines: string[] }> = [
  {
    title: '1-to-1 Private Discipline Sessions',
    lines: [
      '£200 per hour · Minimum 2 hours per booking',
      '50% deposit required to secure your session. Tips encouraged.',
      '£1,500 · Block of four 2-hour sessions (paid in advance)',
    ],
  },
  { title: 'Virtual Submission Sessions', lines: ['£40 per 10-minute video call'] },
  {
    title: 'Coffee & Introduction',
    lines: [
      '£100 for a 45-minute introduction over coffee.',
      '50% deposit required unless tributed in advance via Throne.',
    ],
  },
  {
    title: 'Event Experiences (Kink)',
    lines: [
      'Serve Me for the duration of an event. Pedestal, Whimper, Unleashed, Devotion, or similar female domination themed events.',
      'You will facilitate My comfort throughout: transport to and from the venue, carrying tools, ensuring refreshments, and attending to My requirements.',
    ],
  },
  {
    title: 'Social Companionship',
    lines: [
      'Dinner engagements, shopping appointments, cash meets or museum visits. Each experience tailored and negotiated depending on setting and duration.',
    ],
  },
  {
    title: 'Public Social Engagements',
    lines: [
      'Theatre premieres, black-tie balls, charity galas, or weddings, elevate your evening with a Queen by your side.',
    ],
  },
];

export default function StructurePage() {
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
          <div
            className="absolute inset-0"
            style={{
              background:
                `radial-gradient(900px 600px at -10% 50%, rgba(199,168,105,0.18), transparent 55%),` +
                `radial-gradient(700px 480px at 50% -15%, rgba(65,22,27,0.12), transparent 70%),` +
                `linear-gradient(180deg, #0B0B0C 0%, #000 100%)`,
            }}
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27><rect width=%2716%27 height=%2716%27 fill=%27%23000000%27/><circle cx=%228%27 cy=%228%27 r=%271%27 fill=%27%23121212%27/></svg>")',
              backgroundSize: '16px 16px',
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--gold)' }}>
            STRUCTURE
          </h1>
          <p className="text-lg text-zinc-200">
            Discipline is the foundation of all transformation. Sessions with Queen Maze are skillfully crafted journeys in surrender — immersive, sensual, psychological, and artfully exacting.
          </p>
          <div className="h-px w-24 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
        </div>
      </section>

      {/* Offerings */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto grid gap-12">
          {offerings.map(({ title, lines }) => (
            <article key={title} className="rounded-2xl p-6 border transition hover:shadow-md"
              style={{ background: 'linear-gradient(180deg, rgba(65,22,27,.22), rgba(65,22,27,.08))', borderColor: 'var(--gold-dark)' }}>
              <h2 className="font-display text-xl md:text-2xl mb-2" style={{ color: 'var(--gold)' }}>{title}</h2>
              <ul className="space-y-1 text-zinc-300">
                {lines.map((line, idx) => (<li key={idx} className="leading-relaxed">{line}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Location & Note */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-display text-lg md:text-xl mb-2" style={{ color: 'var(--gold)' }}>Location</h3>
            <p className="text-zinc-300 leading-relaxed">
              Distinguished private dungeons in <strong>Wirral</strong> and <strong>Manchester</strong>.<br />
              House calls available for trusted, established devotees only.<br />
              <em>Fly Me to You</em> — available upon discussion.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg md:text-xl mb-2" style={{ color: 'var(--gold)' }}>Note</h3>
            <p className="text-zinc-300 leading-relaxed">
              Etiquette and discretion are paramount. Every engagement is by application, vetting, and mutual alignment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl p-6 text-center border" style={{ borderColor: 'var(--gold-dark)' }}>
          <h3 className="font-display text-xl md:text-2xl mb-3" style={{ color: 'var(--gold)' }}>Begin the Process</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Start the process now →Send a detailed email with which session/s you would like to request, dates, times, locations etc
          </p>
          <a href="mailto:QueenMazeRoyalty@gmail.com" className="inline-block px-6 py-3 rounded-2xl border transition hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: 'var(--gold-dark)', color: 'var(--gold)' }}>Request Structure</a>
          <div className="mt-3 text-sm text-zinc-400">QueenMazeRoyalty@gmail.com</div>
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
