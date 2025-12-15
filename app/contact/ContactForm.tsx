"use client";
import { useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  city: 'Wirral' | 'Manchester' | 'London' | 'Other';
  cityOther: string;
  sessions: string[];
  datesTimes: string;
  experience: 'Beginner' | 'Intermediate' | 'Advanced' | '';
  healthNotes: string;
  ackDeposit: boolean;
  ackEtiquette: boolean;
};

const SESSION_OPTIONS = [
  '1-to-1 Private Discipline Sessions',
  'Virtual Submission Sessions',
  'Coffee & Introduction',
  'Event Experiences (Kink)',
  'Social Companionship',
  'Public Social Engagements',
];
const EXPERIENCE_LEVELS: Array<FormState['experience']> = ['Beginner','Intermediate','Advanced'];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    city: 'Wirral',
    cityOther: '',
    sessions: [],
    datesTimes: '',
    experience: '',
    healthNotes: '',
    ackDeposit: false,
    ackEtiquette: false
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const cityDisplay = useMemo(() => (form.city === 'Other' ? form.cityOther.trim() || 'Other' : form.city), [form.city, form.cityOther]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]){ setForm(prev => ({ ...prev, [key]: value })); }
  function toggleSession(option: string){
    setForm(prev => ({ ...prev, sessions: prev.sessions.includes(option) ? prev.sessions.filter(s => s !== option) : [...prev.sessions, option] }));
  }
  function validate(): string[] {
    const errs: string[] = [];
    if (!form.name.trim()) errs.push('Full name is required.');
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.push('A valid email is required.');
    if (form.city === 'Other' && !form.cityOther.trim()) errs.push('Please specify your city.');
    if (form.sessions.length === 0) errs.push('Select at least one desired session.');
    if (!form.datesTimes.trim()) errs.push('Provide preferred dates and times.');
    if (!form.experience) errs.push('Select your experience level.');
    if (!form.ackDeposit) errs.push('You must acknowledge the minimum booking & deposit.');
    if (!form.ackEtiquette) errs.push('You must agree to etiquette, discretion, and vetting.');
    return errs;
  }
  function buildMailto(){
    const to = 'QueenMazeRoyalty@gmail.com';
    const subject = `Petition to Serve — ${form.name}`;
    const body =
      `Full name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `City: ${cityDisplay}\n\n` +
      `Desired session(s):\n- ${form.sessions.join('\n- ')}\n\n` +
      `Preferred dates & times:\n${form.datesTimes}\n\n` +
      `Experience level: ${form.experience}\n\n` +
      `Health / accessibility notes (optional):\n${form.healthNotes || '—'}\n\n` +
      `Acknowledgements:\n- Minimum 2-hour booking & 50% deposit: ${form.ackDeposit ? 'Yes' : 'No'}\n` +
      `- Etiquette, discretion & vetting: ${form.ackEtiquette ? 'Yes' : 'No'}\n\n` +
      `© ${new Date().getFullYear()} Queen Maze · Submission reviewed at Her discretion.`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  function handleSubmit(e: React.FormEvent){ e.preventDefault(); const v = validate(); setErrors(v); if (v.length===0){ window.location.href = buildMailto(); } }
  async function copyAsEmail(){ try{ await navigator.clipboard.writeText(buildMailto()); setCopied(true); setTimeout(()=>setCopied(false),2000);}catch{} }

  return (
    <section className="px-6 pb-16">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-5">
        {errors.length>0 && (
          <div className="rounded-2xl p-4 border" style={{ borderColor: 'var(--gold-dark)' }}>
            <ul className="list-disc list-inside text-rose-300">{errors.map((err,i)=>(<li key={i}>{err}</li>))}</ul>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Full name" required><input type="text" className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.name} onChange={e=>update('name', e.target.value)} /></Field>
          <Field label="Email" required><input type="email" className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.email} onChange={e=>update('email', e.target.value)} /></Field>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Field label="City">
            <select className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.city} onChange={e=>update('city', e.target.value as any)}>
              <option>Wirral</option><option>Manchester</option><option>London</option><option>Other</option>
            </select>
          </Field>
          {form.city==='Other' && (<Field label="Specify city"><input type="text" className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.cityOther} onChange={e=>update('cityOther', e.target.value)} /></Field>)}
        </div>

        <Field label="Desired session(s)" required>
          <div className="grid grid-cols-1 gap-2">
            {SESSION_OPTIONS.map(opt => (
              <label key={opt} className="flex items-center gap-3">
                <input type="checkbox" checked={form.sessions.includes(opt)} onChange={()=>toggleSession(opt)} className="accent-[#C7A869]" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </Field>

        <Field label="Preferred dates & times" required>
          <textarea rows={3} className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.datesTimes} onChange={e=>update('datesTimes', e.target.value)} placeholder="e.g., Fridays after 6pm, or 12–2pm Tuesdays" />
        </Field>

        <Field label="Experience level" required>
          <div className="flex flex-wrap gap-4">
            {EXPERIENCE_LEVELS.map(level => (
              <label key={level} className="flex items-center gap-3">
                <input type="radio" name="experience" value={level} checked={form.experience===level} onChange={e=>update('experience', e.target.value as any)} className="accent-[#C7A869]" />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </Field>

        <Field label="Health / accessibility notes (optional)">
          <textarea rows={3} className="w-full rounded-xl bg-black/40 border px-4 py-3" style={{ borderColor: 'var(--gold-dark)' }} value={form.healthNotes} onChange={e=>update('healthNotes', e.target.value)} placeholder="Any relevant notes I should know before we begin." />
        </Field>

        <div className="rounded-2xl p-5 border" style={{ borderColor: 'var(--gold-dark)' }}>
          <div className="font-display text-lg mb-3" style={{ color: 'var(--gold)' }}>Acknowledgements</div>
          <label className="flex items-start gap-3 mb-2">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackDeposit} onChange={e=>update('ackDeposit', e.target.checked)} />
            <span>I understand the <strong>minimum 2-hour booking</strong> and <strong>50% deposit</strong> requirement.</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackEtiquette} onChange={e=>update('ackEtiquette', e.target.checked)} />
            <span>I agree to <strong>etiquette</strong>, <strong>discretion</strong>, and <strong>vetting</strong>.</span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button type="submit" className="px-6 py-3 rounded-2xl border transition hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: 'var(--gold-dark)', color: 'var(--gold)' }}>Send Petition (Email)</button>
          <button type="button" onClick={copyAsEmail} className="px-6 py-3 rounded-2xl border text-zinc-300 hover:text-zinc-100 transition" style={{ borderColor: 'var(--gold-dark)' }} title="Copies a prefilled mailto link (fallback)">Copy Mailto Link</button>
        </div>
        {copied && (<div className="text-center text-xs text-zinc-400">Copied prefilled email link to clipboard.</div>)}

        <div className="text-center text-xs text-zinc-500">Submissions are reviewed at My discretion. Your information remains confidential.</div>
      </form>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-zinc-300">{label} {required && <span className="text-zinc-500">(required)</span>}</div>
      {children}
    </label>
  );
}
