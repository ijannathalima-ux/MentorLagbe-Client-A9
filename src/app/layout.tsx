import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LayoutShell from "@/components/shared/LayoutShell";

const outfitFonts = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MentorLagbe",
  description: "Role-based EdTech and tuition platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfitFonts.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}