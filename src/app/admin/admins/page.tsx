"use client";
import { useState } from "react";
import { Users, UserCheck, Shield, Clock, Plus, Edit, Trash2, Camera, ShieldAlert, Activity, CheckCircle, X } from "lucide-react";

export default function AdminManagement() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola access admin dan staff</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-secondary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus size={18} /> Tambah Admin Baru
        </button>
      </div>

      {/* STATS CARDS (4 Kolom) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Total Admin</p>
            <p className="text-2xl font-bold text-gray-800">3</p>
          </div>
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Users size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Admin Aktif</p>
            <p className="text-2xl font-bold text-gray-800">2</p>
          </div>
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><UserCheck size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Super Admin</p>
            <p className="text-2xl font-bold text-gray-800">1</p>
          </div>
          <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center"><Shield size={20} /></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Last Login</p>
            <p className="text-sm font-bold text-gray-800 mt-1">Hari ini<br/>10:30</p>
          </div>
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center"><Clock size={20} /></div>
        </div>
      </div>

      {/* TABLE ADMIN */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">Profile</th>
                <th className="p-4 font-medium">Kontak</th>
                <th className="p-4 font-medium">Status & Role</th>
                <th className="p-4 font-medium">Aktivitas</th>
                <th className="p-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Row 1 - Super Admin */}
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">AF</div>
                    <div>
                      <p className="font-bold text-gray-800">Ahmad Fauzi</p>
                      <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase mt-1 inline-block">Super Admin</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-gray-800">admin@jasajoki.com</p>
                  <p className="text-xs text-gray-500">+62 813-7058-5871</p>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-bold mb-2 inline-block">Active</span>
                  <p className="text-xs text-gray-500">All Access</p>
                </td>
                <td className="p-4 text-gray-600">
                  Hari ini, 10:30 WIB
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-3 py-1.5 text-primary bg-blue-50 hover:bg-blue-100 font-medium rounded-lg transition-colors">Edit</button>
                    <button className="px-3 py-1.5 text-gray-500 bg-gray-100 font-medium rounded-lg cursor-not-allowed">Nonaktifkan</button>
                  </div>
                </td>
              </tr>

              {/* Row 2 - Admin */}
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">SR</div>
                    <div>
                      <p className="font-bold text-gray-800">Siti Rahayu</p>
                      <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase mt-1 inline-block">Admin</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-gray-800">siti@jasajoki.com</p>
                  <p className="text-xs text-gray-500">+62 812-3456-7890</p>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-bold mb-2 inline-block">Active</span>
                  <p className="text-xs text-gray-500">Order, Produk, Testimoni</p>
                </td>
                <td className="p-4 text-gray-600">
                  Kemarin, 15:45 WIB
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-3 py-1.5 text-primary bg-blue-50 hover:bg-blue-100 font-medium rounded-lg transition-colors">Edit</button>
                    <button className="px-3 py-1.5 text-orange-700 bg-orange-50 hover:bg-orange-100 font-medium rounded-lg transition-colors">Nonaktifkan</button>
                    <button className="px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 font-medium rounded-lg transition-colors">Hapus</button>
                  </div>
                </td>
              </tr>

              {/* Row 3 - Empty/Inactive */}
              <tr className="border-b border-gray-50 hover:bg-gray-50 opacity-60">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 text-gray-400 flex items-center justify-center"><UserCheck size={18}/></div>
                    <div>
                      <p className="font-medium text-gray-500 italic">[Empty Slot]</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-400 italic">-</td>
                <td className="p-4">
                  <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full font-bold">Inactive</span>
                </td>
                <td className="p-4 text-gray-400 italic">-</td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => setShowAddModal(true)} className="px-3 py-1.5 text-green-700 bg-green-50 hover:bg-green-100 font-medium rounded-lg transition-colors">Tambah Staff</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Floating Action */}
        <button className="absolute bottom-6 left-6 bg-white border shadow-md text-gray-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
          <Activity size={16} /> Audit Log
        </button>
      </div>

      {/* TAMBAH ADMIN BARU (MODAL) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[95vh]">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Tambah Admin Baru</h2>
                <p className="text-sm text-gray-500 mt-1">Tambahkan akses untuk staff baru</p>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-700 bg-white p-2 rounded-full shadow-sm">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* SECTION 1 - Informasi Akun */}
                <div className="space-y-5">
                  <h3 className="font-bold text-gray-800 border-b pb-2">Informasi Akun</h3>
                  
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-dashed border-primary flex items-center justify-center text-primary cursor-pointer hover:bg-blue-100">
                      <Camera size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-700">Upload Foto Profile</p>
                      <p className="text-xs text-gray-500">Opsional. Maks 2MB.</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Nama Lengkap *</label>
                    <input type="text" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Email *</label>
                    <input type="email" className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="staff@jasajoki.com" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 block mb-1">Nomor WhatsApp *</label>
                    <div className="flex gap-2">
                      <input type="tel" className="flex-1 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="+62 8XX-XXXX-XXXX" />
                      <button className="bg-gray-100 text-gray-600 px-4 rounded-xl font-bold hover:bg-gray-200 text-sm border">Verify</button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border">
                    <label className="text-sm font-bold text-gray-700 block mb-1">Password Sementara</label>
                    <div className="flex gap-2 mb-2">
                      <input type="text" className="flex-1 border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary text-sm font-mono" defaultValue="Gen2024!RandomX" />
                      <button className="bg-white text-primary px-3 rounded-lg font-bold hover:bg-blue-50 text-xs border border-primary/30">Generate</button>
                    </div>
                    <div className="flex gap-1 mb-3">
                      <div className="h-1.5 flex-1 bg-green-500 rounded-full"></div>
                      <div className="h-1.5 flex-1 bg-green-500 rounded-full"></div>
                      <div className="h-1.5 flex-1 bg-green-500 rounded-full"></div>
                      <span className="text-[10px] text-green-600 font-bold ml-2">Strong</span>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                      <span className="text-xs text-gray-600 font-medium">Admin harus ubah password saat login pertama</span>
                    </label>
                  </div>
                </div>

                {/* SECTION 2 & 3 - Permissions & Notes */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Perizinan Akses (Role)</h3>
                    
                    <div className="space-y-3">
                      <label className="block p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <input type="radio" name="role" className="mt-1 w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-gray-800 text-sm flex items-center gap-2">Super Admin <ShieldAlert size={14} className="text-red-500"/></p>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">View dashboard, Kelola order, Produk, Testimoni, Pengaturan sistem penuh.</p>
                          </div>
                        </div>
                      </label>
                      
                      <label className="block p-4 border-2 border-primary bg-blue-50/30 rounded-xl cursor-pointer">
                        <div className="flex items-start gap-3 mb-3">
                          <input type="radio" name="role" className="mt-1 w-4 h-4 text-primary" defaultChecked />
                          <div>
                            <p className="font-bold text-gray-800 text-sm">Admin (Custom)</p>
                            <p className="text-xs text-gray-500 mt-1">Pilih akses spesifik untuk staff ini</p>
                          </div>
                        </div>
                        <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-primary" /> Dashboard</label>
                          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-primary" /> Kelola Order</label>
                          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-primary" /> Produk Digital</label>
                          <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-primary" /> Testimoni</label>
                          <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-primary" /> Pengaturan</label>
                        </div>
                      </label>
                      
                      <label className="block p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <input type="radio" name="role" className="mt-1 w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-gray-800 text-sm">Staff Terbatas</p>
                            <p className="text-xs text-gray-500 mt-1">Hanya view order, upload hasil, & kirim invoice.</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-3">Catatan Internal</h3>
                    <textarea className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary text-sm h-24" placeholder="Catatan internal untuk staff admin ini (tidak tampil ke publik)..."></textarea>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1.5"><CheckCircle size={12}/> Admin akan menerima email aktivasi dengan link dan password sementara.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="px-6 py-2.5 rounded-xl border bg-white font-bold hover:bg-gray-100 text-gray-700">
                Batal
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-secondary text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20">
                Tambah Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
