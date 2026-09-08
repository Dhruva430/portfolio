import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { MouseTrail } from "@/components/mouseTrail";
const inter = Inter({ subsets: ["latin"] });
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/toaster";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="dark md:cursor-none select-none animate-color-cycle"
      lang="en"
    >
      <body
        className={`${inter.className} dark:bg-background dark:text-foreground `}
      >
        <MouseTrail />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
