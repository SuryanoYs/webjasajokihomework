export const metadata = {
  title: "Portfolio Hasil Kerja - JasajokiHomework",
  description: "Lihat hasil pengerjaan tugas, makalah, dan presentasi yang telah kami selesaikan.",
};

const PORTFOLIOS = [
  { id: 1, title: "Makalah Sejarah Kemerdekaan", category: "Tugas Sekolah", year: "2023", imgUrl: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "PPT Sidang Skripsi IT", category: "PPT Presentasi", year: "2024", imgUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Essay Ekonomi Makro", category: "Tugas Kuliah", year: "2023", imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Desain UI/UX App Mobile", category: "Tugas Kuliah", year: "2024", imgUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Analisis Data Statistik SPSS", category: "Tugas Kuliah", year: "2024", imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Kliping Biologi", category: "Tugas Sekolah", year: "2023", imgUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

export default function PortfolioPage() {
  return (
    <div className="bg-bg min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Portfolio Hasil Kerja</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Beberapa contoh hasil pekerjaan kami yang telah di-anonymize untuk menjaga privasi klien.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["Semua", "Tugas Sekolah", "Tugas Kuliah", "PPT Presentasi", "Lainnya"].map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${i === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIOS.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
              <img src={item.imgUrl} alt={item.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded inline-block w-max mb-2">{item.category}</span>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.year} - Anonymized</p>
              </div>
              
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 transform -rotate-45">
                <span className="text-4xl font-bold text-white tracking-widest uppercase">SAMPLE</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-600">
            <strong className="text-primary">Disclaimer:</strong> Semua pekerjaan di atas dilindungi hak cipta. Kami tidak pernah membagikan file asli atau data pribadi klien. Gambar di atas hanya sebagai ilustrasi portofolio.
          </p>
        </div>
      </div>
    </div>
  );
}
