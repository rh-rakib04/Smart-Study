import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import { ToastProvider } from "@/components/ui/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// app/layout.js
export const metadata = {
  title: {
    default: "SmartStudy",
    template: "%s | SmartStudy",
  },
  description:
    "Curated collection of high-tech study companions and AI tools to empower your learning journey.",
  keywords: [
    "AI Study Tools",
    "Academic Research",
    "Study Toolkit",
    "SmartStudy",
    "AI Education",
  ],
  authors: [{ name: "SmartStudy Team" }],
  openGraph: {
    title: "SmartStudy",
    description: "Empower your learning journey with curated AI tools.",
    url: "https://smart-study-ecru.vercel.app",
    siteName: "SmartStudy",
    images: [
      {
        url: "/homepage.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Removed the extra <header> wrap to allow Navbar's sticky to hit the body */}
        <Navbar />

        <ToastProvider>
          {/* Added min-h-screen to ensure the footer stays at the bottom */}
          <main className="min-h-screen">{children}</main>
        </ToastProvider>

        <Footer />
      </body>
    </html>
  );
}
