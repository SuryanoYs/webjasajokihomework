"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        router.push("/admin");
      } else {
        alert(data.message || "Email atau password salah!");
      }
    } catch (error) {
      alert("Terjadi kesalahan pada server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-[100]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">Admin<span className="text-accent">Login</span></h2>
          <p className="text-gray-500 text-sm">Masuk untuk mengelola pesanan JasajokiHomework</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Admin</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none" 
                placeholder="admin@jasajoki.com"
              />
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary outline-none" 
                placeholder="••••••••"
              />
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              <span className="text-gray-600">Ingat saya</span>
            </label>
            <a href="#" className="text-primary hover:underline font-medium">Lupa Password?</a>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Login Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
