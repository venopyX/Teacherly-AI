import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Teacherly - AI Powered Teaching Toolkit",
  description: "Enhance your teaching experience with our AI-powered platform. Create engaging lessons, personalize learning, and save time with automated grading.",
  keywords: "teaching, AI, education technology, learning, personalized education",
  authors: [{ name: "Teacherly Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#8447A4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body className="bg-background text-text-color font-body antialiased min-h-screen relative w-full max-w-full overflow-x-hidden m-0 p-0">
        {/* Purple glow effect positioned absolutely */}
        <div className="glow-effect glow-primary w-[600px] h-[600px] -top-64 -left-64 animate-pulse opacity-20"></div>
        <div className="glow-effect glow-accent w-[500px] h-[500px] top-1/2 right-0 translate-x-1/2 animate-pulse opacity-10"></div>
        <div className="glow-effect glow-primary w-[400px] h-[400px] bottom-0 left-1/4 animate-pulse opacity-10"></div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}