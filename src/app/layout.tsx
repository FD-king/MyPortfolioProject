import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description:
    "A personal portfolio website showcasing my projects, skills, and experience.",
  icons: {
    icon: "/logo_title.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body className="min-h-screen bg-[#100425] text-white">{children}</body>
    </html>
  );
}
