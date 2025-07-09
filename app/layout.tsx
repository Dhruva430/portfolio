import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
