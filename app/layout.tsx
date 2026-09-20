import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#05070a] text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-[#ea1c24] selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
