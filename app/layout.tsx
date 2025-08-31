// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://neerajsolanki.vercel.app"),
  title: {
    default: "Neeraj Solanki — Portfolio",
    template: "%s • Neeraj Solanki",
  },
  description: "Machine Learning Engineer • Applied ML & Edge AI",
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://neerajsolanki.vercel.app/",
    siteName: "Neeraj Solanki",
    title: "Neeraj Solanki — Portfolio",
    description: "Machine Learning Engineer • Applied ML & Edge AI",
    images: ["/me.png"], // swap to "/og.png" later if you add one
  },
  twitter: {
    card: "summary_large_image",
    images: ["/me.png"],
  },
};

// ✅ Default export is REQUIRED
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
