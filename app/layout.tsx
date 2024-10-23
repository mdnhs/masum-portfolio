import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientAOSProvider from "@/animation/ClientAOSProvider";

export const metadata: Metadata = {
  title: "Masum | Data Data Analyst",
  keywords: "data analysis, data insights, analytics, business intelligence",
  description: "Data Analyst",
  viewport: "width=device-width, initial-scale=1",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ClientAOSProvider />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
