"use client";
import { useState } from "react";
import { Search, Star, User, Check, X, Eye, Edit, Trash2, Calendar, LayoutGrid } from "lucide-react";

export default function TestimonialManagement() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Review Testimoni</h1>
        <span className="bg-orange-100 text-orange-700 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          3 Menunggu Persetujuan
        </span>
      </div>

      {/* SECTION 1 - Review Testimoni Pending */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-orange-50/30">
          <h2 className="font-bold text-gray-800">Perlu Tindakan (Pending)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">Pelanggan</th>
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium">Testimoni & Lampiran</th>
                <th className="p-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="border-b border-gray-50 hover:bg-gray-50 group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"><User size={16} /></div>
                      <div>
                        <p className="font-bold text-gray-800">Anonim {item}</p>
                        <p className="text-xs text-gray-400">Rina T.</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 font-medium">ORD-2024-789{item}</td>
                  <td className="p-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < 4 || item !== 2 ? "text-accent fill-accent" : "text-gray-300"} />
                      ))}
                    </div>
                  </td>
                  <td className="p-4 max-w-xs">
                    <p className="text-gray-600 truncate mb-1">"Sangat puas dengan kualitas pekerjaan dan pelayanannya..."</p>
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded font-medium cursor-pointer hover:bg-blue-100">
                      <LayoutGrid size={12} /> Ada Screenshot (1)
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-white bg-success hover:bg-green-600 rounded-lg shadow-sm transition-colors" title="Approve">
                        <Check size={16} />
                      </button>
                      <button className="p-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm transition-colors" title="Tolak">
                        <X size={16} />
                      </button>
                      <button className="p-2 text-primary border border-primary hover:bg-blue-50 rounded-lg transition-colors" title="Lihat Detail">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2 - Testimoni Dipublikasi */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Testimoni Dipublikasi</h2>
            <p className="text-sm text-gray-500">Total: 17 testimoni aktif</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <input type="text" placeholder="Cari testimoni..." className="pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm w-48 lg:w-64" />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
            <select className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary text-sm bg-white">
              <option>Semua Rating</option>
              <option>5 Bintang</option>
              <option>4 Bintang</option>
            </select>
          </div>
        </div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center"><User size={20} /></div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Nama Samaran</p>
                    <p className="text-xs text-gray-400 mb-1">Ahmad F.</p>
                    <p className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full w-max italic">Universitas Gadjah Mada</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent fill-accent" />)}
                </div>
              </div>
              
              <div className="flex-1 mb-4">
                <p className="text-gray-700 text-sm leading-relaxed italic">"Sangat puas dengan kualitas produk dan layanan pelayanan yang responsif. Pengiriman tepat waktu dan hasilnya melebihi ekspektasi. Terima kasih jasajoki!"</p>
              </div>
              
              <div className="pt-4 border-t flex justify-between items-center text-sm">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Calendar size={14} /> 10 Apr 2024, 14:45
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-primary hover:bg-blue-50 p-1.5 rounded" title="Edit"><Edit size={16}/></button>
                  <button className="text-yellow-600 hover:bg-yellow-50 p-1.5 rounded" title="Unpublish"><Eye size={16}/></button>
                  <button className="text-red-500 hover:bg-red-50 p-1.5 rounded" title="Hapus"><Trash2 size={16}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between bg-white p-4 border rounded-xl shadow-sm">
          <span className="text-sm text-gray-600 font-medium">Menampilkan <strong className="text-gray-800">1-6</strong> dari <strong className="text-gray-800">17</strong></span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm font-medium disabled:opacity-50 text-gray-600">Prev</button>
            <button className="w-8 h-8 rounded bg-primary text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">2</button>
            <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm font-medium text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
