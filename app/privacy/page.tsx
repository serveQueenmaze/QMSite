export const metadata = {
  title: 'Privacy Policy | Queen Maze',
  description: 'Privacy Policy for the Queen Maze website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <h1
          className="font-display text-3xl md:text-4xl tracking-wide"
          style={{ color: 'var(--gold)' }}
        >
          Privacy Policy
        </h1>

        <p className="text-sm text-zinc-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <p>
            Queen Maze respects your privacy and is committed to protecting any
            personal information you choose to share. This website is designed
            to operate with discretion, clarity, and respect for individual
            autonomy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Information We Collect
          </h2>
          <p>
            Limited personal information may be collected when you voluntarily
            submit an inquiry through the contact form. This may include details
            such as your name, email address, and the content of your message.
          </p>
          <p>
            Sensitive personal information is not collected unless you
            explicitly choose to provide it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            How Information Is Used
          </h2>
          <p>
            Any information you provide is used solely for responding to
            inquiries, communicating regarding services or requests you
            initiate, and maintaining the functionality and security of this
            website.
          </p>
          <p>
            Personal information is never sold, rented, or shared for marketing
            or advertising purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Analytics
          </h2>
          <p>
            This website uses privacy-friendly analytics provided by Vercel to
            understand general site usage, such as page views and device type.
            These analytics do not use cookies, track individual users, or
            identify visitors personally.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Data Security
          </h2>
          <p>
            Reasonable technical and organizational safeguards are in place to
            protect personal information. However, no method of data
            transmission over the internet can be guaranteed as completely
            secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party platforms. Queen Maze
            is not responsible for the content or privacy practices of external
            websites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of personal
            information you have provided by using the contact form on this
            website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Policy Updates
          </h2>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            posted on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Contact
          </h2>
          <p>
            For questions regarding this Privacy Policy, please contact Queen
            Maze via the website’s contact form.
          </p>
        </section>

      </div>
    </main>
  );
}
