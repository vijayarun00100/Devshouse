import type { Metadata } from "next";

import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&family=Poor+Story&family=Roboto+Mono:ital@1&family=Space+Grotesk&display=swap');
</style>

=======
import { Toaster } from "@/components/ui/toaster";
>>>>>>> 7d832c98a58eca5d6f4c18faf2fe1ecaa3783c8c

const inter = Inter({ subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={`${space_Grotesk.variable} overflow-x-hidden`}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}