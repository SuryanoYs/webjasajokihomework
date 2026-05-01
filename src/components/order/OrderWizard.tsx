"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Check, ChevronRight, UploadCloud, X, ArrowLeft, Send } from "lucide-react";

const SERVICES = [
  { id: "sekolah", name: "Tugas Sekolah (SD/SMP/SMA)", price: 30000 },
  { id: "kuliah", name: "Tugas Kuliah", price: 50000 },
  { id: "makalah", name: "Makalah/Essay", price: 75000 },
  { id: "ppt", name: "PPT Presentasi", price: 60000 },
  { id: "edit", name: "Parafrase/Editing", price: 25000 },
];

const DEADLINES = [
  { id: "hari_ini", name: "Hari ini (Sangat Mendesak)", multiplier: 1.5 },
  { id: "1_hari", name: "1 Hari", multiplier: 1.2 },
  { id: "2_3_hari", name: "2-3 Hari", multiplier: 1.0 },
  { id: "lebih_3_hari", name: "> 3 Hari (Santai)", multiplier: 0.8 },
];

export default function OrderWizard() {
  const [step, setStep] = useState(1);
  
  // Form State
  const [service, setService] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [notes, setNotes] = useState("");
  
  const [customer, setCustomer] = useState({
    name: "",
    wa: "",
    institution: "",
  });
  const [agree, setAgree] = useState(false);

  // File Upload Logic
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles].slice(0, 5));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    maxSize: 25 * 1024 * 1024, // 25MB
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'text/plain': ['.txt'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    }
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Pricing Logic
  const selectedService = SERVICES.find(s => s.id === service);
  const selectedDeadline = DEADLINES.find(d => d.id === deadline);
  const estimatedPrice = selectedService && selectedDeadline 
    ? selectedService.price * selectedDeadline.multiplier 
    : 0;

  // Submit Logic
  const handleSubmit = async () => {
    const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "6281370585871";
    
    // In a real app, we'd upload files to S3/Cloudinary and save order to DB here via API route
    // For now, we simulate API call and prepare WA message
    const fileNames = files.map(f => f.name).join(", ") || "Tidak ada file";
    
    const message = `Halo Admin JasajokiHomework, saya ingin order:
• Layanan: ${selectedService?.name}
• Deadline: ${selectedDeadline?.name}
• File: ${fileNames}
• Catatan: ${notes || "-"}
• Nama: ${customer.name}
• No WA: ${customer.wa}
• Institusi: ${customer.institution}

Mohon konfirmasi ketersediaan dan proses selanjutnya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${waNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 border-b px-6 py-4 flex items-center justify-between">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center flex-1 relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 ${
              step === i ? "bg-secondary text-white ring-4 ring-orange-100" 
              : step > i ? "bg-success text-white" 
              : "bg-gray-200 text-gray-500"
            }`}>
              {step > i ? <Check size={16} /> : i}
            </div>
            {i < 4 && (
              <div className={`absolute top-4 left-1/2 w-full h-0.5 -z-0 ${step > i ? "bg-success" : "bg-gray-200"}`}></div>
            )}
            <span className="text-xs font-medium mt-2 hidden md:block text-gray-500">
              {i === 1 ? "Layanan" : i === 2 ? "File" : i === 3 ? "Data" : "Review"}
            </span>
          </div>
        ))}
      </div>

      <div className="p-6 md:p-10">
        {/* Step 1: Layanan */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            <div>
              <h3 className="text-xl font-bold mb-4">1. Pilih Layanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <label key={s.id} className={`flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${service === s.id ? 'border-primary bg-blue-50 ring-2 ring-primary/20' : 'hover:border-gray-300'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <input type="radio" name="service" value={s.id} checked={service === s.id} onChange={(e) => setService(e.target.value)} className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-gray-800">{s.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-7">Mulai Rp {s.price.toLocaleString('id-ID')}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2. Pilih Deadline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DEADLINES.map((d) => (
                  <label key={d.id} className={`flex text-center justify-center p-3 border rounded-xl cursor-pointer transition-all ${deadline === d.id ? 'border-secondary bg-orange-50 ring-2 ring-secondary/20 text-secondary font-bold' : 'hover:border-gray-300 text-gray-600'}`}>
                    <input type="radio" name="deadline" className="hidden" value={d.id} checked={deadline === d.id} onChange={(e) => setDeadline(e.target.value)} />
                    {d.name}
                  </label>
                ))}
              </div>
            </div>
            
            {service && deadline && (
              <div className="bg-blue-50 p-4 rounded-xl flex justify-between items-center border border-blue-100">
                <span className="text-gray-600">Estimasi Harga (Mulai dari):</span>
                <span className="text-2xl font-bold text-primary">Rp {estimatedPrice.toLocaleString('id-ID')}</span>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t">
              <button 
                onClick={() => setStep(2)} 
                disabled={!service || !deadline}
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Selanjutnya <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Upload File */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold">Upload File Tugas (Maks 5 File)</h3>
            
            <div {...getRootProps()} className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${isDragActive ? 'border-primary bg-blue-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50'}`}>
              <input {...getInputProps()} />
              <UploadCloud className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="font-medium text-gray-700">Drag & drop file di sini, atau klik untuk memilih file</p>
              <p className="text-sm text-gray-500 mt-2">Format: PDF, DOCX, PPTX, TXT, JPG, PNG (Max 25MB/file)</p>
            </div>

            {files.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">File Terpilih ({files.length}/5):</h4>
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm">
                    <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                    <button onClick={() => removeFile(i)} className="text-red-500 hover:text-red-700 p-1">
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Instruksi Tambahan (Opsional)</label>
              <textarea 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-32"
                placeholder="Tuliskan format penulisan, gaya bahasa, atau catatan khusus lainnya..."
              ></textarea>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-2">
                <ArrowLeft size={20} /> Kembali
              </button>
              <button 
                onClick={() => setStep(3)} 
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 flex items-center gap-2"
              >
                Selanjutnya <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Data Pelanggan */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold">Informasi Kontak</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Nama (Bisa Nama Samaran) *</label>
                <input 
                  type="text" 
                  value={customer.name}
                  onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">No. WhatsApp *</label>
                <input 
                  type="tel" 
                  value={customer.wa}
                  onChange={(e) => setCustomer({...customer, wa: e.target.value})}
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="081234567890"
                />
                <p className="text-xs text-gray-500 mt-1">Kami akan menghubungi Anda melalui nomor ini.</p>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Institusi (Sekolah/Universitas)</label>
                <input 
                  type="text" 
                  value={customer.institution}
                  onChange={(e) => setCustomer({...customer, institution: e.target.value})}
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="Contoh: Universitas Indonesia"
                />
              </div>

              <label className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-xl border cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 w-5 h-5 text-primary rounded"
                />
                <span className="text-sm text-gray-700">
                  Saya setuju dengan <a href="#" className="text-primary font-medium hover:underline">Syarat & Ketentuan</a> serta <a href="#" className="text-primary font-medium hover:underline">Kebijakan Privasi</a>. Layanan ini murni untuk referensi pembelajaran.
                </span>
              </label>
            </div>

            <div className="flex justify-between pt-4 border-t mt-8">
              <button onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-2">
                <ArrowLeft size={20} /> Kembali
              </button>
              <button 
                onClick={() => setStep(4)} 
                disabled={!customer.name || !customer.wa || !agree}
                className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 disabled:opacity-50 flex items-center gap-2"
              >
                Review Pesanan <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Review Pesanan Anda</h3>
              <p className="text-gray-500">Pastikan semua data sudah benar sebelum mengirim ke WhatsApp Admin.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border space-y-4">
              <div className="grid grid-cols-3 border-b pb-3">
                <span className="text-gray-500 col-span-1">Layanan</span>
                <span className="font-semibold text-gray-800 col-span-2">{selectedService?.name}</span>
              </div>
              <div className="grid grid-cols-3 border-b pb-3">
                <span className="text-gray-500 col-span-1">Deadline</span>
                <span className="font-semibold text-gray-800 col-span-2">{selectedDeadline?.name}</span>
              </div>
              <div className="grid grid-cols-3 border-b pb-3">
                <span className="text-gray-500 col-span-1">File Terupload</span>
                <span className="font-semibold text-gray-800 col-span-2">{files.length} File</span>
              </div>
              <div className="grid grid-cols-3 border-b pb-3">
                <span className="text-gray-500 col-span-1">Pemesan</span>
                <span className="font-semibold text-gray-800 col-span-2">{customer.name} ({customer.wa})</span>
              </div>
              <div className="grid grid-cols-3 pt-2">
                <span className="text-gray-500 font-medium col-span-1">Estimasi Harga</span>
                <span className="font-bold text-2xl text-secondary col-span-2">Rp {estimatedPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between pt-4 gap-4">
              <button onClick={() => setStep(3)} className="text-gray-500 hover:text-gray-800 font-medium flex items-center justify-center gap-2 px-6 py-3 border rounded-full">
                <ArrowLeft size={20} /> Edit Data
              </button>
              <button 
                onClick={handleSubmit} 
                className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                <Send size={20} /> Kirim Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
