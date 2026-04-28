"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  rodo: boolean;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  rodo: false,
};

export function NewsletterForm() {
  const [data, setData] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const update =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setData((d) => ({ ...d, [key]: value as FormState[K] }));
    };

  if (sent) {
    return (
      <div className="mt-8 rounded-[1.25rem] border border-emerald-200 bg-emerald-50/80 p-6 text-emerald-900">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-base font-bold">Dziękujemy — odezwiemy się w 24h.</p>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
              Zgłoszenie trafi do zespołu Plan B. Tymczasem zapraszamy do lektury aktualności fundacji.
            </p>
            <button
              type="button"
              onClick={() => {
                setData(initial);
                setSent(false);
              }}
              className="mt-4 inline-flex text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
            >
              Wyślij kolejne zgłoszenie
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      className="mt-8 grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (!data.rodo) return;
        setPending(true);
        // Wizualne potwierdzenie — bez backendu
        setTimeout(() => {
          setPending(false);
          setSent(true);
        }, 650);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Imię i nazwisko" name="name" value={data.name} onChange={update("name")} required placeholder="Anna Kowalska" />
        <Field label="E-mail" name="email" type="email" value={data.email} onChange={update("email")} required placeholder="anna@example.pl" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Telefon (opcjonalnie)" name="phone" type="tel" value={data.phone} onChange={update("phone")} placeholder="+48 600 000 000" />
        <Field label="Firma / organizacja (opcjonalnie)" name="company" value={data.company} onChange={update("company")} placeholder="jeśli piszesz w imieniu zespołu" />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          W czym możemy pomóc
        </span>
        <textarea
          name="message"
          value={data.message}
          onChange={update("message")}
          rows={3}
          placeholder="Np. chciałbym przejrzeć moje obecne polisy / pomyśleć o profilaktyce dla rodziny / poszukać planu dla zespołu…"
          className="w-full resize-none rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0057FF]/70 focus:ring-4 focus:ring-[#0057FF]/15"
        />
      </label>

      <label className="mt-1 flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate-600">
        <input
          type="checkbox"
          checked={data.rodo}
          onChange={update("rodo")}
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#0057FF] focus:ring-[#0057FF]/40"
        />
        <span>
          Wyrażam zgodę na kontakt zwrotny przez Fundację „Zacznij od Siebie” w sprawie programu Plan B.
          Administratorem danych jest Fundacja. Zgodę można wycofać w każdej chwili.
        </span>
      </label>

      <button
        type="submit"
        disabled={pending || !data.rodo}
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-[1rem] bg-[#0057FF] px-7 py-4 text-[15px] font-extrabold text-white shadow-[0_12px_32px_-8px_rgba(0,87,255,0.55)] transition hover:bg-gradient-to-r hover:from-[#ff9933] hover:to-[#ff3399] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#0057FF] disabled:hover:from-transparent disabled:hover:to-transparent"
      >
        {pending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Wysyłam…
          </>
        ) : (
          <>
            Umów rozmowę
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
        Średni czas odpowiedzi: <span className="font-semibold text-slate-700">poniżej 24h</span>. Bez spamu, bez nachalnej sprzedaży.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label} {required && <span className="text-[#0057FF]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={
          type === "email" ? "email" : type === "tel" ? "tel" : name === "name" ? "name" : name === "company" ? "organization" : "off"
        }
        className="w-full rounded-[1rem] border border-slate-200 bg-white/90 px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0057FF]/70 focus:ring-4 focus:ring-[#0057FF]/15"
      />
    </label>
  );
}
