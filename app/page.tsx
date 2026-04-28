import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./components/NewsletterForm";
import { Reveal, Stagger, StaggerItem, HoverLift } from "./components/Motion";

const BR = "#0057FF";

const img = {
  hero: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=2400",
  bentoA: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=85&w=1600",
  bentoB: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=85&w=1200",
  rowA: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=85&w=1400",
  avatar1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=85&w=200",
  avatar2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=200",
  avatar3: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=85&w=200",
};

const partners = [
  { name: "Unilink", src: "/brand/partner-unilink.svg" },
  { name: "ALAB Laboratoria", src: "/brand/partner-alab.svg" },
  { name: "Fundacja Długowieczność dla Każdego", src: "/brand/partner-dlugowiecznosc.svg" },
];

const faqs = [
  {
    q: "Dla kogo jest Plan B?",
    a: "Dla każdego — osób prywatnych, rodzin, firm i organizacji. Pomagamy zarówno komuś, kto pierwszy raz myśli o swojej polisie, jak i firmie, która chce, żeby benefit zdrowotny faktycznie chronił zespół.",
  },
  {
    q: "Czy Plan B to ubezpieczenie?",
    a: "Plan B to ramowy program edukacyjno-profilaktyczny Fundacji „Zacznij od Siebie”. Pomaga świadomie korzystać z ubezpieczeń, profilaktyki i medycyny — sam w sobie nie jest polisą.",
  },
  {
    q: "Ile to kosztuje?",
    a: "Pierwsza rozmowa jest zawsze bezpłatna i bez zobowiązań. Co dalej — zależy od tego, co wybierzesz. Mówimy wprost, jakie są opcje i ile kosztują.",
  },
  {
    q: "Jak wygląda pierwsza rozmowa?",
    a: "30 minut online lub telefonicznie. Pytamy o Twoją sytuację — to, co dla Ciebie ważne, czego się obawiasz, co już masz. Po rozmowie dostajesz krótkie podsumowanie z konkretnymi rekomendacjami.",
  },
  {
    q: "Czy współpracujecie z medycyną i instytucjami publicznymi?",
    a: "Tak — fundacja prowadzi dialog z parlamentem (m.in. inicjatywa w Sejmie RP), środowiskiem medycznym i organizacjami pozarządowymi. Materiały znajdziesz na stronie fundacji.",
  },
];

function Pill({ children, tone = "glass" }: { children: React.ReactNode; tone?: "glass" | "solid" }) {
  const cls =
    tone === "glass"
      ? "border-white/35 bg-white/15 text-white backdrop-blur-md"
      : "border-[#0057FF]/15 bg-[#e8f2ff] text-[#0046CC]";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] md:text-[12px] ${cls}`}>
      {children}
    </span>
  );
}

function IconHeart() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={BR} strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.313 2.733-.716-1.607-2.379-2.733-4.314-2.733C5.068 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={BR} strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={BR} strokeWidth={1.6}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={BR} strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

function Logo({ className = "h-10 w-auto", invert = false }: { className?: string; invert?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Plan B — Fundacja Zacznij od Siebie"
      className={`${className} ${invert ? "brightness-0 invert" : ""}`}
      draggable={false}
    />
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col font-sans text-slate-900">
      {/* ——— NAV ——— */}
      <header className="sticky top-0 z-50 px-3 pb-3 pt-4 md:px-8 md:pt-6">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-[2rem] border border-white/70 bg-white/85 px-4 py-2.5 shadow-[0_18px_50px_-20px_rgba(0,87,255,0.25)] backdrop-blur-xl md:px-8 md:py-3.5">
          <Link href="#" aria-label="Plan B — Fundacja Zacznij od Siebie" className="flex items-center">
            <Logo className="h-10 w-auto md:h-12" />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-9 text-[13px] font-semibold text-slate-600 lg:flex">
            <a href="#idea" className="transition hover:text-[#0057FF]">Idea</a>
            <a href="#produkty" className="transition hover:text-[#0057FF]">Produkty</a>
            <a href="#partner" className="transition hover:text-[#0057FF]">Partner</a>
            <a href="#faq" className="transition hover:text-[#0057FF]">FAQ</a>
            <a href="#kontakt" className="transition hover:text-[#0057FF]">Kontakt</a>
          </nav>

          <div className="flex items-center gap-2">
            <details className="group relative lg:hidden">
              <summary className="-mr-1 flex cursor-pointer list-none items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex w-60 flex-col gap-1.5 rounded-3xl border border-slate-100 bg-white p-3 shadow-2xl">
                {[
                  ["#idea", "Idea"],
                  ["#produkty", "Produkty"],
                  ["#partner", "Partner"],
                  ["#faq", "FAQ"],
                  ["#kontakt", "Kontakt"],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-[#e8f2ff]">
                    {label}
                  </a>
                ))}
                <a href="#kontakt" className="mt-1 rounded-xl bg-[#0057FF] px-3 py-2.5 text-center text-sm font-bold text-white">
                  Umów rozmowę
                </a>
              </div>
            </details>
            <a
              href="#kontakt"
              className="hidden rounded-full bg-[#0057FF] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(0,87,255,0.55)] transition hover:bg-gradient-to-r hover:from-[#ff9933] hover:to-[#ff3399] sm:inline-flex"
            >
              Umów rozmowę
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ——— HERO ——— */}
        <section className="relative mx-3 mb-10 md:mx-8 md:mb-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_40px_120px_-40px_rgba(0,87,255,0.45)] md:rounded-[2.5rem]">
            <Image src={img.hero} alt="Wspólnota i troska" fill priority sizes="100vw" className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_15%_20%,rgba(0,87,255,0.55)_0%,transparent_55%),linear-gradient(135deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.35)_55%,rgba(0,87,255,0.4)_100%)]" />
            <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay" />
            <div className="pointer-events-none absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-[#0057FF] opacity-40 blur-[120px] animate-blob" />
            <div className="pointer-events-none absolute -right-24 -top-10 h-[380px] w-[380px] rounded-full bg-[#ff3399] opacity-25 blur-[120px] animate-blob [animation-delay:-6s]" />

            <div className="relative z-10 mx-auto grid max-w-[1320px] gap-10 px-5 pb-14 pt-[clamp(5rem,10vw,7rem)] sm:px-10 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-[clamp(7rem,12vw,11rem)] xl:px-14">
              <Reveal as="div" className="lg:col-span-7" y={20}>
                <div className="flex flex-wrap gap-2">
                  <Pill>● Plan A + Plan B</Pill>
                  <Pill>Ubezpieczenia z głową</Pill>
                  <Pill>Partner: Unilink</Pill>
                </div>

                <h1 className="mt-7 text-[clamp(2.4rem,_6.4vw,_4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,.35)]">
                  Życie zaskakuje.{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#ffd1a4] via-[#ff9aa9] to-[#ff3399] bg-clip-text text-transparent">
                      Miej Plan B
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                      <path d="M2 8 Q80 2 150 6 T298 5" stroke="#ff3399" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
                    </svg>
                  </span>{" "}
                  na to, czego nie da się przewidzieć.
                </h1>

                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/90 md:text-[19px]">
                  Nie na wszystko mamy wpływ. Choroba, wypadek, nagła operacja — czasem Plan A nie wystarcza.
                  Z dobrze dobranym ubezpieczeniem masz Plan B: szybki dostęp do leczenia i finansowy bufor,
                  gdy najbardziej tego potrzebujesz. Pokażemy gotowe rozwiązania, a profesjonalni doradcy
                  zrobią z Tobą indywidualną analizę.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#produkty"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-extrabold text-[#0046CC] shadow-[0_18px_40px_-12px_rgba(255,255,255,0.5)] transition hover:scale-[1.02]"
                  >
                    Zobacz gotowe produkty
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0057FF] text-white transition group-hover:translate-x-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    Umów analizę z doradcą
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <div className="flex -space-x-2">
                    {[img.avatar1, img.avatar2, img.avatar3].map((src, i) => (
                      <span key={i} className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/80">
                        <Image src={src} alt="" fill className="object-cover" sizes="36px" />
                      </span>
                    ))}
                  </div>
                  <div className="text-[13px] text-white/85">
                    <span className="font-bold text-white">Setki rozmów</span> — z osobami, rodzinami i ekspertami medycznymi.
                  </div>
                </div>
              </Reveal>

              <Reveal as="div" className="lg:col-span-5" y={28} delay={0.1}>
                <div className="relative rounded-[1.75rem] bg-white/95 p-6 shadow-[0_36px_80px_-22px_rgba(0,0,0,.45)] backdrop-blur-md md:p-7">
                  <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-white/80 via-white/30 to-transparent opacity-60 blur-md" aria-hidden />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0057FF]">Bezpłatna rozmowa</p>
                        <h2 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight text-slate-900">
                          Sprawdź, czego dla siebie potrzebujesz
                        </h2>
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                          30 minut rozmowy, konkretne wskazówki, zero sprzedażowej presji.
                        </p>
                      </div>
                      <span className="hidden rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 sm:inline-flex">
                        ● Wolne terminy
                      </span>
                    </div>
                    <NewsletterForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— TRUST STRIP — prawdziwe loga partnerów ——— */}
        <section className="relative px-3 py-6 md:px-8">
          <Reveal className="mx-auto max-w-[1320px] rounded-[1.75rem] border border-slate-200/70 bg-white/70 px-6 py-7 backdrop-blur md:px-10">
            <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
              Partnerzy strategiczni Fundacji „Zacznij od Siebie”
            </p>
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-3 md:gap-12">
              {partners.map((p) => (
                <HoverLift key={p.name} className="relative mx-auto flex h-12 w-full max-w-[220px] items-center justify-center md:h-14">
                  <Image
                    src={p.src}
                    alt={`Logo: ${p.name}`}
                    fill
                    sizes="220px"
                    className="object-contain opacity-80 transition hover:opacity-100"
                  />
                </HoverLift>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ——— STATS ——— */}
        <section className="px-3 pt-10 md:px-8">
          <Stagger className="mx-auto grid max-w-[1320px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "3", v: "Filary programu", d: "Profilaktyka, edukacja, dialog" },
              { k: "24h", v: "Czas reakcji", d: "Od zgłoszenia do pierwszej rozmowy" },
              { k: "0 zł", v: "Pierwsza rozmowa", d: "Bez zobowiązań i ukrytych kosztów" },
              { k: "Każdy", v: "Dla kogo Plan B", d: "Osoba, rodzina, organizacja" },
            ].map((s) => (
              <StaggerItem key={s.v}>
                <HoverLift className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-[#0057FF]/10">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0057FF] via-[#ff9933] to-[#ff3399] opacity-0 transition group-hover:opacity-100" />
                  <p className="text-[2.25rem] font-extrabold leading-none tracking-tighter text-slate-900">{s.k}</p>
                  <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#0046CC]">{s.v}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{s.d}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ——— IDEA — Plan A / Plan B ——— */}
        <section id="idea" className="px-3 pb-12 pt-16 md:px-8 md:pb-24 md:pt-24">
          <Reveal className="mx-auto mb-14 max-w-[1320px] text-center md:mb-20">
            <Pill tone="solid">Idea</Pill>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.875rem,_4vw,_2.875rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
              Na wszystko nie mamy wpływu — ale Plan B możemy mieć
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600">
              Życie potrafi zaskoczyć: choroba, wypadek, niespodziewana operacja, długie kolejki w publicznej ochronie zdrowia.
              Plan A — czyli to, co masz dziś — nie zawsze wystarcza. Dobrze dobrane ubezpieczenie to Plan B,
              który włącza się dokładnie wtedy, kiedy go potrzebujesz.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {/* PLAN A */}
            <Reveal className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-black/[0.04] md:col-span-6 md:p-10">
              <Pill tone="solid">Plan A</Pill>
              <h3 className="mt-6 text-[1.5rem] font-extrabold leading-tight tracking-tight text-slate-900 md:text-[1.85rem]">
                To, co masz dziś
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Praca, oszczędności, NFZ, opieka rodziny. Działa — dopóki działa. Problem zaczyna się tam,
                gdzie kończy się przewidywalność: kolejka do specjalisty, koszt prywatnej operacji,
                nieobecność w pracy z powodu choroby.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Publiczna ochrona zdrowia z kolejkami", "Domowy budżet i oszczędności", "Wsparcie rodziny i pracodawcy"].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* PLAN B */}
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#0057FF] p-8 text-white md:col-span-6 md:p-10" delay={0.08}>
              <div className="absolute -right-[30%] -top-[30%] h-[180%] w-[140%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,transparent_72%)]" />
              <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" />
              <div className="relative">
                <Pill>Plan B</Pill>
                <h3 className="mt-6 text-[1.5rem] font-extrabold leading-tight tracking-tight md:text-[1.85rem]">
                  Ubezpieczenie, które włącza się, gdy Plan A nie wystarcza
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                  Szybki dostęp do prywatnej diagnostyki i leczenia, finansowy bufor na czas choroby,
                  wsparcie dla rodziny. Dobrane do Twojej sytuacji — nie z półki „dla wszystkich”.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Szybki dostęp do specjalistów i operacji", "Pieniądze na leczenie i codzienne życie", "Spokój głowy dla Ciebie i bliskich"].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-white/95">
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— PRODUKTY PÓŁKOWE ——— */}
        <section id="produkty" className="bg-white px-3 py-[clamp(4.5rem,9vw,_7rem)] md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <Pill tone="solid">Produkty</Pill>
                <h2 className="mt-5 text-[clamp(1.875rem,_3.75vw,_2.75rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
                  Trzy gotowe rozwiązania, które możesz wziąć z półki
                </h2>
              </div>
              <p className="text-[16px] leading-relaxed text-slate-600 md:col-span-5">
                Sprawdzone pakiety, z których korzystają nasi klienci. Możesz wybrać sam — albo
                umówić się z doradcą na bezpłatną analizę i dobrać wariant pod swoje potrzeby.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  tag: "Ochrona globalna",
                  name: "Global",
                  desc: "Ubezpieczenie zdrowotne z dostępem do leczenia w Polsce i za granicą — także w przypadku poważnych chorób wymagających terapii poza krajem.",
                  bullets: ["leczenie w renomowanych klinikach na świecie", "drugą opinia medyczna od ekspertów", "pokrycie kosztów leczenia, podróży i pobytu"],
                  badge: "Międzynarodowe",
                },
                {
                  tag: "Ochrona życia i zdrowia",
                  name: "Laven",
                  desc: "Elastyczny pakiet ochrony życia i zdrowia z modułami dla Ciebie i rodziny — od poważnych zachorowań po wsparcie finansowe na co dzień.",
                  bullets: ["wypłata świadczenia w przypadku poważnej choroby", "ochrona życia i NW", "moduły do dopasowania pod sytuację rodziny"],
                  badge: "Elastyczne moduły",
                },
                {
                  tag: "Szybka pomoc szpitalna",
                  name: "Luxmed Szpitalne",
                  desc: "Szybki dostęp do prywatnego leczenia szpitalnego i operacji w sieci Lux Med — bez kolejek, bez stresu o termin zabiegu.",
                  bullets: ["operacje i hospitalizacja w sieci Lux Med", "krótkie terminy zabiegów", "kompleksowa opieka okołooperacyjna"],
                  badge: "Bez kolejek",
                },
              ].map((p) => (
                <StaggerItem key={p.name}>
                  <HoverLift className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#0057FF]/30 hover:shadow-2xl hover:shadow-[#0057FF]/15 md:p-9">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0057FF] via-[#ff9933] to-[#ff3399]" />
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-[#e8f2ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0046CC]">
                        {p.tag}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{p.badge}</span>
                    </div>
                    <h3 className="mt-6 text-[1.55rem] font-extrabold tracking-tight text-slate-900">{p.name}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{p.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                          <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0057FF]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-7">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0046CC] transition group-hover:translate-x-0.5"
                      >
                        Zapytaj o ten produkt
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12 rounded-[1.5rem] border border-[#0057FF]/15 bg-[#eef4ff]/70 p-7 md:flex md:items-center md:justify-between md:p-9">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0046CC]">Nie wiesz, co wybrać?</p>
                <p className="mt-2 text-[16px] font-semibold leading-snug text-slate-900">
                  Umów bezpłatną analizę u profesjonalnych doradców — dobiorą wariant pod Twoją sytuację, budżet i rodzinę.
                </p>
              </div>
              <a
                href="#kontakt"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0057FF] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_12px_30px_-10px_rgba(0,87,255,0.5)] transition hover:bg-gradient-to-r hover:from-[#ff9933] hover:to-[#ff3399] md:mt-0"
              >
                Umów rozmowę z doradcą →
              </a>
            </Reveal>
          </div>
        </section>

        {/* ——— JAK DZIAŁAMY ——— */}
        <section id="jak" className="bg-white px-3 py-[clamp(4.5rem,9vw,_7rem)] md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <Pill tone="solid">Jak działamy</Pill>
                <h2 className="mt-5 text-[clamp(1.875rem,_3.75vw,_2.75rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
                  Cztery kroki od pierwszej rozmowy do spokojnej głowy
                </h2>
              </div>
              <p className="text-[16px] leading-relaxed text-slate-600 md:col-span-5">
                Bez nachalnej sprzedaży i wielostronicowych ofert. Mówimy ludzkim językiem — Ty decydujesz, czy i co wybierasz.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Krótka rozmowa", d: "30 minut online lub telefonicznie. Pytamy o sytuację i to, co dla Ciebie ważne." },
                { n: "02", t: "Mapa potrzeb", d: "Skracamy hałas: konkretne rekomendacje dopasowane do Twojego życia, nie do oferty." },
                { n: "03", t: "Świadomy wybór", d: "Tłumaczymy świat ubezpieczeń i profilaktyki tak, żebyś rozumiał, co dostajesz." },
                { n: "04", t: "Wsparcie na lata", d: "Jesteśmy obok, gdy zmieniają się potrzeby — Ty, rodzina lub organizacja." },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <HoverLift className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:border-[#0057FF]/30 hover:shadow-2xl hover:shadow-[#0057FF]/15">
                    <div className="absolute -right-6 -top-6 text-[5.5rem] font-black tracking-tighter text-slate-100 transition group-hover:text-[#e8f2ff]">
                      {s.n}
                    </div>
                    <div className="relative">
                      <div className="inline-flex h-9 items-center rounded-full bg-[#0057FF]/10 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0046CC]">
                        Krok {s.n}
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">{s.t}</h3>
                      <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">{s.d}</p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>

            {/* ——— PRASOWA KARTA WYDARZENIA — Sejm ——— */}
            <Reveal className="relative mt-20 overflow-hidden rounded-[2.25rem] bg-slate-950 text-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.55)]">
              <Image src={img.rowA} alt="" fill className="object-cover opacity-50" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001a55] via-slate-950/80 to-[#0057FF]/35" />
              <div className="absolute inset-0 bg-grain opacity-15 mix-blend-overlay" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-[320px] w-[320px] rounded-full bg-[#0057FF] opacity-50 blur-[120px] animate-blob" />

              {/* meta-strip */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75 md:px-12">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff3399]" />
                    Wydarzenie publiczne
                  </span>
                  <span className="text-white/40">·</span>
                  <span>Sejm RP, Warszawa</span>
                  <span className="text-white/40">·</span>
                  <time dateTime="2025-12-18">18 grudnia 2025</time>
                </div>
                <span className="hidden text-white/55 sm:inline">Lektura ~3 min</span>
              </div>

              <div className="relative z-10 grid gap-10 px-6 py-12 md:grid-cols-12 md:gap-14 md:px-12 md:py-16">
                {/* lewa kolumna — okładka z ramką */}
                <div className="md:col-span-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-white/15 shadow-2xl">
                    <Image src={img.rowA} alt="Rozmowa przy okrągłym stole — inicjatywa Plan A + Plan B w Sejmie RP" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Fot. Fundacja Zacznij od Siebie</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Inicjatorka</p>
                      <p className="mt-1.5 text-[13px] font-bold leading-tight">Aleksandra Friedel</p>
                      <p className="text-[11px] text-white/65">Prezeska Fundacji</p>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Gospodyni</p>
                      <p className="mt-1.5 text-[13px] font-bold leading-tight">Monika Wielichowska</p>
                      <p className="text-[11px] text-white/65">Wicemarszałkini Sejmu</p>
                    </div>
                  </div>
                </div>

                {/* prawa kolumna — treść */}
                <div className="md:col-span-7">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Plan A + Plan B w Sejmie
                  </span>
                  <h3 className="mt-5 text-[1.85rem] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[2.5rem]">
                    Co ma wspólnego Sejm <br className="hidden md:block" />i Plan A + Plan B?
                  </h3>

                  {/* pull quote */}
                  <figure className="relative mt-8 rounded-[1.25rem] border-l-[3px] border-[#ff3399] bg-white/5 p-6 backdrop-blur">
                    <svg className="absolute -left-1 -top-3 h-8 w-8 text-[#ff3399]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
                    </svg>
                    <blockquote className="text-[1.15rem] font-semibold leading-snug text-white md:text-[1.3rem]">
                      Profilaktyka to najlepsza inwestycja w zdrowie, bezpieczeństwo i długofalową jakość życia.
                    </blockquote>
                    <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/65">
                      — przekaz spotkania w Sejmie RP, grudzień 2025
                    </figcaption>
                  </figure>

                  <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/85">
                    Przy okrągłym stole spotkali się przedstawiciele medycyny, organizacji pozarządowych
                    i parlamentu, by rozmawiać o konkretnych rozwiązaniach z zakresu profilaktyki zdrowotnej —
                    a nie deklaracjach dla pokazu.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href="https://www.fundacjazacznijodsiebie.pl/pl/aktualnosci/Sejm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-extrabold text-[#0046CC] shadow-lg transition hover:scale-[1.02]"
                    >
                      Przeczytaj cały artykuł
                      <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="https://fundacjazacznijodsiebie.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                    >
                      Strona fundacji
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— DLA KOGO + WIZJA / MISJA ——— */}
        <section id="efekt" className="px-3 py-[clamp(4rem,8vw,_6rem)] md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="text-center">
              <Pill tone="solid">Dla kogo</Pill>
              <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.875rem,_3.75vw,_2.75rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
                Plan B jest dla każdego — niezależnie od tego, gdzie jesteś w życiu
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-slate-600">
                Pomagamy zarówno osobom prywatnym i całym rodzinom, jak i firmom czy organizacjom — tym samym językiem i z tą samą dbałością.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  i: <IconHeart />,
                  t: "Dla Ciebie",
                  d: "Chcesz świadomie zadbać o zdrowie i poczucie bezpieczeństwa — bez kupowania kota w worku.",
                  bullets: ["audyt obecnych polis", "plan profilaktyki", "konkretne rekomendacje"],
                },
                {
                  i: <IconSpark />,
                  t: "Dla Twojej rodziny",
                  d: "Chcesz, żeby bliscy byli zabezpieczeni — dziecko, partner, rodzice — w jednym spójnym planie.",
                  bullets: ["ochrona dzieci i partnera", "wsparcie pokolenia rodziców", "dostęp do medycyny"],
                },
                {
                  i: <IconShield />,
                  t: "Dla firm i NGO",
                  d: "Szukacie programu zdrowotnego, który faktycznie chroni ludzi — nie tylko wygląda dobrze w folderze.",
                  bullets: ["benefity, które żyją", "edukacja zespołu", "dialog z medycyną"],
                },
              ].map((c) => (
                <StaggerItem key={c.t}>
                  <HoverLift className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#0057FF]/30 hover:shadow-2xl hover:shadow-[#0057FF]/15 md:p-9">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0057FF] via-[#ff9933] to-[#ff3399]" />
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[1.1rem] bg-[#e8f2ff]">{c.i}</div>
                    <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-900">{c.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{c.d}</p>
                    <ul className="mt-5 space-y-2">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                          <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0057FF]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Reveal as="article" className="rounded-[1.75rem] border border-[#0057FF]/14 bg-white p-9 shadow-xl md:p-12">
                <IconShield />
                <h3 className="mt-10 text-xl font-extrabold tracking-tight text-slate-900">Wizja</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                  Chcemy, żeby ubezpieczenia były postrzegane jak odpowiedzialna rozmowa o przyszłości — nie jak przypadkowy
                  dodatek przy biurku. Edukacja zamiast agresywnej sprzedaży zostaje wizytówką fundacji.
                </p>
              </Reveal>
              <Reveal as="article" className="relative overflow-hidden rounded-[1.75rem] border border-[#0057FF]/14 bg-[#eef4ff]/90 p-9 shadow-xl md:p-12" delay={0.08}>
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#0057FF]/10 blur-2xl" />
                <IconTarget />
                <h3 className="mt-10 text-xl font-extrabold tracking-tight text-slate-900">Misja</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                  Plan B dostarcza pracownikom i organizacjom konkretnych narzędzi świadomej ochrony zdrowia i życia: od
                  profilaktyki po dostęp do medycyny wtedy, gdy jej potrzebują najbardziej.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— TESTIMONIALS ——— */}
        <section className="bg-white px-3 py-[clamp(4rem,8vw,_6rem)] md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="mb-12 text-center">
              <Pill tone="solid">Głosy z rynku</Pill>
              <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(1.75rem,_3.5vw,_2.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-slate-900">
                Tak słyszymy o Plan B w codziennych rozmowach
              </h2>
            </Reveal>
            <Stagger className="grid gap-5 md:grid-cols-3">
              {[
                { t: "„Pierwszy raz ktoś wytłumaczył mi ubezpieczenia po ludzku — bez sprzedażowych sztuczek. Wiem, co mam i dlaczego.”", a: "Anna, 38 lat, mama dwójki dzieci" },
                { t: "„Po rozmowie z Plan B zrobiliśmy z żoną prosty plan dla całej rodziny. Spokojniej się żyje.”", a: "Marek, 45 lat, Wrocław" },
                { t: "„Doceniam, że fundacja prowadzi realny dialog z medycyną i NGO. To nie jest marketing — to praca u podstaw.”", a: "Ekspert kliniczny, Warszawa" },
              ].map((q) => (
                <StaggerItem key={q.a}>
                  <figure className="h-full rounded-[1.5rem] border border-slate-200 bg-[#f7faff]/70 p-7">
                    <div className="text-[#0057FF]">
                      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-800">{q.t}</blockquote>
                    <figcaption className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-slate-500">{q.a}</figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section id="faq" className="px-3 py-[clamp(4rem,8vw,_6rem)] md:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <Pill tone="solid">FAQ</Pill>
              <h2 className="mt-5 text-[clamp(1.875rem,_3.75vw,_2.75rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
                Pytania, które<br />najczęściej dostajemy
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
                Nie znaleźli Państwo odpowiedzi? Napiszcie — odpowiadamy najpóźniej następnego dnia roboczego.
              </p>
              <a
                href="#kontakt"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0057FF] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_12px_30px_-10px_rgba(0,87,255,0.5)] transition hover:bg-gradient-to-r hover:from-[#ff9933] hover:to-[#ff3399]"
              >
                Zadaj pytanie zespołowi →
              </a>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white">
                {faqs.map((f, i) => (
                  <details key={f.q} className="group px-6 py-5 md:px-7" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-extrabold tracking-tight text-slate-900 [&::-webkit-details-marker]:hidden md:text-[16px]">
                      {f.q}
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-[#0057FF] group-open:bg-[#0057FF] group-open:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— PARTNER — UNILINK ——— */}
        <section id="partner" className="bg-white px-3 py-[clamp(4.5rem,9vw,_7rem)] md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <Pill tone="solid">Partner</Pill>
                <h2 className="mt-5 text-[clamp(1.875rem,_3.75vw,_2.75rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
                  Działamy z Unilinkiem — jedną z największych multiagencji w Polsce
                </h2>
              </div>
              <p className="text-[16px] leading-relaxed text-slate-600 md:col-span-5">
                Dzięki współpracy z Unilinkiem mamy dostęp do oferty kilkudziesięciu zakładów ubezpieczeń.
                Zamiast pokazywać Ci jedną propozycję, porównujemy rynek i dobieramy to, co naprawdę pasuje.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-12">
              <Reveal className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white md:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_15%_20%,rgba(0,87,255,0.55)_0%,transparent_55%),linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,87,255,0.45)_100%)]" />
                <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-[260px] w-[260px] rounded-full bg-[#0057FF] opacity-50 blur-[100px] animate-blob" />
                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-8 md:p-10">
                  <div className="flex h-14 w-44 items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/brand/partner-unilink.svg" alt="Logo Unilink" className="h-full w-auto brightness-0 invert opacity-95" />
                  </div>
                  <div>
                    <p className="text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[1.6rem]">
                      Jeden punkt kontaktu, dziesiątki ubezpieczycieli, jedna decyzja — Twoja.
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/80">
                      Unilink to ponad 20 lat doświadczenia i tysiące doradców obsługujących klientów w całej Polsce.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Stagger className="grid gap-5 md:col-span-7 md:grid-cols-2">
                {[
                  {
                    i: <IconTarget />,
                    t: "Porównanie zamiast jednej oferty",
                    d: "Mamy dostęp do produktów wielu zakładów ubezpieczeń — pokazujemy realne różnice w ochronie i cenie, nie pojedynczą propozycję.",
                  },
                  {
                    i: <IconShield />,
                    t: "Profesjonalni doradcy",
                    d: "Indywidualna analiza Twojej sytuacji, znajomość zapisów polis, jasne tłumaczenie wyłączeń. Bez czytania drobnym drukiem na własną rękę.",
                  },
                  {
                    i: <IconHeart />,
                    t: "Wsparcie po sprzedaży",
                    d: "Prowadzimy Cię także w trakcie szkody i odnowienia — zamiast call center masz konkretną osobę, która zna Twoją historię.",
                  },
                  {
                    i: <IconSpark />,
                    t: "Stabilny partner",
                    d: "Unilink to jeden z liderów rynku pośrednictwa ubezpieczeniowego w Polsce — masz pewność, że to nie efemeryczny pośrednik z internetu.",
                  },
                ].map((c) => (
                  <StaggerItem key={c.t}>
                    <HoverLift className="group h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0057FF]/30 hover:shadow-xl hover:shadow-[#0057FF]/10">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[1rem] bg-[#e8f2ff]">{c.i}</div>
                      <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-tight text-slate-900">{c.t}</h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{c.d}</p>
                    </HoverLift>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* ——— FINAL CTA ——— */}
        <section id="kontakt" className="px-3 pb-20 pt-6 md:px-8">
          <Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.25rem] bg-[#021040] shadow-[0_40px_100px_-30px_rgba(0,87,255,0.55)]">
            {/* mesh gradient — 3 blob-y w 3 kolorach marki */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#0057FF] opacity-60 blur-[140px] animate-blob" />
            <div className="pointer-events-none absolute -right-32 top-1/4 h-[460px] w-[460px] rounded-full bg-[#ff3399] opacity-35 blur-[140px] animate-blob [animation-delay:-7s]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[440px] w-[440px] rounded-full bg-[#ff9933] opacity-30 blur-[140px] animate-blob [animation-delay:-12s]" />

            {/* dekoracyjne fale koncentryczne */}
            <svg className="pointer-events-none absolute -right-32 -bottom-32 h-[640px] w-[640px] opacity-[0.18]" viewBox="0 0 400 400" fill="none" aria-hidden>
              <defs>
                <radialGradient id="ctaRing" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[60, 100, 140, 180, 220, 260].map((r) => (
                <circle key={r} cx="200" cy="200" r={r} stroke="url(#ctaRing)" strokeWidth="0.8" />
              ))}
            </svg>

            {/* siatka kropek u góry */}
            <svg className="pointer-events-none absolute -left-10 top-10 h-[260px] w-[260px] opacity-30" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <pattern id="ctaDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#ctaDots)" />
            </svg>

            {/* grain */}
            <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay" />
            {/* delikatny vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_30%,transparent_0%,rgba(0,0,0,0.35)_100%)]" />

            <div className="relative z-10 grid gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-14 md:py-20">
              <div className="text-white md:col-span-6">
                <Pill>Bądźmy w kontakcie</Pill>
                <h2 className="mt-5 text-[clamp(1.95rem,_4.2vw,_3.1rem)] font-extrabold leading-[1.05] tracking-[-0.01em]">
                  Zacznijmy<br />od krótkiej rozmowy.
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/85">
                  30 minut. Ty mówisz, czego potrzebujesz — my słuchamy i podpowiadamy. Bez sprzedażowej presji,
                  bez zbędnych formalności. Dla osoby, rodziny lub organizacji.
                </p>

                <ul className="mt-8 space-y-3 text-[14px]">
                  {[
                    "Bezpłatna rozmowa, bez zobowiązań",
                    "Konkretne rekomendacje po spotkaniu",
                    "Jeden punkt kontaktu — żadnego call center",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/90">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/90 text-emerald-950">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-white/85">
                  <a href="mailto:kontakt@fundacjazacznijodsiebie.pl" className="font-bold underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white">
                    kontakt@fundacjazacznijodsiebie.pl
                  </a>
                  <span className="text-white/40">•</span>
                  <a href="tel:+48224831966" className="font-bold underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white">
                    +48 22 483 19 66
                  </a>
                </div>
              </div>

              <div className="md:col-span-6">
                <article className="rounded-[1.75rem] bg-white p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,.45)] md:p-9">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0057FF]">Formularz kontaktowy</span>
                  <h3 className="mt-3 text-[1.55rem] font-extrabold leading-tight tracking-tight text-slate-900">
                    Napisz, czego potrzebujesz
                  </h3>
                  <NewsletterForm />
                </article>
              </div>
            </div>
          </Reveal>

          {/* ——— FOOTER ——— */}
          <footer className="mx-auto mt-16 max-w-[1320px]">
            <div className="grid gap-12 rounded-[2rem] border border-[#0057FF]/15 bg-[#eef4ff]/55 px-7 py-12 backdrop-blur-sm md:grid-cols-12 md:p-14">
              <div className="md:col-span-6">
                <Logo className="h-14 w-auto md:h-16" />
                <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  Strona informacyjna przybliża Plan B w kontekście działań Fundacji „Zacznij od Siebie”. Aktualności,
                  projekty i forma wsparcia znajdują się na{" "}
                  <Link href="https://fundacjazacznijodsiebie.pl/" className="font-semibold text-[#0057FF] underline decoration-[2px] decoration-[#0057FF]/40 underline-offset-[3px]" target="_blank" rel="noopener noreferrer">
                    fundacjazacznijodsiebie.pl
                  </Link>.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-[13px]">
                  <a href="#misja" className="rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-[#0057FF] hover:text-[#0057FF]">Misja</a>
                  <a href="#jak" className="rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-[#0057FF] hover:text-[#0057FF]">Jak działamy</a>
                  <a href="#faq" className="rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-[#0057FF] hover:text-[#0057FF]">FAQ</a>
                  <a href="#kontakt" className="rounded-full bg-[#0057FF] px-4 py-2 font-bold text-white">Kontakt</a>
                </div>
              </div>

              <address className="not-italic md:col-span-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Fundacja „Zacznij od Siebie”</p>
                <p className="mt-6 text-[16px] font-semibold text-slate-900">
                  ul. Gałczyńskiego 2a<br />
                  <span className="font-medium text-slate-600">05-090 Raszyn</span>
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Telefon</span>
                    <a href="tel:+48224831966" className="mt-2 block font-bold text-[#0046CC] underline decoration-[2px] decoration-[#0057FF]/35 underline-offset-[3px]">
                      +48 22 483 19 66
                    </a>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">E-mail</span>
                    <Link href="mailto:kontakt@fundacjazacznijodsiebie.pl" className="mt-2 block break-all font-bold text-[#0046CC] underline decoration-[2px] decoration-[#0057FF]/35 underline-offset-[4px]">
                      kontakt@fundacjazacznijodsiebie.pl
                    </Link>
                  </div>
                </div>
              </address>
            </div>
            <p className="mt-6 text-center text-[12px] text-slate-500">
              © {new Date().getFullYear()} Plan B · Fundacja „Zacznij od Siebie”. Strona informacyjna.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
