import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./components/NewsletterForm";
import { Reveal, Stagger, StaggerItem, HoverLift } from "./components/Motion";

const BR = "#0057FF";

const img = {
  hero: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=2400",
  bentoA: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=85&w=1600",
  bentoB: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=85&w=1200",
  rowA: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=85&w=1400",
  cta: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=85&w=2000",
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
    q: "Czy Plan B to ubezpieczenie, czy benefit?",
    a: "Plan B to ramowy program edukacyjno-profilaktyczny. W praktyce komponuje się z benefitów zdrowotnych, ubezpieczeń życia i konsultacji medycznych — dopasowanych do realnej struktury zespołu, a nie do efektownego folderu.",
  },
  {
    q: "Dla kogo jest ten program?",
    a: "Dla działów HR, zarządów i właścicieli firm 20–500 osób, którzy chcą, żeby benefit zdrowotny faktycznie chronił ludzi. A także dla NGO i partnerów chcących prowadzić rzetelny dialog o profilaktyce.",
  },
  {
    q: "Ile to kosztuje firmę?",
    a: "Konsultacja wstępna i mapowanie potrzeb są bezpłatne. Wycena programu zależy od liczby pracowników i wybranych komponentów — przedstawiamy ją po krótkiej rozmowie diagnostycznej.",
  },
  {
    q: "Jak wygląda pierwsza rozmowa?",
    a: "30-minutowe spotkanie online. Pytamy o cele, obecny pakiet benefitów i bolączki zespołu. Po rozmowie dostają Państwo notatkę z 3 rekomendacjami — bez zobowiązań.",
  },
  {
    q: "Czy współpracujecie z Sejmem i instytucjami publicznymi?",
    a: "Tak — fundacja prowadzi dialog z parlamentem, środowiskiem medycznym i organizacjami pozarządowymi. Materiał z inicjatywy w Sejmie znajdą Państwo na stronie fundacji.",
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
            <a href="#misja" className="transition hover:text-[#0057FF]">Misja</a>
            <a href="#jak" className="transition hover:text-[#0057FF]">Jak działamy</a>
            <a href="#efekt" className="transition hover:text-[#0057FF]">Fundamenty</a>
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
                  ["#misja", "Misja"],
                  ["#jak", "Jak działamy"],
                  ["#efekt", "Fundamenty"],
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
                  <Pill>Profilaktyka 2026</Pill>
                  <Pill>Dialog z medycyną</Pill>
                </div>

                <h1 className="mt-7 text-[clamp(2.4rem,_6.4vw,_4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,.35)]">
                  Profilaktyka, która{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#ffd1a4] via-[#ff9aa9] to-[#ff3399] bg-clip-text text-transparent">
                      naprawdę chroni
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                      <path d="M2 8 Q80 2 150 6 T298 5" stroke="#ff3399" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
                    </svg>
                  </span>{" "}
                  Twój zespół.
                </h1>

                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/90 md:text-[19px]">
                  Plan B to program Fundacji „Zacznij od Siebie”: benefity zdrowotne, które żyją,
                  edukacja ubezpieczeniowa i dialog z medycyną oraz NGO. Bez sloganów dla pokazu — z konkretnym planem dla Twoich ludzi.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-extrabold text-[#0046CC] shadow-[0_18px_40px_-12px_rgba(255,255,255,0.5)] transition hover:scale-[1.02]"
                  >
                    Umów bezpłatną konsultację
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0057FF] text-white transition group-hover:translate-x-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#jak"
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    Zobacz, jak działamy
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
                    <span className="font-bold text-white">100+ osób</span> z medycyny, HR i NGO już rozmawia z Plan B.
                  </div>
                </div>
              </Reveal>

              <Reveal as="div" className="lg:col-span-5" y={28} delay={0.1}>
                <div className="relative rounded-[1.75rem] bg-white/95 p-6 shadow-[0_36px_80px_-22px_rgba(0,0,0,.45)] backdrop-blur-md md:p-7">
                  <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-white/80 via-white/30 to-transparent opacity-60 blur-md" aria-hidden />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0057FF]">Bezpłatna konsultacja</p>
                        <h2 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight text-slate-900">
                          Sprawdź, jak Plan B zadziała w Twojej firmie
                        </h2>
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                          30 min rozmowy, 3 rekomendacje, 0 sprzedażowej presji.
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
              { k: "24h", v: "Czas reakcji", d: "Od zgłoszenia do rozmowy" },
              { k: "100%", v: "Bez nachalnej sprzedaży", d: "Edukacja > polisa pod presją" },
              { k: "∞", v: "Rozmów o zdrowiu", d: "Bo profilaktyka to długi dystans" },
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

        {/* ——— BENTO / MISJA ——— */}
        <section id="misja" className="px-3 pb-12 pt-16 md:px-8 md:pb-24 md:pt-24">
          <Reveal className="mx-auto mb-14 max-w-[1320px] text-center md:mb-20">
            <Pill tone="solid">Fundamenty efektu</Pill>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.875rem,_4vw,_2.875rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-slate-900">
              Trzy fundamenty, jeden rytm
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-slate-600">
              Profilaktyka, edukacja i dialog — tak Plan B układa codzienną pracę z firmą.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {/* DUŻA OKŁADKA — col-span-7 */}
            <Reveal className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900 md:col-span-7 md:min-h-[460px]">
              <Image src={img.bentoA} alt="" fill className="object-cover opacity-85" sizes="(max-width:768px) 100vw, 56vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-grain opacity-15 mix-blend-overlay" />
              <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
                <Pill>Misja bez sprzedaży</Pill>
                <div>
                  <p className="max-w-xl text-[1.45rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-white md:text-[1.85rem]">
                    Ubezpieczenia jako szacunek dla życia człowieka — nie polisa doklejana pod presją sprzedaży.
                  </p>
                  <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/80">
                    Dialog o zdrowiu i bezpieczeństwie potrzebuje czasu. Plan B dobiera narzędzia rozsądnie, z myślą o pracowniku i jego rodzinie.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* PULL-QUOTE — col-span-5 */}
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#0057FF] text-white md:col-span-5" delay={0.08}>
              <div className="absolute -right-[30%] -top-[30%] h-[180%] w-[140%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,transparent_72%)]" />
              <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 md:min-h-[460px] md:p-10">
                <Pill>Hasło fundamentu</Pill>
                <div>
                  <p className="text-[1.65rem] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[2.15rem]">
                    Nie reklamy —<br />
                    kultura świadomego życia.
                  </p>
                  <div className="mt-7 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-base font-black text-white">B</span>
                    Fundacja „Zacznij od Siebie”
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3 RÓWNE KARTY DOLNE */}
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-xl shadow-black/[0.05] md:col-span-4 md:p-8">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[1.1rem] bg-[#e8f2ff]">
                <IconHeart />
              </div>
              <h3 className="mt-7 text-[1.15rem] font-extrabold tracking-tight text-slate-900">Troska oparta na dowodzie</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                Wybieramy narzędzia w oparciu o dane medyczne i realny feedback pracowników, nie efektowny folder.
              </p>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-xl shadow-black/[0.05] md:col-span-4 md:p-8" delay={0.06}>
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[1.1rem] bg-[#e8f2ff]">
                <IconTarget />
              </div>
              <h3 className="mt-7 text-[1.15rem] font-extrabold tracking-tight text-slate-900">Komplementarność</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                Plan B uzupełnia Plan A: większy dostęp do medycyny prywatnej w Polsce i za granicą.
              </p>
            </Reveal>

            <Reveal className="group relative min-h-[260px] overflow-hidden rounded-[2rem] md:col-span-4" delay={0.12}>
              <Image src={img.bentoB} alt="" fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]" sizes="(max-width:768px) 100vw, 30vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative flex h-full min-h-[260px] flex-col justify-between p-7 md:p-8">
                <Pill>Dobrostan</Pill>
                <div>
                  <h3 className="text-[1.15rem] font-extrabold leading-tight tracking-tight text-white">
                    365 dni codziennego skupienia
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                    Praktyki, które pracują przy biurku i przy łóżku — nie tylko w prezentacji.
                  </p>
                </div>
              </div>
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
                  Cztery kroki od pierwszej rozmowy do żywego programu
                </h2>
              </div>
              <p className="text-[16px] leading-relaxed text-slate-600 md:col-span-5">
                Bez wielomiesięcznych projektów. Diagnozę robimy w tydzień, pierwszą wartość pracownik czuje w pierwszym miesiącu.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Rozmowa diagnostyczna", d: "30 min online. Pytamy o cele, zespół i obecny pakiet benefitów." },
                { n: "02", t: "Mapa potrzeb", d: "Skracamy hałas: 3 rekomendacje dopasowane do realnej struktury firmy." },
                { n: "03", t: "Komponenty Plan B", d: "Dobieramy benefity zdrowotne, edukację ubezpieczeniową, partnerów medycznych." },
                { n: "04", t: "Życie programu", d: "Mierzymy adopcję, zbieramy feedback pracowników, korygujemy w rytmie kwartałów." },
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

            {/* Cytat / Sejm */}
            <Reveal className="mt-16 grid items-center gap-8 rounded-[2rem] border border-[#0057FF]/14 bg-[#eef4ff]/70 p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0046CC]">Dialog jak w Sejmie</p>
                <h3 className="mt-4 text-[1.6rem] font-extrabold leading-tight tracking-tight text-slate-900 md:text-[2rem]">
                  „Ekspertów słucha się uważnie — z ludźmi pracuje się świadomie.”
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                  Rozmowa przy okrągłym stole z lekarzami i NGO, jak podczas inicjatywy w Sejmie RP, przypomina:
                  profilaktyka to nakład inwestowany w spokojniejsze jutra.
                </p>
                <Link
                  href="https://www.fundacjazacznijodsiebie.pl/pl/aktualnosci/Sejm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0057FF]/25 px-6 py-3 text-[13px] font-bold text-[#0046CC] transition hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff9933] hover:to-[#ff3399] hover:text-white"
                >
                  Czytaj artykuł o Sejmie →
                </Link>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-2xl md:col-span-5">
                <Image src={img.rowA} alt="Rozmowa z ekspertem" fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
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
                Plan B działa, gdy spotyka się troska, kompetencja i odwaga decyzji
              </h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  i: <IconShield />,
                  t: "Zarządy i właściciele",
                  d: "Chcą, by pakiet zdrowotny działał — nie był tylko PDF-em w intranecie.",
                  bullets: ["mierzalna adopcja", "transparentna wycena", "raporty kwartalne"],
                },
                {
                  i: <IconHeart />,
                  t: "Działy HR & Benefits",
                  d: "Szukają partnera, który tłumaczy świat ubezpieczeń przystępnym językiem.",
                  bullets: ["materiały dla pracowników", "webinary tematyczne", "linia wsparcia"],
                },
                {
                  i: <IconSpark />,
                  t: "NGO i instytucje",
                  d: "Wspólnie budujemy publiczny dialog o profilaktyce — z medycyną i parlamentem.",
                  bullets: ["okrągłe stoły", "publikacje", "współ-projekty"],
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
                { t: "„Wreszcie ktoś tłumaczy ubezpieczenia tak, że pracownik rozumie, co dostaje. To zmienia rozmowę z benefitem.”", a: "Dyrektorka HR, firma 220 osób" },
                { t: "„Plan B traktujemy jak naturalne uzupełnienie pakietu medycznego. Pracownik czuje, że firma o nim myśli.”", a: "CFO, software house" },
                { t: "„Doceniam, że fundacja prowadzi realny dialog z medycyną i NGO. To nie jest marketing.”", a: "Ekspert kliniczny, Warszawa" },
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

        {/* ——— FINAL CTA ——— */}
        <section id="kontakt" className="px-3 pb-20 pt-6 md:px-8">
          <Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.25rem] shadow-[0_40px_100px_-30px_rgba(0,87,255,0.4)]">
            <Image src={img.cta} alt="Współpraca przy projekcie społecznym" fill className="object-cover md:scale-105 md:object-[center_22%]" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-grain opacity-15 mix-blend-overlay" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-[#0057FF] opacity-40 blur-[120px] animate-blob" />

            <div className="relative z-10 grid gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-14 md:py-20">
              <div className="text-white md:col-span-6">
                <Pill>Bądźmy w kontakcie</Pill>
                <h2 className="mt-5 text-[clamp(1.95rem,_4.2vw,_3.1rem)] font-extrabold leading-[1.05] tracking-[-0.01em]">
                  Zacznijmy<br />od krótkiej rozmowy.
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/85">
                  30 minut, agenda po Państwa stronie. Pokażemy, jak Plan B układa się z Państwa obecnym pakietem
                  benefitów i co zmienia w doświadczeniu pracownika.
                </p>

                <ul className="mt-8 space-y-3 text-[14px]">
                  {[
                    "Bezpłatna konsultacja, bez zobowiązań",
                    "Notatka z 3 rekomendacjami po spotkaniu",
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
                    Powiedzcie nam, czego potrzebujecie
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
