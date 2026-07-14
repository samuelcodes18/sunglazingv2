import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun Glazing | Premium Structural Facade Engineering & Glazing Services",
  description: "Sun Glazing is South India's leading curtain wall glazing contractor. Specializing in Unitized Curtain Walls, Tension Cable Nets, and Specialized Facades.",
  keywords: "Sun Glazing, SGF India, Facade Engineering, Structural Glazing, Glass Contractor, Curtain Wall, Unitized Glazing, Hyderabad Glazing, Aluminum Extrusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
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
