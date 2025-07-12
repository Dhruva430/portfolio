import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { MouseTrail } from "@/components/mouseTrail";
const inter = Inter({ subsets: ["latin"] });
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark cursor-none  animate-color-cycle" lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white `}>
        <MouseTrail />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
