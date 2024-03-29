import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { Toaster } from "sonner";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swalpa Kumar Roy",
  description: "Official website of Dr. Swalpa Kumar Roy",
  keywords: [
    "Swalpa",
    "Swalpa Roy",
    "Swalpa Kumar Roy",
    "Dr. Swalpa Kumar Roy",
    "JGEC",
    "AGEMC",
    "Machine Learning",
    "Swalpa Google Scholar",
    "Swalapa Github",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
