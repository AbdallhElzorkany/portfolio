import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdallah Elzorkany | Front-End & Full-Stack Developer",
  description: "B.Sc. Computer Science graduate specializing in modern front-end development with Next.js, React.js, React Query, and TypeScript. Explore featured projects like Rafiq, Linku, and MyZoo.",
  keywords: [
    "Abdallah Elzorkany",
    "Elzorkany",
    "Software Engineer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Tanta University",
    "Egypt"
  ],
  authors: [{ name: "Abdallah Elzorkany", url: "https://github.com/AbdallhElzorkany" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

