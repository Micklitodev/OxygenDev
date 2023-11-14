import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import Navbar from "@/components/layout/home/navbar";
import Footer from "@/components/layout/home/footer";
import GradientAnimation from "@/components/layout/home/backdrop/gradientanimation";

export const metadata: Metadata = {
  title: "OxygenDev",
  description: "Developed by OxygenDev",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-black selection:bg-teal-300 bg-neutral-950 text-white selection:bg-pink-500 selection:text-white">
        <Navbar />
        <GradientAnimation />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
