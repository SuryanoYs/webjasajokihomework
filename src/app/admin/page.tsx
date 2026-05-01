import { TrendingUp, ShoppingBag, Clock, CheckCircle, Upload, MessageSquare } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Ringkasan aktivitas JasajokiHomework</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors shadow-sm">
          Export Laporan
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><ShoppingBag size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Order</p>
            <p className="text-2xl font-bold text-gray-800">1,248</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center"><Clock size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pending/Proses</p>
            <p className="text-2xl font-bold text-gray-800">42</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center"><CheckCircle size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Selesai Bulan Ini</p>
            <p className="text-2xl font-bold text-gray-800">315</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center"><TrendingUp size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Revenue Bulan Ini</p>
            <p className="text-xl font-bold text-gray-800">Rp 15.4M</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">Order Terbaru</h2>
            <a href="/admin/orders" className="text-primary text-sm font-medium hover:underline">Lihat Semua</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  <th className="p-4 font-medium">ID Order</th>
                  <th className="p-4 font-medium">Pelanggan</th>
                  <th className="p-4 font-medium">Layanan</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: "ORD-9981", name: "Budi S.", srv: "Makalah/Essay", status: "PENDING" },
                  { id: "ORD-9980", name: "Siti A.", srv: "PPT Presentasi", status: "PROSES" },
                  { id: "ORD-9979", name: "John D.", srv: "Tugas Kuliah", status: "SELESAI" },
                  { id: "ORD-9978", name: "Anonim", srv: "Parafrase", status: "REVISI" },
                ].map((o, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">{o.id}</td>
                    <td className="p-4 text-gray-600">{o.name}</td>
                    <td className="p-4 text-gray-600">{o.srv}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        o.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                        o.status === 'PROSES' ? 'bg-blue-100 text-blue-800' :
                        o.status === 'SELESAI' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-primary hover:underline font-medium">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-lg text-gray-800 mb-4">Aksi Cepat</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-primary hover:text-white rounded-lg transition-colors group">
                <span className="font-medium">Upload Hasil Pengerjaan</span>
                <Upload size={18} className="text-gray-400 group-hover:text-white" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-primary hover:text-white rounded-lg transition-colors group">
                <span className="font-medium">Kirim Invoice WA</span>
                <MessageSquare size={18} className="text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          <div className="bg-primary text-white rounded-xl shadow-sm p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2 text-accent">Perlu Perhatian!</h3>
              <p className="text-sm text-blue-100 mb-4">Ada 3 testimoni baru yang menunggu persetujuan (approval) Anda.</p>
              <a href="/admin/testimonials" className="inline-block bg-white text-primary px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors">
                Review Testimoni
              </a>
            </div>
            <MessageSquare size={100} className="absolute -bottom-6 -right-6 text-blue-800 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
