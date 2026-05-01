"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingCart, Package, MessageSquare, Settings, LogOut, Users, Download } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showExportModal, setShowExportModal] = useState(false);

  const navLinks = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Kelola Order" },
    { href: "/admin/products", icon: Package, label: "Produk Digital" },
    { href: "/admin/testimonials", icon: MessageSquare, label: "Testimoni" },
    { href: "/admin/admins", icon: Users, label: "Kelola Admin" },
    { href: "/admin/settings", icon: Settings, label: "Pengaturan" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-2xl font-heading font-bold text-white">Admin<span className="text-accent">Panel</span></h2>
        </div>
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-2 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/admin");
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive 
                      ? "bg-white/20 text-white font-bold shadow-sm" 
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <link.icon size={20} className={isActive ? "text-accent" : ""} /> {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10 space-y-4">
          <button 
            onClick={() => setShowExportModal(true)}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm font-medium border border-white/20"
          >
            <Download size={16} /> Export Laporan
          </button>
          <div className="flex items-center gap-3 bg-blue-900/50 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold">AF</div>
            <div>
              <p className="font-bold text-sm leading-tight">Ahmad Fauzi</p>
              <p className="text-xs text-blue-200">Super Admin</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-500/90 hover:bg-red-500 text-white rounded-xl transition-colors text-sm font-bold shadow-sm">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="p-8 pb-20 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Export Laporan Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Export Laporan</h2>
                <p className="text-sm text-gray-500 mt-1">Download data rekapitulasi sistem</p>
              </div>
              <button onClick={() => setShowExportModal(false)} className="text-gray-400 hover:text-gray-700 bg-white p-2 rounded-full shadow-sm">
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-8 flex-1">
              {/* Jenis Laporan */}
              <div>
                <label className="font-bold text-gray-700 mb-3 block">Pilih Jenis Laporan</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Laporan Order', 'Laporan Keuangan', 'Laporan Produk Digital', 'Laporan Testimoni & Rating', 'Laporan Lengkap'].map((type, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50 transition-colors">
                      <input type="radio" name="reportType" className="w-4 h-4 text-primary" defaultChecked={i===0} />
                      <span className="font-medium text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Periode */}
              <div>
                <label className="font-bold text-gray-700 mb-3 block">Filter Periode</label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Hari Ini', 'Minggu Ini', 'Bulan Ini', 'Tahun Ini', 'Custom'].map((p, i) => (
                    <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {p}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-gray-500 font-medium mb-1 block">Tanggal Mulai</span>
                    <input type="date" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary text-sm" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium mb-1 block">Tanggal Akhir</span>
                    <input type="date" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary text-sm" />
                  </div>
                </div>
              </div>

              {/* Filter Tambahan */}
              <div>
                <label className="font-bold text-gray-700 mb-3 block">Filter Tambahan</label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <select className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option>Semua Status Order</option>
                    <option>Pending</option>
                    <option>Proses</option>
                    <option>Selesai</option>
                  </select>
                  <select className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option>Semua Jenis Layanan</option>
                    <option>Tugas Sekolah</option>
                    <option>Makalah</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                    <span className="text-sm text-gray-600">Include data pelanggan (nama, WA, email)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                    <span className="text-sm text-gray-600">Include grafik & statistik</span>
                  </label>
                </div>
              </div>

              {/* Format Export */}
              <div>
                <label className="font-bold text-gray-700 mb-3 block">Format Export</label>
                <div className="flex gap-4">
                  {['PDF', 'Excel (.xlsx)', 'CSV'].map((format, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="format" className="w-4 h-4 text-primary" defaultChecked={i===1} />
                      <span className="font-medium text-gray-700">{format}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">Preview Data sebelum Download</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setShowExportModal(false)} className="px-5 py-2.5 rounded-lg border bg-white font-medium hover:bg-gray-50 text-gray-700">
                Batal
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-orange-100 text-orange-700 font-bold hover:bg-orange-200 flex items-center gap-2 transition-colors">
                Generate Laporan
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-secondary text-white font-bold hover:bg-orange-600 flex items-center gap-2 shadow-sm transition-colors">
                <Download size={18} /> Download Langsung
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
