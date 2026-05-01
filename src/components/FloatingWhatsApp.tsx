"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit to not clutter initial load
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "6281370585871";
  const defaultMessage = encodeURIComponent("Halo Admin JasajokiHomework, saya ingin bertanya tentang layanan Anda.");
  const waLink = `https://wa.me/${waNumber}?text=${defaultMessage}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="relative group">
        <div className="absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100">
          Chat Admin! 👋
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
        </div>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
