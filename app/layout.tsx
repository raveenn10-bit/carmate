import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Carmate Modifications — Transforming Cars into Personalized Masterpieces",
  description:
    "Carmate Modifications: Premier automotive body shop in Makuluwa, Galle, Sri Lanka. Body kits, custom lighting, GT wings, luxury upholstery & full project builds.",
  authors: [{ name: "Harsh Apex", url: "https://www.harshapex.com.lk" }],
  creator: "Harsh Apex",
  icons: {
    icon: "/assets/carmate-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Instant zero-flicker theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem('carmate-theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            })()`,
          }}
        />
      </head>
      <body className="bg-[#05070a] text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-[#ea1c24] selection:text-white transition-colors duration-300">
        <ThemeProvider defaultTheme="dark">
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
