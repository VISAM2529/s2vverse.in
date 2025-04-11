import { Geist, Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationTracker from "@/components/LocationTracker";

// Font definitions
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "s2vverse.in | We Never Spoke, But The Feed Knew",
  description: "A space where silence still means something.",
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
      // For modern browsers
      { url: "/favicon.ico", type: "image/x-icon" },
      // For Apple devices
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-precomposed.png", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased font-sans`}
      >
        <Navbar/>
        <LocationTracker/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}