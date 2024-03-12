import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lautaro Aguilar Portfolio",
  description:
    "I'm a frontend developer and designer based in Argentina. I'm passionate about creating beautiful and functional webapps. I'm always looking for new opportunities and challenges. I'm open to work and collaborate on new projects. Feel free to contact me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
