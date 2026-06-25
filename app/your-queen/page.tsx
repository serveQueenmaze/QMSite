export const metadata = {
  title: 'Your Queen | The Woman Behind the Throne | Queen Maze',
  description:
    'Discover the philosophy, background and approach behind Queen Maze. Explore the values, structure and intention that shape every carefully curated experience.',
};

const method = [
  {
    numeral: 'Ⅰ',
    title: 'Conversation',
    body:
      'Every journey begins with dialogue. Before any session takes place, I take the time to understand who you are, what draws you here, your experience, your aspirations, and the boundaries that allow exploration to remain safe, informed and mutually enjoyable.',
  },
  {
    numeral: 'Ⅱ',
    title: 'Assessment',
    body:
      'Chemistry cannot be assumed. Compatibility matters. Not every person who asks will receive time with me. I look for curiosity, emotional maturity, honesty and a willingness to engage with discipline respectfully. The strongest dynamics are built deliberately, never hurried.',
  },
  {
    numeral: 'Ⅲ',
    title: 'Preparation',
    body:
      'Thoughtful preparation creates meaningful experiences. Whether psychological, physical or ceremonial, I consider every element with care. Structure allows both of us to arrive fully present.',
  },
  {
    numeral: 'Ⅳ',
    title: 'Experience',
    body:
      'Within a carefully negotiated framework, I create an environment where responsibility can be set aside and attention redirected inward. Sessions are crafted to challenge, reward, surprise and encourage reflection, always grounded within the container of communication, consent and mutual respect.',
  },
  {
    numeral: 'Ⅴ',
    title: 'Reflection',
    body:
      'The experience does not necessarily end when the session does. Reflection often reveals as much as the experience itself. Many clients leave with greater clarity, inner stillness, renewed confidence, or a deeper understanding of themselves than they expected when they first arrived.',
  },
];

export default function YourQueenPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 overflow-x-hidden">
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-14 w-[320px] max-w-full">
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_0_60px_rgba(199,168,105,0.18)]">
              <img
                src="/assets/your-queen/portrait.jpg"
                alt="Queen Maze portrait"
                className="w-full h-auto object-cover opacity-95"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
            </div>
          </div>

          <h1
            className="font-display text-3xl md:text-5xl tracking-wide uppercase"
            style={{ color: 'var(--gold)' }}
          >
            The woman behind the Throne.
          </h1>

          <div className="mt-6 h-px w-24 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-20">
          <section className="space-y-6">
            <h2 className="font-display text-2xl" style={{ color: 'var(--gold)' }}>
              Who is Queen Maze
            </h2>

            <p>
              I am an Irish raised, UK based Creative Professional. In my vanilla work life I wear many hats and facilitate diverse projects. Event host, writer, artist, public speaker, business owner, social media manager to list some of the many roles I inhabit. I am intelligent and an avid reader. As well as holding a BA and various CPDs, I am a lifelong student in the school of life as I am voracious in my hunger for knowledge and new skills.
            </p>

            <p>
              My love of Arts, culture and anthropology fuels my work. My passion for self exploration, philosophy, psychology and human behaviour fuels how I move through the k!nk world and which aspects of k!nk I hone in on exploring. As with everything in my life I approach with curiosity.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl" style={{ color: 'var(--gold)' }}>
              My philosophy
            </h2>

            <p>
              My philosophy, as I developed my professional kink practice, has been:
            </p>

            <p className="font-display text-xl md:text-1xl text-center py-6" style={{ color: 'var(--gold)' }}>
              Refinement Through Discipline. Liberation through structure
            </p>

            <p>
              I truly believe, as I have seen firsthand, the men who surrender to my discipline find their lives become elevated, their cadence refined, their gait lighter, their confidence improved. As they seek my guidance through structured sessions with me they find their minds liberated from shame and guilt.
            </p>

            <p>
              In my experience people need safe spaces to: surrender, release the burdens they carry, let go of the weight of societal expectations and simply to play, or exist and be told what to do. A space to explore the edges of themselves, to shut out the world, to push the boundaries of masculinity or to be pushed to their breaking point for fun or an emotional release.
            </p>

            <div className="py-10 text-center">
              <div className="h-px w-20 mx-auto mb-6" style={{ backgroundColor: 'var(--gold)' }} />
              <p className="font-display text-2xl md:text-2xl leading-relaxed" style={{ color: 'var(--gold)' }}>
                When the container is strong, the transformation is inevitable.
              </p>
              <div className="h-px w-20 mx-auto mt-6" style={{ backgroundColor: 'var(--gold)' }} />
            </div>
          </section>


          <section className="space-y-10">
            <h2 className="font-display text-3xl text-center uppercase" style={{ color: 'var(--gold)' }}>
              The Maze Method
            </h2>

            <div className="space-y-12">
              {method.map((item) => (
                <article key={item.title} className="space-y-4">
                  <div className="text-center">
                    <div className="font-display text-2xl" style={{ color: 'var(--gold)' }}>
                      {item.numeral}
                    </div>
                    <h3 className="font-display text-xl mt-2" style={{ color: 'var(--gold)' }}>
                      {item.title}
                    </h3>
                    <div className="h-px w-16 mx-auto mt-4" style={{ backgroundColor: 'var(--gold-dark)' }} />
                  </div>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

 <section className="py-12 text-center">
            <div className="h-px w-24 mx-auto mb-10" style={{ backgroundColor: 'var(--gold)' }} />
            <blockquote
              className="font-display text-2xl md:text-2xl leading-relaxed"
              style={{ color: 'var(--gold)' }}
            >
              “Authority, when exercised responsibly, has the power not merely to challenge us, but to transform us.”
            </blockquote>
            <p className="mt-6 text-sm text-zinc-400">— Queen Maze</p>
            <div className="h-px w-24 mx-auto mt-10" style={{ backgroundColor: 'var(--gold)' }} />
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl" style={{ color: 'var(--gold)' }}>
              Who I Work With
            </h2>

            <p>
              While every individual is different, the men who flourish in my world often share certain qualities.
            </p>

            <p>
              They are ambitious enough to value excellence, yet secure enough to admit they do not always wish to be in control.
             </p>

            <p>
              They are intellectually curious and appreciate thoughtful conversation as much as carefully crafted experiences.
            </p>

            <p>
              They understand that genuine submission is not weakness, but an intentional act requiring trust, courage and self-awareness.
            </p>

            <p>
              They respect boundaries, communicate honestly and recognise that consistency is one of the highest forms of devotion.
            </p>

            <p>
              Many are professionals, entrepreneurs, creatives or leaders whose daily lives demand constant decision-making. In my world, they discover something increasingly rare: permission to relinquish that responsibility for a while within a structured, carefully held environment..
            </p>
          </section>

          <section className="space-y-6 text-center">
            <h2 className="font-display text-2xl" style={{ color: 'var(--gold)' }}>
              An Invitation
            </h2>

            <p>
              If these words resonate with you, perhaps you&apos;ve recognised something familiar within yourself. Whether you are entirely new to power exchange or have spent years exploring it, meaningful journeys begin with curiosity.
            </p>

            <p>
              The Maze is not just a place to lose yourself. It is a place to discover who you become when discipline, intention and trust converge. If that journey speaks to you, I invite you to take the first step.
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-3 rounded-2xl border transition hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: 'var(--gold-dark)', color: 'var(--gold)' }}
            >
              Begin the Process
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}