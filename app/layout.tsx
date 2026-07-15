import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun Glazing | Premium Structural Facade Engineering & Glazing Services",
  description: "Sun Glazing is South India's leading curtain wall glazing contractor. Specializing in Unitized Curtain Walls, Tension Cable Nets, and Specialized Facades.",
  keywords: "Sun Glazing, SGF India, Facade Engineering, Structural Glazing, Glass Contractor, Curtain Wall, Unitized Glazing, Hyderabad Glazing, Aluminum Extrusion",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased font-sans">
        <Navbar />
        {/* Main Content wrapper */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
