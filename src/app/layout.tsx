import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/ui/Loader";
import { loaderInitScript } from "@/lib/loader-init";

const siteUrl = "https://treasureejike.vercel.app";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Treasure Chinemerem Ejike | Software Engineer",
    template: "%s | Treasure Ejike",
  },

  description:
    "Treasure Chinemerem Ejike is a Software Engineer with experience in frontend and backend development, building functional web applications with React, TypeScript, Node.js, and MongoDB.",

  applicationName: "Treasure Ejike Portfolio",

  authors: [
    {
      name: "Treasure Chinemerem Ejike",
      url: siteUrl,
    },
  ],

  creator: "Treasure Chinemerem Ejike",

  publisher: "Treasure Chinemerem Ejike",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Treasure Ejike",
    title: "Treasure Chinemerem Ejike | Software Engineer",
    description:
      "Building functional web applications across the frontend and backend through thoughtful engineering and clean implementation.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Treasure Chinemerem Ejike — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Treasure Chinemerem Ejike | Software Engineer",
    description:
      "Building functional web applications across the frontend and backend through thoughtful engineering and clean implementation.",
    images: ["/images/og-image.png"],
  },

  referrer: "strict-origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: "#F0F0EB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: loaderInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Loader />
      </body>
    </html>
  );
}
