import FormPedido from "@/components/FormPedido";

/**
 * Página de Pedido na Mesa
 * Interface limpa e centrada com o formulário de integração WhatsApp.
 */
export default function PaginaMesa() {
  return (
    <div className="flex flex-col items-center py-6 space-y-10 animate-in fade-in duration-700">
      <div className="w-full max-w-lg space-y-8">
        
        {/* Banner de Hero */}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-2xl group border border-zinc-800">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxms59fiNfYxBLKA9245xXeGjFBej7oz5PRh5qnlNgp69LDaXnQPFRpkWjPlFD1qNnp6h-YfRtRPR38BaBzVw2AIy3VBABIU24JtKp9RiQ4KF49y2iD7w1Ax7nPT9hJmF_L3GQbMq4r-iMQzu4iEFtShB8OfdsvL48kAAF9SrpMu8wQ3fuygt3DorDui0AZJONQWM71hy9BlJNEhQSxDIek4wyI1QbXuWLcYFlhKcSj7-v_ZOm3obUitriMmoP8Znm5YtinDwiSOs"
            alt="Hero Burger"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="inline-block px-3 py-1 bg-red-600 text-[10px] font-black tracking-widest uppercase mb-2 rounded-sm text-white">
              Digital Steakhouse
            </span>
            <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">Novo Pedido</h2>
          </div>
        </div>

        {/* Componente de Formulário */}
        <FormPedido />
      </div>
    </div>
  );
}
