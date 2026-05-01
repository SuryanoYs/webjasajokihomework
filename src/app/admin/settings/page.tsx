"use client";
import { useState } from "react";
import { Camera, User, Lock, Bell, Shield, Edit2, Trash2, Plus, Check } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profil");
  const [activePolicyTab, setActivePolicyTab] = useState("syarat");

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; Pengaturan</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* SIDEBAR MINI */}
        <div className="w-full lg:w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden shrink-0">
          <ul className="flex flex-row lg:flex-col p-2 lg:p-4 overflow-x-auto">
            <li><button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50">Umum</button></li>
            <li><button className="w-full text-left px-4 py-3 text-sm font-bold bg-primary/5 text-primary rounded-xl flex items-center justify-between">Pengaturan <span className="w-1.5 h-6 bg-primary rounded-full hidden lg:block"></span></button></li>
            <li><button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50">Keamanan</button></li>
            <li><button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50">Notifikasi</button></li>
            <li><button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50">Akun</button></li>
          </ul>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full">
          {/* TABS NAVIGATION */}
          <div className="flex border-b overflow-x-auto">
            {[
              { id: "profil", label: "PROFIL ADMIN" },
              { id: "rekening", label: "REKENING BANK" },
              { id: "harga", label: "HARGA DASAR" },
              { id: "kebijakan", label: "KEBIJAKAN" },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id ? "text-secondary" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></div>}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {/* TAB 1 - PROFIL ADMIN */}
            {activeTab === "profil" && (
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative mb-4 group cursor-pointer">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                      <Camera size={40} className="text-blue-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={32} className="text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-4">Upload foto profile</p>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold px-6 py-2 rounded-full transition-colors">
                    Ganti Foto
                  </button>
                </div>
                
                <div className="w-full md:w-2/3 space-y-5">
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary text-gray-800" defaultValue="Ahmad Fauzi" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Email</label>
                    <input type="email" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary text-gray-800" defaultValue="admin@jasajoki.com" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Nomor WhatsApp</label>
                    <input type="tel" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary text-gray-800" defaultValue="+62 813-7058-5871" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Bio Singkat</label>
                    <textarea className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary h-24 text-gray-800" placeholder="Ceritakan tentang Anda..."></textarea>
                  </div>
                  
                  <div className="pt-6 flex gap-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-sm">
                      Simpan Perubahan
                    </button>
                    <button className="bg-white text-secondary border-2 border-secondary px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors">
                      Ubah Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2 - REKENING BANK */}
            {activeTab === "rekening" && (
              <div className="max-w-2xl space-y-8">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Rekening Bank Anda</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center justify-between group hover:border-primary transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-lg flex items-center justify-center text-xs">BCA</div>
                        <div>
                          <p className="font-bold text-gray-800">1234567890</p>
                          <p className="text-sm text-gray-500">a.n. Ahmad Fauzi</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-primary bg-white rounded-lg shadow-sm"><Edit2 size={16} /></button>
                        <button className="p-2 text-gray-400 hover:text-red-500 bg-white rounded-lg shadow-sm"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Tambah Rekening Baru</h3>
                  <div className="space-y-4 bg-white border rounded-xl p-6 shadow-sm">
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-2">Nama Bank</label>
                      <select className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary bg-white text-gray-800">
                        <option>BCA</option>
                        <option>Mandiri</option>
                        <option>BNI</option>
                        <option>BRI</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-2">Nomor Rekening</label>
                      <input type="text" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="0000000000" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 block mb-2">Atas Nama</label>
                      <input type="text" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Nama lengkap sesuai buku tabungan" />
                    </div>
                    <div className="pt-2">
                      <button className="bg-success text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                        <Plus size={18} /> Tambah Rekening
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3 - HARGA DASAR */}
            {activeTab === "harga" && (
              <div className="max-w-xl space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Pengaturan Harga Dasar</h3>
                  <p className="text-sm text-gray-500 mb-6">Tentukan harga estimasi minimal untuk setiap layanan</p>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Tugas Sekolah", val: "30000" },
                      { name: "Makalah/Essay", val: "75000" },
                      { name: "PPT Presentasi", val: "60000" },
                      { name: "Parafrase/Editing", val: "25000" }
                    ].map((h, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                        <label className="font-bold text-gray-700">{h.name} (Rp)</label>
                        <input type="number" className="border rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-primary w-full sm:w-48 text-right font-bold text-gray-800" defaultValue={h.val} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between bg-orange-50 p-4 rounded-xl border-orange-100">
                  <div>
                    <h4 className="font-bold text-gray-800">Aktifkan diskon otomatis</h4>
                    <p className="text-xs text-gray-600 mt-1">Beri diskon untuk pesanan di atas Rp 200rb</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
                  </label>
                </div>

                <div className="pt-6">
                  <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors w-full shadow-md">
                    Simpan Harga
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4 - KEBIJAKAN */}
            {activeTab === "kebijakan" && (
              <div className="space-y-6">
                <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg w-max">
                  {['Syarat & Ketentuan', 'Kebijakan Privasi', 'FAQ Default'].map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActivePolicyTab(i===0 ? 'syarat' : i===1 ? 'privasi' : 'faq')}
                      className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activePolicyTab === (i===0?'syarat':i===1?'privasi':'faq') ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="border rounded-2xl overflow-hidden shadow-sm">
                  {/* Fake Toolbar */}
                  <div className="bg-gray-50 border-b p-3 flex flex-wrap gap-2 items-center text-gray-600">
                    <select className="border-none bg-transparent font-bold text-sm outline-none"><option>Heading 1</option><option>Heading 2</option><option>Paragraph</option></select>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-bold">B</button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded italic font-serif">I</button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded underline">U</button>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded">•</button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded font-mono text-xs">1.</button>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-xs">🔗</button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded text-xs">🖼️</button>
                  </div>
                  <textarea 
                    className="w-full p-6 min-h-[400px] outline-none text-gray-700 leading-relaxed" 
                    defaultValue={activePolicyTab === 'syarat' ? "1. Pendahuluan\nSelamat datang di JasajokiHomework...\n\n2. Layanan Kami\nKami menyediakan layanan bantuan referensi untuk tugas..." : ""}
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-400 font-medium">124/5000 karakter</span>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-800 transition-colors">Batal</button>
                    <button className="bg-secondary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors shadow-sm">Preview & Simpan</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
