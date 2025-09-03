// src/app/layout.tsx
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = { title: "Agency", description: "Hero section" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    
        
        <html lang="en" className="overflow-x-hidden">
  <body className="bg-[#0B0713] overflow-x-hidden"> {/* site-wide dark bg */}

        {children}
      </body>
    </html>
  );
}
