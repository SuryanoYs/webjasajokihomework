import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, RefreshCw, MessageCircle, CreditCard, ChevronRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-900 to-blue-800 text-white pt-20 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Solusi Tugas Sekolah & Kuliah, <span className="text-accent">Cepat & Terpercaya</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Upload tugas, kami kerjakan, bayar setelah selesai! Fokus pada hal lain, biarkan kami yang mengurus tugas Anda dengan hasil memuaskan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/order" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1">
                Pesan Sekarang
              </Link>
              <Link href="/portfolio" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-white/20 transition-all">
                Lihat Hasil Kerja
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-success" size={20}/> 100% Original</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-success" size={20}/> Privasi Aman</div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            {/* Mockup Illustration */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student happy" className="rounded-xl w-full h-auto object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="bg-success/20 p-2 rounded-full"><CheckCircle2 className="text-success" size={24} /></div>
                <div>
                  <p className="font-bold text-sm">Tugas Selesai!</p>
                  <p className="text-xs text-gray-500">Nilai A terjamin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#F8F9FA" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 px-4 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary tracking-wider uppercase mb-2">Kenapa Memilih Kami?</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Keunggulan JasajokiHomework</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Pengerjaan Cepat", desc: "Selesai dalam 24-48 jam tergantung tingkat kesulitan." },
              { icon: ShieldCheck, title: "Privasi 100% Aman", desc: "Data dan identitas Anda dijamin kerahasiaannya." },
              { icon: RefreshCw, title: "Revisi Gratis 2x", desc: "Tidak puas? Kami perbaiki tanpa biaya tambahan." },
              { icon: CreditCard, title: "Bayar Setelah Selesai", desc: "Keamanan transaksi terjamin, lihat hasil baru bayar." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary tracking-wider uppercase mb-2">Cara Kerja</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Semudah 1-2-3-4</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { step: "1", title: "Pilih Layanan", desc: "Pilih jenis tugas & deadline" },
              { step: "2", title: "Upload File", desc: "Lampirkan instruksi & materi" },
              { step: "3", title: "Pengerjaan", desc: "Admin konfirmasi & kerjakan" },
              { step: "4", title: "Terima & Bayar", desc: "Cek hasil & lakukan pembayaran" }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-secondary transition-colors">
                  <span className="text-3xl font-bold text-primary group-hover:text-secondary">{s.step}</span>
                </div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">{s.title}</h4>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link href="/order" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-orange-600 transition-colors">
                Mulai Pesan Sekarang <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Tugas Menumpuk? Jangan Panik!</h2>
          <p className="text-xl text-blue-100 mb-10">Percayakan pada ahlinya. Kami siap membantu menyelesaikan tugas Anda dengan nilai maksimal.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/order" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
              Order Jasa Joki
            </Link>
            <a href="https://wa.me/6281370585871" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MessageCircle /> Konsultasi WA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
