import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Jasajoki<span className="text-accent">Homework</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Solusi terbaik untuk tugas sekolah, kuliah, presentasi, makalah, dan produk digital. Kami membantu Anda fokus pada hal yang lebih penting.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/order" className="hover:text-white transition-colors">Tugas Sekolah (SD/SMP/SMA)</Link></li>
              <li><Link href="/order" className="hover:text-white transition-colors">Tugas Kuliah</Link></li>
              <li><Link href="/order" className="hover:text-white transition-colors">Makalah & Essay</Link></li>
              <li><Link href="/order" className="hover:text-white transition-colors">PPT Presentasi</Link></li>
              <li><Link href="/produk" className="hover:text-white transition-colors">Produk Digital</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/testimoni" className="hover:text-white transition-colors">Testimoni</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-accent" />
                <span>+62 813-7058-5871</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-accent" />
                <span>halo@jasajokihomework.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JasajokiHomework. All rights reserved. <br/>
            <span className="text-xs">Layanan ini untuk bantuan referensi belajar, bukan untuk tindakan plagiarisme.</span>
          </p>
          <div className="flex space-x-4">
            {/* Social Icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
