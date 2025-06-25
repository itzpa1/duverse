import type { Metadata } from "next";
// import { Poppins } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"


// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ['latin'],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// })

export const metadata: Metadata = {
  title: "DUverse | College in Pocket",
  description: "Access free PYQs, notes, digital books, and study resources for Delhi University students. Get exam-ready with solved question papers and course materials for BA, BCom, BSc programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <main className="flex-1 flex flex-col items-center">
          {children}
          <Toaster richColors position="top-right" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
