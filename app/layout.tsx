import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carmate.lk"),
  title: {
    default: "Carmate Modifications — Transforming Cars into Personalized Masterpieces",
    template: "%s | Carmate Modifications",
  },
  description:
    "Carmate Modifications: Premier automotive body shop in Makuluwa, Galle, Sri Lanka. Body kits, custom lighting, GT wings, luxury upholstery & full project builds.",
  keywords: [
    "Carmate",
    "Carmate Modifications",
    "Galle",
    "Sri Lanka",
    "Toyota Prius modification",
    "Aqua styling",
    "Car body kits Sri Lanka",
    "Bi-LED retrofit Galle",
    "Custom car upholstery",
  ],
  authors: [
    { name: "Harsh Apex", url: "https://www.harshapex.com.lk" },
    { name: "Carmate Modifications", url: "https://carmate.lk" },
  ],
  creator: "Harsh Apex",
  publisher: "Carmate Modifications",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carmate.lk",
    siteName: "Carmate Modifications",
    title: "Carmate Modifications — Transforming Cars into Personalized Masterpieces",
    description:
      "Premier automotive body shop in Makuluwa, Galle, Sri Lanka. Body kits, custom lighting, GT wings, luxury upholstery & full project builds.",
    images: [
      {
        url: "/assets/carmate-prius-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Carmate Modifications Workshop Galle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmate Modifications — Transforming Cars into Personalized Masterpieces",
    description:
      "Premier automotive body shop in Makuluwa, Galle, Sri Lanka. Body kits, custom lighting, GT wings, luxury upholstery & full project builds.",
    images: ["/assets/carmate-prius-lineup.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/carmate-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/carmate-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/carmate-logo.png",
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
