import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopNow - Your Online Store",
  description: "Find the best electronics, clothing, and books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* Logo/Link to Home */}
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-xl font-bold text-blue-600">
                    ShopNow
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/products"
                    className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

     
        </nav>

        {/* Main Content */}
        <main>{children}</main>
           {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} ShopNow. All rights reserved.</p>
          <p>Developted by Sakan Wokkum</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-300">Terms</a>
            <a href="#" className="hover:text-blue-300">Privacy</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}