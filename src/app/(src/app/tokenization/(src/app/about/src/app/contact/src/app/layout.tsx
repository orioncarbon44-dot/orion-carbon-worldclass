// src/app/layout.tsx

import type { Metadata } from "next"; 
import "./globals.css"; // Imports your custom styles
import Navbar from "@/components/Navbar"; // Imports the Navbar component

// METADATA: Provides SEO and Tab Titles
export const metadata: Metadata = {
  title: "Orion Carbon | Integrity-Driven Climate Finance",
  description: "World-class carbon development, tokenization, and academy training tailored for the South African market.",
};

// ROOT LAYOUT COMPONENT: Wraps every page
export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800"> 
        
        {/* The Navbar component appears at the top of every page */}
        <Navbar />
        
        <main>
          {children}
        </main>
        
        {/* Simple Footer */}
        <footer className="w-full bg-[#191970] text-center p-4 mt-12">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Orion Carbon. Built with Integrity.
            </p>
        </footer>
      </body>
    </html>
  );
}
