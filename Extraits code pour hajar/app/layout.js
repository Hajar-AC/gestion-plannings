import { useState, useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import NavbarComponent from "../components/NavbarComponent";
import ClientProvider from "../components/ClientProvider"; // Ajouteer ClientProvider

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//métadonnées 
export const metadata = {
  title: "Gestion des Plannings - Application",
  description: "Une application de gestion des plannings pour l'organisation des formations.",
  keywords: "gestion, planning, formation, front-end, développeur",
  author: "CFMA",
  openGraph: {
    title: "Gestion des Plannings",
    description: "Application de gestion des plannings pour organiser des formations.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cfma",  
    title: "Gestion des Plannings",
    description: "Une application de gestion des plannings.",
  }
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle basculer mode clair/ sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <html lang="fr" className={darkMode ? "dark" : ""}>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />

        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-end p-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-500"
          >
            {darkMode ? 'Mode clair' : 'Mode sombre'}
          </button>
        </div>
        <ClientProvider>
          <NavbarComponent />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
