import OrderWizard from "@/components/order/OrderWizard";

export const metadata = {
  title: "Order Jasa Joki - JasajokiHomework",
  description: "Form pemesanan jasa joki tugas sekolah, kuliah, makalah, presentasi dengan mudah dan cepat.",
};

export default function OrderPage() {
  return (
    <div className="bg-bg min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Mulai Pemesanan</h1>
          <p className="text-gray-600">Isi detail pesanan Anda, admin kami akan segera mengkonfirmasi via WhatsApp.</p>
        </div>
        
        <OrderWizard />
      </div>
    </div>
  );
}
