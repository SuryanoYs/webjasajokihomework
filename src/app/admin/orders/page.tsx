"use client";
import { useState } from "react";
import { Users, UserCheck, Shield, Clock, Plus, Edit, Trash2, ShieldAlert, Activity, CheckCircle, Search, Filter, Eye } from "lucide-react";
import Link from "next/link";

export default function OrderManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola Order</h1>
          <p className="text-sm text-gray-500 mt-1">Daftar pesanan dari pelanggan</p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <input type="text" placeholder="Cari ID/Nama..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <select className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-primary text-sm bg-white">
            <option>Semua Status</option>
            <option>Pending</option>
            <option>Proses</option>
            <option>Selesai</option>
            <option>Revisi</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Pelanggan</th>
                <th className="p-4 font-medium">Layanan</th>
                <th className="p-4 font-medium">Deadline</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: "ORD-9981", name: "Budi S.", srv: "Makalah/Essay", deadline: "15 Mei 2024", status: "PROSES" },
                { id: "ORD-9980", name: "Siti A.", srv: "PPT Presentasi", deadline: "16 Mei 2024", status: "PENDING" },
              ].map((o, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-800">{o.id}</td>
                  <td className="p-4 text-gray-600">{o.name}</td>
                  <td className="p-4 text-gray-600">{o.srv}</td>
                  <td className="p-4 text-red-600 font-medium">{o.deadline}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      o.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                      o.status === 'PROSES' ? 'bg-blue-100 text-blue-800' :
                      o.status === 'SELESAI' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link href={`/admin/orders/${o.id}`} className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
