"use client";

import React, { useState } from "react";
import { Send, Utensils, Hash, ShoppingBag, StickyNote } from "lucide-react";
import { motion } from "motion/react";

/**
 * Página de Pedido na Mesa
 * Interface limpa e centrada com inputs de borda sofisticada.
 */
export default function PaginaMesa() {
  const [enviando, setEnviando] = useState(false);

  const manipularEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      alert("Pedido enviado com sucesso!");
      setEnviando(false);
    }, 1500);
  };

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

        {/* Formulário Estilizado */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-md shadow-2xl space-y-6">
          <form onSubmit={manipularEnvio} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-zinc-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                <Hash size={14} className="text-primary" />
                Número da Mesa
              </label>
              <input
                type="number"
                placeholder="00"
                required
                className="input-field text-2xl font-bold font-headline"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                <Utensils size={14} className="text-primary" />
                Seu Pedido
              </label>
              <textarea
                placeholder="Ex: 2 x-burger, 1 batata, 1 coca"
                required
                rows={3}
                className="input-field resize-none font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-zinc-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                  <ShoppingBag size={14} className="text-primary" />
                  Qtd.
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="input-field text-xl font-bold font-headline"
                />
              </div>

              <div className="flex items-end pb-2">
                <p className="text-[9px] text-zinc-600 italic font-medium leading-tight">
                  * Verifique todos os itens antes de enviar para a produção.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                <StickyNote size={14} className="text-primary" />
                Observações
              </label>
              <textarea
                placeholder="Alguma restrição ou ponto da carne?"
                rows={2}
                className="input-field resize-none text-sm"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              disabled={enviando}
              type="submit"
              className="btn-primary w-full py-4 text-sm tracking-widest font-black"
            >
              {enviando ? "PROCESSANDO..." : (
                <>
                  ENVIAR PEDIDO
                  <Send size={16} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
