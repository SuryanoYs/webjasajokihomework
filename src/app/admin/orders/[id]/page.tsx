"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, UploadCloud, MessageSquare, Edit, Trash2, Eye, X, Phone, CheckCircle, FileText, File } from "lucide-react";

export default function OrderDetail({ params }: { params: { id: string } }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/orders" className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            Detail Order 
            <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-bold">#ORD-9981</span>
            <span className="bg-orange-50 text-orange-600 border border-orange-200 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">Dalam Proses</span>
          </h1>
        </div>
      </div>

      {/* 2 KOLOM LAYOUT */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        
        {/* KOLOM KIRI (60% -> 3/5) */}
        <div className="xl:col-span-3 space-y-6">
          {/* Section 1 - Informasi Pelanggan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Informasi Pelanggan</h2>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl uppercase">
                BS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 flex-1">
                <div>
                  <p className="text-xs text-gray-500 font-medium">Nama</p>
                  <p className="font-bold text-gray-800">Budi Santoso</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                  <p className="font-medium text-gray-800">+62 812-3456-7890</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="font-medium text-gray-800">budi.s@email.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Institusi</p>
                  <p className="font-medium text-gray-800">Universitas Indonesia</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-gray-500 font-medium">Tanggal Order</p>
                  <p className="font-medium text-gray-800">1 Mei 2024, 14:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Detail Pengerjaan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Detail Pengerjaan</h2>
            
            {/* Timeline */}
            <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent mb-8">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-success text-white shadow shrink-0 z-10">
                  <CheckCircle size={14} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4">
                  <p className="font-bold text-gray-800">Order dibuat</p>
                  <p className="text-xs text-gray-500">1 Mei, 14:30</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-success text-white shadow shrink-0 z-10">
                  <CheckCircle size={14} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4">
                  <p className="font-bold text-gray-800">Admin konfirmasi</p>
                  <p className="text-xs text-gray-500">1 Mei, 15:00</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-success text-white shadow shrink-0 z-10">
                  <CheckCircle size={14} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4">
                  <p className="font-bold text-gray-800">Pengerjaan dimulai</p>
                  <p className="text-xs text-gray-500">1 Mei, 16:00</p>
                </div>
              </div>
              
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-primary text-white shadow shrink-0 z-10 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-primary mb-1">Upload hasil (Current)</p>
                  <p className="text-xs text-gray-500 mb-3">12 Mei, 10:23</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-2 rounded border text-sm">
                      <div className="flex items-center gap-2 text-gray-700"><FileText size={16} className="text-red-500"/> Revisian Bab 1.pdf</div>
                      <button className="text-primary hover:bg-blue-50 p-1 rounded"><Download size={16}/></button>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded border text-sm">
                      <div className="flex items-center gap-2 text-gray-700"><FileText size={16} className="text-red-500"/> Revisian Bab 2.pdf</div>
                      <button className="text-primary hover:bg-blue-50 p-1 rounded"><Download size={16}/></button>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded border text-sm">
                      <div className="flex items-center gap-2 text-gray-700"><File size={16} className="text-blue-500"/> Penjelasan Revisi.docx</div>
                      <button className="text-primary hover:bg-blue-50 p-1 rounded"><Download size={16}/></button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-200 bg-white shadow shrink-0 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4">
                  <p className="font-medium text-gray-400">Menunggu pembayaran</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-200 bg-white shadow shrink-0 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4">
                  <p className="font-medium text-gray-400">Selesai</p>
                </div>
              </div>
            </div>

            {/* Instruksi */}
            <div>
              <p className="font-bold text-gray-800 mb-2">Instruksi dari pelanggan</p>
              <div className="bg-gray-50 border rounded-xl p-4 text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                "Tolong perhatikan format daftar pustaka APA style. Bab 2 tambahkan sitasi dari jurnal internasional minimal 3 buah. Sisanya sudah sesuai panduan."
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN (40% -> 2/5) */}
        <div className="xl:col-span-2 space-y-6">
          {/* Section 3 - Informasi Order */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 relative z-10">Informasi Order</h2>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Service Type</span>
                <span className="font-bold text-gray-800">Makalah/Essay</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Judul</span>
                <span className="font-medium text-gray-800 text-right max-w-[60%]">Analisis Dampak Digital Marketing</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Halaman</span>
                <span className="font-medium text-gray-800">10 halaman</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Format</span>
                <span className="font-medium text-gray-800">PDF + DOCX</span>
              </div>
              <div className="flex justify-between items-center bg-red-50 p-2 rounded-lg border border-red-100">
                <span className="text-red-700 text-sm font-medium">Deadline</span>
                <span className="font-bold text-red-700">15 Mei 2024</span>
              </div>
              <div className="pt-4 border-t flex justify-between items-end">
                <div>
                  <span className="text-gray-500 text-sm block mb-1">Total Harga</span>
                  <span className="text-3xl font-heading font-bold text-secondary">Rp 150.000</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1.5 rounded-full font-bold">Belum Bayar</span>
              </div>
            </div>
          </div>

          {/* Section 4 - Hasil Pengerjaan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">File Final (Siap Kirim)</h2>
            <div className="bg-gray-50 border rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">makalah_final.docx</p>
                  <p className="text-xs text-gray-500">1.2 MB • Diupload: 12 Mei 2024, 10:23</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 bg-white p-3 rounded border mb-4 italic">
                "Sudah sesuai instruksi, daftar pustaka sudah APA style dan ada 4 jurnal internasional di Bab 2."
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors flex justify-center items-center gap-2">
                  <Download size={16} /> Download
                </button>
                <button className="flex-1 bg-secondary text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex justify-center items-center gap-2 shadow-sm">
                  <Eye size={16} /> Preview
                </button>
              </div>
            </div>
          </div>

          {/* Section 5 - Aksi Cepat */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Aksi Cepat</h2>
            <div className="space-y-3">
              <button 
                onClick={() => setShowUploadModal(true)}
                className="w-full bg-secondary/10 text-secondary border border-secondary/20 py-3 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <UploadCloud size={18} /> Upload Hasil Pengerjaan
              </button>
              <button 
                onClick={() => setShowInvoiceModal(true)}
                className="w-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 py-3 rounded-xl font-bold hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} /> Kirim Invoice WA
              </button>
              <a href="https://wa.me/6281234567890" target="_blank" className="w-full bg-gray-50 text-gray-700 border py-3 rounded-xl font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Phone size={18} className="text-green-600" /> Chat Pelanggan
              </a>
              <button className="w-full bg-blue-50 text-primary border border-blue-100 py-3 rounded-xl font-medium hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
                <Edit size={18} /> Edit Detail Order
              </button>
              
              <div className="pt-2">
                <label className="text-xs text-gray-500 font-medium mb-1 block">Ubah Status Order</label>
                <select className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary text-sm font-bold text-gray-700 bg-gray-50">
                  <option value="pending">🟡 Pending</option>
                  <option value="proses" selected>🔵 Dalam Proses</option>
                  <option value="selesai">🟢 Selesai</option>
                  <option value="revisi">🔴 Revisi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UPLOAD HASIL PEKERJAAN (MODAL) */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Upload Hasil Pengerjaan</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-bold">#ORD-9981</span>
                <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-700 bg-white p-2 rounded-full shadow-sm">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* SECTION 1 - Info Order */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex flex-wrap gap-6 justify-between items-center text-sm">
                <div><span className="text-gray-500 block mb-1">Pelanggan</span><strong className="text-gray-800">Budi S.</strong></div>
                <div><span className="text-gray-500 block mb-1">Layanan</span><strong className="text-gray-800">Makalah/Essay</strong></div>
                <div><span className="text-gray-500 block mb-1">Deadline</span><strong className="text-red-600">15 Mei 2024</strong></div>
                <div><span className="text-gray-500 block mb-1">Status Saat Ini</span><span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">Dalam Proses</span></div>
              </div>

              {/* SECTION 2 - Upload File */}
              <div>
                <div className="border-2 border-dashed border-primary/30 bg-blue-50/50 rounded-2xl p-10 text-center cursor-pointer hover:bg-blue-50 transition-colors mb-4">
                  <UploadCloud className="mx-auto text-primary mb-3" size={48} />
                  <p className="font-bold text-primary text-lg">Drag & drop file hasil pengerjaan di sini</p>
                  <p className="text-sm text-gray-500 mt-1">Supported formats: PDF, DOCX, PPTX (max 25MB)</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm border-l-4 border-l-success">
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400" size={24} />
                      <div>
                        <p className="font-bold text-gray-800 text-sm">laporan_final.docx <span className="text-gray-400 font-normal ml-2">• 1.2 MB</span></p>
                        <p className="text-xs text-gray-500">10:23 AM, 12 Mei 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-primary hover:bg-blue-50 p-2 rounded-lg transition-colors"><Eye size={18} /></button>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm border-l-4 border-l-success">
                    <div className="flex items-center gap-3">
                      <FileText className="text-red-400" size={24} />
                      <div>
                        <p className="font-bold text-gray-800 text-sm">laporan_revisi.pdf <span className="text-gray-400 font-normal ml-2">• 850 KB</span></p>
                        <p className="text-xs text-gray-500">10:25 AM, 12 Mei 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-primary hover:bg-blue-50 p-2 rounded-lg transition-colors"><Eye size={18} /></button>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 - Catatan */}
              <div>
                <label className="font-bold text-gray-700 mb-2 block">Catatan/Penjelasan untuk pelanggan...</label>
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-gray-50 border-b p-2 flex gap-2">
                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold">B</button>
                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic font-serif">I</button>
                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">•</button>
                  </div>
                  <textarea className="w-full p-4 h-32 outline-none text-sm" placeholder="Tulis catatan atau penjelasan untuk pelanggan..."></textarea>
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">0/500 karakter</div>
              </div>

              {/* SECTION 4 - Opsi Pengiriman */}
              <div className="bg-gray-50 p-5 rounded-xl border">
                <label className="font-bold text-gray-700 mb-3 block">Opsi Pengiriman & Keamanan</label>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                    <span className="text-sm text-gray-700">Kirim notifikasi WhatsApp otomatis</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                    <span className="text-sm text-gray-700">Password protect file (auto-generate password)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                    <span className="text-sm text-gray-700">File expired setelah 7 hari</span>
                  </label>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Link Google Drive (Opsional)</label>
                  <input type="url" className="w-full border rounded-lg p-2.5 text-sm outline-none focus:ring-primary focus:border-primary" placeholder="https://drive.google.com/..." />
                </div>
              </div>
            </div>

            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <button className="px-6 py-2.5 rounded-xl border bg-white font-bold hover:bg-gray-50 text-gray-700">
                Simpan Draft
              </button>
              <button className="px-6 py-2.5 rounded-xl bg-secondary text-white font-bold hover:bg-orange-600 shadow-md">
                Upload & Kirim ke Pelanggan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* KIRIM INVOICE VIA WA (MODAL) */}
      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col max-h-[95vh]">
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800">Kirim Invoice via WhatsApp</h2>
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full font-bold">INV-2024-001</span>
                <button onClick={() => setShowInvoiceModal(false)} className="text-gray-400 hover:text-gray-700 bg-white p-2 rounded-full shadow-sm">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-8">
              {/* KOLOM KIRI (Preview Invoice) */}
              <div className="flex-1 space-y-6">
                <div className="bg-white border rounded-xl shadow-sm p-6 relative">
                  {/* Mockup Invoice */}
                  <div className="flex justify-between items-start mb-6 pb-6 border-b border-dashed">
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-primary">Jasajoki<span className="text-secondary">Homework</span></h3>
                      <p className="text-xs text-gray-500 mt-1">Invoice: INV-2024-001<br/>Tanggal: 2 Mei 2024</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded text-sm uppercase">Unpaid</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-gray-800 mb-2 uppercase tracking-wider">Detail Order</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                      <div className="flex justify-between"><span className="text-gray-500">Layanan</span><span className="font-bold">Makalah/Essay</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Judul</span><span className="font-medium">Analisis Dampak Digital Marketing</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Halaman</span><span className="font-medium">10 halaman</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Deadline</span><span className="font-medium">15 Mei 2024</span></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2"><span className="text-gray-600">Subtotal</span><span>Rp 150.000</span></div>
                    <div className="flex justify-between text-sm mb-4"><span className="text-gray-600">Diskon</span><span>Rp 0</span></div>
                    <div className="flex justify-between items-center pt-3 border-t-2 border-gray-800">
                      <span className="font-bold text-lg">TOTAL PEMBAYARAN</span>
                      <span className="font-bold text-2xl text-secondary">Rp 150.000</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg text-sm border border-blue-100">
                    <h4 className="font-bold text-primary mb-2">Informasi Pembayaran (Transfer)</h4>
                    <p className="mb-1"><span className="font-bold text-gray-800">BCA:</span> 1234567890 a.n. Ahmad Fauzi</p>
                    <p className="mb-3"><span className="font-bold text-gray-800">Mandiri:</span> 0987654321 a.n. Ahmad Fauzi</p>
                    <p className="text-xs text-blue-800 italic">Mohon transfer sesuai total dan kirim bukti transfer ke chat ini.</p>
                  </div>
                </div>

                <div className="bg-gray-50 border rounded-xl p-4">
                  <label className="font-bold text-gray-700 mb-2 block">Nomor WhatsApp Tujuan</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input type="text" className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm font-bold" defaultValue="+62 812-3456-7890" />
                    </div>
                    <button className="bg-white border text-primary text-sm font-bold px-4 rounded-lg hover:bg-gray-50">Data Pelanggan</button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Penerima: <strong>Budi Santoso</strong></p>
                </div>
              </div>

              {/* KOLOM KANAN (Message Setting) */}
              <div className="flex-1 space-y-6 flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-gray-700">Pesan WhatsApp</label>
                  <span className="text-xs text-gray-400 font-mono">185/500</span>
                </div>
                
                <div className="bg-[#EFEAE2] p-4 rounded-xl border flex-1 relative min-h-[300px]">
                  {/* WA Bubble */}
                  <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[90%] float-right text-sm text-gray-800 whitespace-pre-wrap leading-relaxed relative">
                    Halo Budi Santoso! 👋{"\n"}
                    Terima kasih telah menggunakan jasa JasajokiHomework.{"\n"}
                    Berikut invoice untuk order Anda:{"\n\n"}
                    Layanan: Makalah/Essay{"\n"}
                    Judul: Analisis Dampak Digital Marketing{"\n\n"}
                    Total Pembayaran: *Rp 150.000*{"\n\n"}
                    Silakan transfer ke rekening yang tertera pada invoice. Terima kasih! 🙏
                    
                    <div className="absolute -right-2 top-0 w-4 h-4 bg-[#DCF8C6] transform rotate-45"></div>
                  </div>
                  <div className="clear-both mb-3"></div>
                  
                  {/* Attachment Bubble */}
                  <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none shadow-sm max-w-[70%] float-right flex items-center gap-3 mb-4">
                    <div className="bg-red-500 p-2 rounded text-white"><FileText size={20} /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Invoice_INV-2024...</p>
                      <p className="text-xs text-gray-500">125 KB • PDF</p>
                    </div>
                  </div>
                  <div className="clear-both"></div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-50 text-green-700 border border-green-200 py-2 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors">
                    Template Default
                  </button>
                  <button className="flex-1 bg-white border py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors text-gray-700">
                    Reset Pesan
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Attach Invoice PDF otomatis</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#25D366]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Kirim Nanti (Schedule)</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#25D366]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t bg-white flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-[#128C7E] bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                <CheckCircle size={14} /> WhatsApp Business API Ready
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 rounded-xl border bg-white font-bold hover:bg-gray-50 text-gray-700">
                  Simpan Draft
                </button>
                <button className="px-8 py-2.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] shadow-lg shadow-green-500/20 flex items-center gap-2 transition-transform transform hover:-translate-y-0.5">
                  <MessageSquare size={18} /> Kirim via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
