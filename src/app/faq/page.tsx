"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const FAQS = [
  { q: "Apakah hasilnya original?", a: "Ya, kami menjamin hasil pekerjaan 100% original dan bebas plagiarisme. Kami menggunakan tools premium untuk mengecek orisinalitas sebelum hasil diserahkan." },
  { q: "Bagaimana cara bayar?", a: "Pembayaran dilakukan SETELAH tugas selesai dikerjakan. Kami akan mengirimkan preview/watermarked file, lalu Anda bisa transfer via Bank/E-Wallet. Setelah bukti transfer dikirim, file asli akan diberikan." },
  { q: "Berapa lama pengerjaan?", a: "Tergantung tingkat kesulitan dan kesepakatan. Normalnya 2-3 hari. Namun kami juga menyediakan layanan express (24 jam atau bahkan hari yang sama) dengan biaya tambahan." },
  { q: "Apakah data saya aman?", a: "Sangat aman. Kami menjamin privasi klien 100%. Nama Anda disamarkan dalam database kami dan file Anda tidak akan pernah dibagikan kepada pihak ketiga." },
  { q: "Bisa revisi berapa kali?", a: "Kami memberikan garansi revisi minor GRATIS sebanyak 2 kali dalam jangka waktu 3 hari setelah hasil diserahkan, asalkan tidak melenceng dari instruksi awal." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = FAQS.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-bg min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-gray-600 mb-8">Temukan jawaban untuk pertanyaan umum seputar layanan JasajokiHomework.</p>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Cari pertanyaan..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`transform transition-transform ${openIndex === i ? 'rotate-180 text-primary' : 'text-gray-400'}`} size={20} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 pt-2 text-gray-600 bg-gray-50 border-t">
                  {faq.a}
                </div>
              )}
            </div>
          )) : (
            <div className="text-center py-10 text-gray-500">
              Pertanyaan tidak ditemukan. Silakan hubungi admin via WhatsApp.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
