import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirogi — remittance that settles on proof",
  description:
    "A remittance sent on Ethereum settles to a school on Creditcoin without a bridge, and without anyone being trusted to report the deposit. Only the fact crosses.",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: {
    title: "Kirogi — remittance that settles on proof",
    description:
      "An Ethereum deposit, proven on Creditcoin, pays a school from pre-funded liquidity. Only the fact crosses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body>
        <nav className="nav">
          <a className="brand" href="/">
            <img className="brand__mark" src="/kirogi-mark.png" alt="" width={880} height={699} />
            Kirogi
          </a>
          <a href="/">Overview</a>
          <a href="/evidence">Evidence</a>
          <a href="/track">Track</a>
        </nav>
        {children}
        <footer className="shell" style={{ padding: "3rem var(--gutter) 4rem", borderTop: "1px solid var(--line)" }}>
          <p className="mono" style={{ color: "var(--text-faint)", margin: 0 }}>
            Testnet only. Built for BUIDL CTC 2026 Fall on the Attestcoin Protocol.
          </p>
        </footer>
      </body>
    </html>
  );
}
