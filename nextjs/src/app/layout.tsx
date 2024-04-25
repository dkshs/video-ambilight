import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🌈 Ambilight Effect - YouTube Player API + Next.js (React)",
  description: "Ambilight effect using YouTube iframe Player API with Next.js.",
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-screen w-screen items-center justify-center overflow-hidden bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
