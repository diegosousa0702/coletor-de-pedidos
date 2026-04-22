"use client";

import React from "react";
import { Search, Filter, TrendingUp, CheckCircle, Clock, XCircle } from "lucide-react";
import { PEDIDOS_MOCK } from "@/utils/dados_mock";
import { motion } from "motion/react";

/**
 * Página de Administração e Histórico
 * Segue o padrão de design Sophisticated Dark com gradientes agressivos e tipografia impactante.
 */
export default function PaginaAdmin() {
  return (
    <div className="py-8 space-y-10 animate-in fade-in duration-700">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white mb-2">Relatórios</h2>
          <p className="text-zinc-500 font-medium">Gestão de caixa e histórico operacional.</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
            <input 
              type="text" 
              placeholder="Buscar pedido..." 
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2 pl-10 pr-4 text-xs focus:border-primary outline-none transition-all placeholder:text-zinc-700"
            />
          </div>
          <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-zinc-800 transition-colors">
            <Filter size={14} className="text-red-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-100">Filtrar</span>
          </button>
        </div>
      </div>

      {/* Card de Faturamento (Design Sophisticated Dark) */}
      <div className="bg-gradient-to-br from-red-600 to-red-950 rounded-3xl overflow-hidden relative group shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">Faturamento Dia</h3>
            <p className="text-white/70 max-w-sm font-medium">Relatório automatizado de performance financeira e fluxo de caixa.</p>
            <button className="bg-white text-black font-black px-10 py-4 rounded-full hover:bg-zinc-100 transition-all shadow-xl active:scale-95 text-xs tracking-widest">
              GERAR RELATÓRIO PDF
            </button>
          </div>
          
          <div className="w-full md:w-auto min-w-[280px] bg-black/30 backdrop-blur-3xl rounded-3xl border border-white/10 p-10 flex flex-col items-center justify-center text-center shadow-inner">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">TOTAL EM CAIXA</span>
            <div className="text-5xl font-black font-mono text-white tracking-tighter">R$ 4.829</div>
            <div className="mt-6 flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/30 px-4 py-1.5 rounded-full text-xs">
              <TrendingUp size={16} />
              <span>+12.5% vs ONTEM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Pedidos no Histórico */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {PEDIDOS_MOCK.map((pedido, i) => (
          <motion.div
            key={pedido.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl backdrop-blur-sm group hover:border-red-600/50 transition-all`}
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black font-mono shadow-lg bg-zinc-950 border border-zinc-800 text-primary`}>
                    {pedido.mesa === 'Delivery' ? "DEL" : pedido.mesa}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-white mb-1">MESA {pedido.mesa}</h4>
                    <p className="text-[10px] text-zinc-600 font-black tracking-widest uppercase">ID {pedido.id}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-[9px] font-black uppercase ${
                  pedido.status === 'preparando' ? "bg-red-600 text-white animate-pulse" :
                  pedido.status === 'entregue' ? "bg-emerald-900/30 text-emerald-400" :
                  "bg-zinc-800 text-zinc-500"
                }`}>
                  {pedido.status}
                </div>
              </div>

              <div className="py-4 border-y border-zinc-800/50">
                <p className="text-sm text-zinc-400 font-medium line-clamp-2">{pedido.itens}</p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-1.5 text-zinc-600">
                  {pedido.status === 'entregue' ? <CheckCircle size={14} className="text-emerald-500" /> : 
                   pedido.status === 'preparando' ? <Clock size={14} className="text-red-600" /> : 
                   <XCircle size={14} />}
                  <span className="text-[11px] font-mono font-bold">{pedido.data} • CAIXA_01</span>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-zinc-700 font-black uppercase tracking-widest mb-1">VALOR</p>
                  <p className="text-xl font-bold font-mono text-zinc-100">R$ {pedido.valor.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
