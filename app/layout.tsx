import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/app-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wetland-explorer.vercel.app"),
  title: {
    default: "Wetland Explorer — Digital Atlas of India's Wetlands",
    template: "%s | Wetland Explorer",
  },
  description:
    "A comprehensive digital atlas, interactive map, wildlife registry, and environmental threat explorer for India's Ramsar sites and vital wetland ecosystems.",
  keywords: [
    "Wetlands India",
    "Ramsar Sites",
    "Chilika Lake",
    "Sundarbans",
    "Loktak Lake",
    "Keoladeo National Park",
    "Indian Biodiversity",
    "CHE110 Environmental Project",
    "Wildlife Conservation",
    "Wetland Threats",
  ],
  authors: [{ name: "Wetland Explorer Initiative" }],
  creator: "Wetland Explorer Team",
  publisher: "Wetland Explorer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wetland-explorer.vercel.app",
    siteName: "Wetland Explorer",
    title: "Wetland Explorer — Digital Atlas of India's Wetlands",
    description:
      "Explore India's wetlands through interactive maps, biodiversity taxonomy, documented threats, and verified Ramsar records.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wetland Explorer — Digital Atlas of India's Wetlands",
    description:
      "Explore India's wetlands through interactive maps, biodiversity taxonomy, and verified Ramsar records.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
