"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-heading font-bold text-2xl text-primary">Jasajoki<span className="text-secondary">Homework</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</Link>
            <Link href="/order" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Layanan</Link>
            <Link href="/produk" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Produk Digital</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</Link>
            <Link href="/testimoni" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimoni</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
            
            <Link href="/order" className="bg-secondary text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Pesan Sekarang
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-primary focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Beranda</Link>
            <Link href="/order" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Layanan</Link>
            <Link href="/produk" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Produk Digital</Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Portfolio</Link>
            <Link href="/testimoni" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Testimoni</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">FAQ</Link>
            <Link href="/order" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-secondary text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600">
              Pesan Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
