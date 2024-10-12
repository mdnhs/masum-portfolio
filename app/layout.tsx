import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masum | Data Data Analyst",
  description: "Data Analyst",
};

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
