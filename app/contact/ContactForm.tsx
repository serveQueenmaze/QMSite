"use client";

import { useMemo, useState } from "react";

type City = "Wirral" | "Manchester" | "London" | "Other";
type Experience = "Beginner" | "Intermediate" | "Advanced" | "";
type TravelAnswer = "Yes" | "No" | "Possibly" | "";
type SessionLocation =
  | "Wirral"
  | "Manchester"
  | "London"
  | "Fly Me to You"
  | "Virtual"
  | "Unsure";

type FormState = {
  name: string;
  preferredName: string;
  email: string;
  age: string;
  city: City;
  cityOther: string;
  canTravel: TravelAnswer;
  sessionLocation: SessionLocation;
  sessions: string[];
  datesTimes: string;
  experience: Experience;
  servedBefore: string;
  drawsToQueenMaze: string;
  submissionMeaning: string;
  hopes: string;
  readiness: string;
  boundaries: string;
  healthNotes: string;
  consentComfort: boolean;
  ackSelective: boolean;
  ackDeposit: boolean;
  ackEtiquette: boolean;
  ackCareless: boolean;
  finalDeclaration: string;
};

const SESSION_OPTIONS = [
  "1-to-1 Private Discipline Sessions",
  "Virtual Submission Sessions",
  "Coffee & Introduction",
  "Event Experiences",
  "Social Companionship",
  "Public Social Engagements",
  "Long-term dynamic consideration",
  "Unsure / seeking guidance",
];

const EXPERIENCE_LEVELS: Experience[] = ["Beginner", "Intermediate", "Advanced"];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    preferredName: "",
    email: "",
    age: "",
    city: "Wirral",
    cityOther: "",
    canTravel: "",
    sessionLocation: "Wirral",
    sessions: [],
    datesTimes: "",
    experience: "",
    servedBefore: "",
    drawsToQueenMaze: "",
    submissionMeaning: "",
    hopes: "",
    readiness: "",
    boundaries: "",
    healthNotes: "",
    consentComfort: false,
    ackSelective: false,
    ackDeposit: false,
    ackEtiquette: false,
    ackCareless: false,
    finalDeclaration: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const cityDisplay = useMemo(
    () => (form.city === "Other" ? form.cityOther.trim() || "Other" : form.city),
    [form.city, form.cityOther]
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSession(option: string) {
    setForm((prev) => ({
      ...prev,
      sessions: prev.sessions.includes(option)
        ? prev.sessions.filter((s) => s !== option)
        : [...prev.sessions, option],
    }));
  }

  function validate(): string[] {
    const errs: string[] = [];

    if (!form.name.trim()) errs.push("Full name is required.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.push("A valid email is required.");
    if (!form.age.trim()) errs.push("Age is required.");
    if (form.city === "Other" && !form.cityOther.trim()) errs.push("Please specify your city.");
    if (!form.canTravel) errs.push("Please state whether you are able to travel.");
    if (!form.sessionLocation) errs.push("Please select a preferred session location.");
    if (form.sessions.length === 0) errs.push("Select at least one desired session or request type.");
    if (!form.datesTimes.trim()) errs.push("Provide preferred dates and times.");
    if (!form.experience) errs.push("Select your experience level.");
    if (!form.drawsToQueenMaze.trim()) errs.push("Please explain what draws you to Queen Maze specifically.");
    if (!form.hopes.trim()) errs.push("Please explain what you are hoping to experience, explore or understand.");
    if (!form.finalDeclaration.trim()) errs.push("Please complete the final petition declaration.");

    if (!form.consentComfort) errs.push("You must acknowledge communication, consent and aftercare expectations.");
    if (!form.ackSelective) errs.push("You must acknowledge that Queen Maze’s time is selective and not guaranteed.");
    if (!form.ackDeposit) errs.push("You must acknowledge tribute/deposit expectations.");
    if (!form.ackEtiquette) errs.push("You must agree to etiquette, discretion and vetting.");
    if (!form.ackCareless) errs.push("You must acknowledge that careless or incomplete petitions may be ignored.");

    return errs;
  }

  function buildMailto() {
    const to = "serve@queenmaze.com";
    const subject = `Petition to Serve — ${form.name}`;

    const body =
      `PETITION TO SERVE QUEEN MAZE\n\n` +
      `Basic Details\n` +
      `Full name: ${form.name}\n` +
      `Preferred name: ${form.preferredName || "—"}\n` +
      `Email: ${form.email}\n` +
      `Age: ${form.age}\n` +
      `City: ${cityDisplay}\n` +
      `Able to travel: ${form.canTravel}\n` +
      `Preferred session location: ${form.sessionLocation}\n\n` +

      `Request\n` +
      `Desired session/request type(s):\n- ${form.sessions.join("\n- ")}\n\n` +
      `Preferred dates & times:\n${form.datesTimes}\n\n` +

      `Experience & Readiness\n` +
      `Experience level: ${form.experience}\n\n` +
      `Have you served or sessioned before?\n${form.servedBefore || "—"}\n\n` +
      `What draws you to Queen Maze specifically?\n${form.drawsToQueenMaze}\n\n` +
      `What does submission mean to you?\n${form.submissionMeaning || "—"}\n\n` +
      `What are you hoping to experience, explore or understand?\n${form.hopes}\n\n` +
      `Are you emotionally and practically prepared to be challenged within negotiated boundaries?\n${form.readiness || "—"}\n\n` +

      `Boundaries & Safety\n` +
      `Hard limits / important boundaries:\n${form.boundaries || "—"}\n\n` +
      `Health / mobility / accessibility notes:\n${form.healthNotes || "—"}\n\n` +

      `Final Declaration\n` +
      `Why should Queen Maze consider this petition?\n${form.finalDeclaration}\n\n` +

      `Acknowledgements\n` +
      `- Communication, consent & aftercare expectations: ${form.consentComfort ? "Yes" : "No"}\n` +
      `- Queen Maze’s time is selective and not guaranteed: ${form.ackSelective ? "Yes" : "No"}\n` +
      `- Tribute/50% deposit expectations apply where relevant: ${form.ackDeposit ? "Yes" : "No"}\n` +
      `- Etiquette, discretion & vetting: ${form.ackEtiquette ? "Yes" : "No"}\n` +
      `- Incomplete/careless petitions will be ignored: ${form.ackCareless ? "Yes" : "No"}\n\n` +
      `© ${new Date().getFullYear()} Queen Maze · Submission reviewed at Her discretion.`;

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (v.length === 0) {
      window.location.href = buildMailto();
    }
  }

  async function copyAsEmail() {
    try {
      await navigator.clipboard.writeText(buildMailto());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <section className="px-6 pb-16">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-zinc-300">
            This is the first threshold.
          </p>
          <p className="text-sm text-zinc-500">
            Complete this petition with care. Thoughtfulness, clarity and honesty are part of the first assessment.
          </p>
        </div>

        {errors.length > 0 && (
          <div className="rounded-2xl p-4 border" style={{ borderColor: "var(--gold-dark)" }}>
            <ul className="list-disc list-inside text-rose-300">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <Panel title="Basic Details">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Full name" required>
              <Input value={form.name} onChange={(v) => update("name", v)} />
            </Field>

            <Field label="Preferred name">
              <Input value={form.preferredName} onChange={(v) => update("preferredName", v)} />
            </Field>

            <Field label="Email" required>
              <input
                type="email"
                className={inputClass}
                style={{ borderColor: "var(--gold-dark)" }}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>

            <Field label="Age" required>
              <Input value={form.age} onChange={(v) => update("age", v)} />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Field label="City">
              <select
                className={inputClass}
                style={{ borderColor: "var(--gold-dark)" }}
                value={form.city}
                onChange={(e) => update("city", e.target.value as City)}
              >
                <option>Wirral</option>
                <option>Manchester</option>
                <option>London</option>
                <option>Other</option>
              </select>
            </Field>

            {form.city === "Other" && (
              <Field label="Specify city">
                <Input value={form.cityOther} onChange={(v) => update("cityOther", v)} />
              </Field>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Field label="Are you able to travel?" required>
              <select
                className={inputClass}
                style={{ borderColor: "var(--gold-dark)" }}
                value={form.canTravel}
                onChange={(e) => update("canTravel", e.target.value as TravelAnswer)}
              >
                <option value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
                <option>Possibly</option>
              </select>
            </Field>

            <Field label="Preferred session location" required>
              <select
                className={inputClass}
                style={{ borderColor: "var(--gold-dark)" }}
                value={form.sessionLocation}
                onChange={(e) => update("sessionLocation", e.target.value as SessionLocation)}
              >
                <option>Wirral</option>
                <option>Manchester</option>
                <option>London</option>
                <option>Fly Me to You</option>
                <option>Virtual</option>
                <option>Unsure</option>
              </select>
            </Field>
          </div>
        </Panel>

        <Panel title="What Are You Seeking?">
          <Field label="Desired session/request type(s)" required>
            <div className="grid grid-cols-1 gap-2">
              {SESSION_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.sessions.includes(opt)}
                    onChange={() => toggleSession(opt)}
                    className="accent-[#C7A869]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </Field>

          <div className="mt-4">
            <Field label="Preferred dates & times" required>
              <TextArea
                rows={3}
                value={form.datesTimes}
                onChange={(v) => update("datesTimes", v)}
                placeholder="e.g., Fridays after 6pm, or 12–2pm Tuesdays"
              />
            </Field>
          </div>
        </Panel>

        <Panel title="Experience & Readiness">
          <Field label="Experience level" required>
            <div className="flex flex-wrap gap-4">
              {EXPERIENCE_LEVELS.map((level) => (
                <label key={level} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="experience"
                    value={level}
                    checked={form.experience === level}
                    onChange={(e) => update("experience", e.target.value as Experience)}
                    className="accent-[#C7A869]"
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </Field>

          <div className="grid gap-4 mt-4">
            <Field label="Have you served or sessioned before?">
              <TextArea rows={3} value={form.servedBefore} onChange={(v) => update("servedBefore", v)} />
            </Field>

            <Field label="What draws you to Queen Maze specifically?" required>
              <TextArea rows={4} value={form.drawsToQueenMaze} onChange={(v) => update("drawsToQueenMaze", v)} />
            </Field>

            <Field label="What does submission mean to you?">
              <TextArea rows={4} value={form.submissionMeaning} onChange={(v) => update("submissionMeaning", v)} />
            </Field>

            <Field label="What are you hoping to experience, explore or understand?" required>
              <TextArea rows={4} value={form.hopes} onChange={(v) => update("hopes", v)} />
            </Field>

            <Field label="Are you emotionally and practically prepared to be challenged within negotiated boundaries?">
              <TextArea rows={3} value={form.readiness} onChange={(v) => update("readiness", v)} />
            </Field>
          </div>
        </Panel>

        <Panel title="Boundaries & Safety">
          <Field label="Any hard limits or important boundaries?">
            <TextArea rows={4} value={form.boundaries} onChange={(v) => update("boundaries", v)} />
          </Field>

          <div className="mt-4">
            <Field label="Health, mobility or accessibility notes">
              <TextArea
                rows={3}
                value={form.healthNotes}
                onChange={(v) => update("healthNotes", v)}
                placeholder="Any relevant notes I should know before we begin."
              />
            </Field>
          </div>

          <label className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              className="mt-1 accent-[#C7A869]"
              checked={form.consentComfort}
              onChange={(e) => update("consentComfort", e.target.checked)}
            />
            <span>
              I am comfortable with clear communication, consent and aftercare expectations.
            </span>
          </label>
        </Panel>

        <Panel title="Conduct & Etiquette">
          <label className="flex items-start gap-3 mb-3">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackSelective} onChange={(e) => update("ackSelective", e.target.checked)} />
            <span>I understand Queen Maze’s time is selective and not guaranteed.</span>
          </label>

          <label className="flex items-start gap-3 mb-3">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackDeposit} onChange={(e) => update("ackDeposit", e.target.checked)} />
            <span>I understand tribute/deposit expectations apply where relevant.</span>
          </label>

          <label className="flex items-start gap-3 mb-3">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackEtiquette} onChange={(e) => update("ackEtiquette", e.target.checked)} />
            <span>I am over 21 & agree to etiquette, discretion and vetting.</span>
          </label>

          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-[#C7A869]" checked={form.ackCareless} onChange={(e) => update("ackCareless", e.target.checked)} />
            <span>I understand incomplete or careless petitions may be ignored.</span>
          </label>
        </Panel>

        <Panel title="Final Declaration">
          <Field label="Why should Queen Maze consider your petition?" required>
            <TextArea rows={5} value={form.finalDeclaration} onChange={(v) => update("finalDeclaration", v)} />
          </Field>
        </Panel>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl border transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: "var(--gold-dark)", color: "var(--gold)" }}
          >
            Submit Petition
          </button>

          <button
            type="button"
            onClick={copyAsEmail}
            className="px-6 py-3 rounded-2xl border text-zinc-300 hover:text-zinc-100 transition"
            style={{ borderColor: "var(--gold-dark)" }}
            title="Copies a prefilled mailto link"
          >
            Copy Mailto Link
          </button>
        </div>

        {copied && (
          <div className="text-center text-xs text-zinc-400">
            Copied prefilled email link to clipboard.
          </div>
        )}

        <div className="text-center text-xs text-zinc-500">
          Submissions are reviewed at My discretion. Your information remains confidential.
        </div>
      </form>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl bg-black/40 border px-4 py-3 text-zinc-100";

function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      className={inputClass}
      style={{ borderColor: "var(--gold-dark)" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function TextArea({
  value,
  onChange,
  rows = 3,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      rows={rows}
      className={inputClass}
      style={{ borderColor: "var(--gold-dark)" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-2xl p-5 md:p-6 border"
      style={{ borderColor: "var(--gold-dark)" }}
    >
      <h2
        className="font-display text-lg md:text-xl mb-5"
        style={{ color: "var(--gold)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-zinc-300">
        {label} {required && <span className="text-zinc-500">(required)</span>}
      </div>
      {children}
    </label>
  );
}
