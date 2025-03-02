import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/bootstrap.min.css";
import "./styles/all.min.css";
import "./styles/swiper-bundle.min.css";
import "./styles/magnific-popup.css";
import "./styles/animate.css";
import "./styles/nice-select.css";
import "./styles/style.css";

import "./styles/style1.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neon Art Decor",
  description: "A complete e-commerce application with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/SVG Logo.svg" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
