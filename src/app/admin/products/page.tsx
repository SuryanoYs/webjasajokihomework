"use client";
import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, Eye, Star, UploadCloud, X, Image as ImageIcon } from "lucide-react";

export default function ProductsManagement() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola Produk Digital</h1>
          <p className="text-sm text-gray-500 mt-1">Atur katalog template, e-book, dan referensi</p>
        </div>
        <button 
          onClick={() => {setIsEdit(false); setShowProductModal(true);}}
          className="bg-secondary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus size={18} /> Tambah Produk Baru
        </button>
      </div>

      {/* STATS CARDS (3 Kolom) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Total Produk</p>
            <p className="text-3xl font-bold text-gray-800">24</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Package size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Terjual Bulan Ini</p>
            <p className="text-3xl font-bold text-gray-800">1,287</p>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><ShoppingCart size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Revenue Produk</p>
            <p className="text-2xl font-bold text-gray-800">Rp 42.650.000</p>
          </div>
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center"><TrendingUp size={24} /></div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <input type="text" placeholder="Cari produk..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <select className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-primary text-sm w-full sm:w-48 bg-white">
            <option>Semua Kategori</option>
            <option>Template PPT</option>
            <option>Modul UT</option>
            <option>E-book Rangkuman</option>
            <option>Canva Template</option>
          </select>
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          <span className="text-sm font-medium text-gray-600">Status:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white shadow-sm text-gray-800">Aktif</button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700">Nonaktif</button>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 1, title: "Template PPT Presentasi Bisnis Profesional", cat: "Template", price: "Rp 49.000", rating: 5, stock: true },
          { id: 2, title: "Modul Rangkuman UTBK 2024", cat: "E-Book", price: "Rp 85.000", rating: 4, stock: true },
          { id: 3, title: "CV ATS Friendly Templates", cat: "Canva", price: "Rp 25.000", rating: 5, stock: true },
          { id: 4, title: "Kumpulan Jurnal Internasional Manajemen", cat: "Referensi", price: "Rp 150.000", rating: 5, stock: false },
          { id: 5, title: "Empty Image Product Example", cat: "Other", price: "Rp 10.000", rating: 0, stock: true, noImg: true }
        ].map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center">
              {p.noImg ? (
                <ImageIcon size={48} className="text-gray-300" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
              )}
              <span className="absolute top-3 right-3 bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-md z-10">{p.cat}</span>
              
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button 
                  onClick={() => {setIsEdit(true); setShowProductModal(true);}}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all"
                >
                  <Edit size={18} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all">
                  <Eye size={18} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-50 hover:scale-110 transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2" title={p.title}>{p.title}</h3>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < p.rating ? "text-accent fill-accent" : "text-gray-300"} />
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-lg text-primary">{p.price}</span>
                <span className={`text-xs font-bold flex items-center gap-1 ${p.stock ? 'text-green-600' : 'text-red-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${p.stock ? 'bg-green-600' : 'bg-red-500'}`}></span>
                  {p.stock ? 'Stok Tersedia' : 'Habis'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between bg-white p-4 border rounded-xl shadow-sm">
        <span className="text-sm text-gray-600 font-medium">Menampilkan <strong className="text-gray-800">1-5</strong> dari <strong className="text-gray-800">24</strong> produk</span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm font-medium disabled:opacity-50 text-gray-600">Prev</button>
          <button className="w-8 h-8 rounded bg-primary text-white font-bold text-sm">1</button>
          <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">2</button>
          <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm font-medium text-gray-600">Next</button>
        </div>
      </div>

      {/* TAMBAH/EDIT PRODUK MODAL */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col max-h-[95vh]">
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{isEdit ? 'Edit Produk Digital' : 'Tambah Produk Digital Baru'}</h2>
              </div>
              <button onClick={() => setShowProductModal(false)} className="text-gray-400 hover:text-gray-700 bg-white p-2 rounded-full shadow-sm">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-8">
              {/* KOLOM KIRI (Upload) */}
              <div className="lg:w-2/5 space-y-6">
                <div>
                  <label className="font-bold text-gray-700 mb-2 block">Upload Thumbnail</label>
                  <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-100 transition-colors aspect-[4/3] flex flex-col items-center justify-center">
                    <ImageIcon className="text-gray-400 mb-3" size={48} />
                    <p className="font-bold text-gray-600">Drag & drop zone or click to upload</p>
                    <p className="text-sm text-gray-400 mt-1">Recommended size: 800x600px (4:3)</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Tampilkan watermark</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <label className="font-bold text-gray-700 mb-2 block">Upload File Utama Product</label>
                  <div className="border-2 border-dashed border-primary/30 bg-blue-50/50 rounded-xl p-6 text-center cursor-pointer hover:bg-blue-50 transition-colors">
                    <UploadCloud className="mx-auto text-primary mb-2" size={32} />
                    <p className="font-bold text-primary text-sm">Upload File</p>
                    <p className="text-xs text-gray-500 mt-1">Supported: PPTX/PDF/ZIP (Max 50MB)</p>
                  </div>
                </div>
              </div>

              {/* KOLOM KANAN (Form) */}
              <div className="lg:w-3/5 space-y-6">
                {/* Info Dasar */}
                <div className="space-y-4">
                  <h3 className="font-bold border-b pb-2 text-gray-800">Informasi Dasar</h3>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Judul Produk *</label>
                    <input type="text" className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Contoh: Template PPT Presentasi Bisnis" defaultValue={isEdit ? "Template PPT Presentasi Bisnis Profesional" : ""} />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Kategori *</label>
                    <select className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary bg-white">
                      <option>Template PPT</option>
                      <option>Modul UT</option>
                      <option>E-book Rangkuman</option>
                      <option>Canva Template</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Deskripsi Produk *</label>
                    <div className="border rounded-xl overflow-hidden">
                      <div className="bg-gray-50 border-b p-2 flex gap-2">
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-xs">B</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic font-serif text-xs">I</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-xs">•</button>
                        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-xs">🔗</button>
                      </div>
                      <textarea className="w-full p-4 h-32 outline-none text-sm" placeholder="Jelaskan detail produk..."></textarea>
                    </div>
                    <div className="text-right text-xs text-gray-400 mt-1">0/1000 karakter</div>
                  </div>
                </div>

                {/* Harga & Stok */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold border-b pb-2 text-gray-800">Harga & Stok</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-1">Harga (Rp) *</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500 font-bold text-sm">Rp</span>
                        <input type="number" className="w-full border rounded-xl pl-10 pr-3 py-3 text-sm outline-none focus:ring-2 focus:ring-primary font-bold" placeholder="0" defaultValue={isEdit ? "49000" : ""} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-1">Tipe Produk</label>
                      <div className="flex gap-4 mt-2 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="stockType" className="w-4 h-4 text-primary" defaultChecked /> Unlimited</label>
                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="stockType" className="w-4 h-4 text-primary" /> Limited Stock</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-orange-800">Aktifkan Harga Diskon</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Link Alternatif & SEO */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-bold border-b pb-2 text-gray-800">File Alternatif & SEO</h3>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Link Google Drive / Canva (Opsional)</label>
                    <input type="url" className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-1">Judul SEO</label>
                      <input type="text" className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Judul untuk Google" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-1">URL Slug</label>
                      <div className="flex">
                        <span className="bg-gray-100 border border-r-0 rounded-l-xl px-3 py-3 text-xs text-gray-500 flex items-center">jasajoki.com/</span>
                        <input type="text" className="w-full border rounded-r-xl p-3 text-sm outline-none focus:ring-2 focus:ring-primary flex-1" placeholder="template-ppt-bisnis" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-bold text-gray-700">Status Publikasi</span>
                    <select className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-primary text-sm font-bold bg-white">
                      <option>🟢 Aktif (Publish)</option>
                      <option>⚫ Draft (Nonaktif)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t bg-white flex justify-between items-center">
              <button className="px-6 py-2.5 rounded-xl border bg-white font-bold hover:bg-gray-50 text-gray-700">
                Simpan Draft
              </button>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 rounded-xl border border-primary text-primary font-bold hover:bg-blue-50 transition-colors">
                  Preview di Website
                </button>
                <button className="px-8 py-2.5 rounded-xl bg-secondary text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-transform transform hover:-translate-y-0.5">
                  {isEdit ? 'Update Produk' : 'Publish Produk'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add these icons locally if lucide-react is missing them, or assume they exist.
function Package(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>; }
function ShoppingCart(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>; }
function TrendingUp(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>; }
