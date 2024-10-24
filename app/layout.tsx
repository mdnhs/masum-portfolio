import { ThemeProvider } from "@/components/theme-provider";
import MainFooter from "@/components/main-footer";
import MainNav from "@/components/main-nav";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
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
          <MainNav />
          {children}
          <MainFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
