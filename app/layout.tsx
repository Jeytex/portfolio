import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidharth Systems | Interactive Portfolio",
  description:
    "An interactive developer portfolio experience built with Next.js, Tailwind CSS, Framer Motion, and Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#05060a]">{children}</body>
    </html>
  );
}
