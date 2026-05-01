import { Star, Download, Eye } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Produk Digital - JasajokiHomework",
  description: "Katalog produk digital, template PPT, e-book, dan modul belajar terlengkap.",
};

const PRODUCTS = [
  { id: 1, title: "Template PPT Sidang Skripsi Minimalis", category: "Template PPT", price: 50000, discount: 35000, rating: 4.9, sold: 128, format: ".pptx" },
  { id: 2, title: "Modul Rangkuman UTBK SNBT 2024", category: "E-Book", price: 85000, discount: null, rating: 4.8, sold: 342, format: ".pdf" },
  { id: 3, title: "Template Canva CV ATS Friendly", category: "Canva Template", price: 25000, discount: 15000, rating: 5.0, sold: 89, format: "Link Canva" },
  { id: 4, title: "Kumpulan Jurnal Akuntansi (100+ File)", category: "Referensi", price: 100000, discount: 50000, rating: 4.7, sold: 56, format: ".zip" },
];

export default function ProdukPage() {
  return (
    <div className="bg-bg min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Produk Digital</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Tingkatkan produktivitas Anda dengan koleksi template, e-book, dan referensi premium kami. Siap pakai dan mudah disesuaikan.</p>
        </div>

        {/* Filter Section - Static Mockup */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["Semua Kategori", "Template PPT", "E-Book", "Canva Template", "Referensi"].map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-white text-gray-600 border hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                {/* Mock Image using solid colors/gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-heading font-bold text-gray-400 text-lg">{p.category}</span>
                </div>
                {p.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="text-accent fill-accent" size={14} />
                  <span className="text-xs font-bold text-gray-700">{p.rating}</span>
                  <span className="text-xs text-gray-400">({p.sold} terjual)</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12">{p.title}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  {p.discount ? (
                    <>
                      <span className="font-bold text-lg text-primary">Rp {p.discount.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-gray-400 line-through">Rp {p.price.toLocaleString('id-ID')}</span>
                    </>
                  ) : (
                    <span className="font-bold text-lg text-primary">Rp {p.price.toLocaleString('id-ID')}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a href={`https://wa.me/6281370585871?text=Halo,%20saya%20tertarik%20beli%20produk:%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="flex-1 bg-secondary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                    Beli Sekarang
                  </a>
                  <button className="p-2 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
