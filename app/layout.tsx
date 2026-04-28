import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-planb",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planb.fundacjazacznijodsiebie.pl"),
  title: "Plan B | Fundacja Zacznij od Siebie",
  description:
    "Profilaktyka zdrowotna i realne korzyści dla pracowników — program Plan B Fundacji Zacznij od Siebie.",
  icons: {
    icon: "/brand/fzs-favicon.ico",
  },
  openGraph: {
    title: "Plan B | Fundacja Zacznij od Siebie",
    description:
      "Profilaktyka, edukacja ubezpieczeniowa i dialog z medycyną — Plan B dla organizacji.",
    images: ["/brand/fzs-og.jpg"],
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      style={{ colorScheme: "light" }}
      className={`${sans.variable} h-full bg-[#f4f7fb] antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
