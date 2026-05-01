import { Star, MessageSquareQuote } from "lucide-react";

export const metadata = {
  title: "Testimoni Pelanggan - JasajokiHomework",
  description: "Apa kata mereka yang telah menggunakan jasa joki tugas kami?",
};

const TESTIMONIALS = [
  { id: 1, name: "A***n", institution: "Univ. Indonesia", rating: 5, date: "12 Mei 2026", text: "Gila sih ini pengerjaannya cepet banget. Revisi juga ditanggepin dengan ramah. Nilai tugas makalah saya dapet A. Recommended pokoknya!", service: "Makalah/Essay" },
  { id: 2, name: "B***a", institution: "SMA N 1 Jakarta", rating: 5, date: "10 Mei 2026", text: "Ngebantu banget pas lagi deadline mepet. Hasil ppt nya rapi dan estetik. Makasih min!", service: "PPT Presentasi" },
  { id: 3, name: "C***o", institution: "Univ. Brawijaya", rating: 4, date: "05 Mei 2026", text: "Parafrase nya natural, lolos turnitin. Harga juga pas di kantong mahasiswa.", service: "Parafrase/Editing" },
  { id: 4, name: "D***i", institution: "Politeknik Negeri", rating: 5, date: "01 Mei 2026", text: "Awalnya ragu karena takut tipu-tipu, tapi ternyata sistem bayar setelah selesai bikin tenang. Hasil codingannya rapi dan jalan lancar.", service: "Tugas Kuliah" },
];

export default function TestimoniPage() {
  return (
    <div className="bg-bg min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Apa Kata Mereka?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami telah membantu ribuan pelajar dan mahasiswa menyelesaikan tugas mereka dengan hasil memuaskan. Privasi 100% terjaga.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <MessageSquareQuote className="absolute top-6 right-6 text-gray-100" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < t.rating ? "text-accent fill-accent" : "text-gray-300"} size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed italic">"{t.text}"</p>
              
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{t.name}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                  <span>{t.institution}</span>
                  <span className="bg-blue-50 text-primary px-2 py-0.5 rounded text-xs">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
