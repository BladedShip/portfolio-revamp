import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import "xp.css/dist/XP.css"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adithyan Jayakumar",
  description: "Perpetually learning to discover my next obsession",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-full h-[100vh] bg-[url('/bliss.jpg')] bg-no-repeat bg-center bg-fixed bg-cover overflow-hidden`}>{children}</body>
    </html>
  );
}
