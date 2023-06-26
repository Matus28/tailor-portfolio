import * as React from "react";
import { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Home | Krajcirstvo JAPEK",
    template: "%s | Krajcirstvo JAPEK",
  },
  description: "Homepage for the Krajcirstvo JAPEK",
  icons: {
    icon: "/gombik.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const comfortaa = Comfortaa({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body className={comfortaa.className} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
