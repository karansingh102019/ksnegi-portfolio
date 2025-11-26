import "./globals.css";
import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import ClickSparkGlobal from "@/animations/ClickSparkGlobal";
import SplashClient from "@/components/SplashClient";

export const metadata: Metadata = {
  title: "NEXUS-  Portfolio",
  description:
    "Portfolio of Karan Singh Negi, a UI Developer skilled in modern frontend technologies and UI/UX design. I build fast, responsive, visually polished interfaces with strong focus on usability, clean design systems, and seamless user experiences.",
  keywords: [
    "Karan Singh Negi",
    "UI Developer",
    "Frontend Developer",
    "UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer",
    "Design Systems",
    "User Interface Design",
    "User Experience Design",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  authors: [{ name: "Karan Singh Negi" }],
  creator: "Karan Singh Negi",
  openGraph: {
    title: "Karan Singh Negi — UI Developer & UI/UX Designer",
    description:
      "Explore the work of UI Developer and UI/UX Designer Karan Singh Negi, featuring frontend development, interactive UI, responsive designs, and user-centered interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClickSparkGlobal />
        <SplashClient>
          <div className="min-h-screen bg-black ">{children}</div>
        </SplashClient>
      </body>
    </html>
  );
}
