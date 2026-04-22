"use client";

import React from "react";
import { PEDIDOS_MOCK, ESTATISTICAS_MOCK } from "@/utils/dados_mock";
import { motion } from "motion/react";

/**
 * Painel da Cozinha (Dashboard)
 * Segue o padrão de design Sophisticated Dark com cards de bordas arredondadas e cabeçalhos coloridos.
 */
export default function PaginaCozinha() {
  return (
    <div className="py-8 space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Grid de Estatísticas (Estilo Bento Grid do Design) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard titulo="Pedidos Hoje" valor="42" info="+12% vs ontem" cor="border-l-red-600" />
        <StatCard titulo="Mesa Ativa" valor="07" info="Ocupada há 45m" cor="border-l-zinc-700" />
        <StatCard titulo="Ticket Médio" valor="R$ 84,50" info="-2% vs meta" cor="border-l-zinc-700" />
        <StatCard titulo="Tempo Médio" valor="18 min" info="Dentro da meta" cor="border-l-red-600" />
      </div>

      {/* Grid de Pedidos (Cards Estilo Sophisticated Dark) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PEDIDOS_MOCK.map((pedido, i) => (
          <motion.div
            key={pedido.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            {/* Header do Card */}
            <div className={`${pedido.status === 'preparando' ? 'bg-red-600' : 'bg-zinc-800'} p-3 flex justify-between items-center text-white`}>
              <h3 className="font-black uppercase tracking-tight">PEDIDO {pedido.id}</h3>
              <span className="text-sm font-mono">{pedido.mesa === 'Delivery' ? 'DEL' : `Mesa ${pedido.mesa}`}</span>
            </div>

            {/* Conteúdo do Card */}
            <div className="flex-1 p-5 space-y-4">
              <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                <div className="flex-1">
                  <div className="text-lg font-bold text-zinc-100">{pedido.itens}</div>
                  {pedido.observacao && (
                    <div className="text-xs text-zinc-500 mt-1 font-medium bg-zinc-950/50 p-2 rounded italic">
                      - {pedido.observacao}
                    </div>
                  )}
                </div>
                <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-black uppercase ml-2">
                  {pedido.mesa === 'Delivery' ? 'BOB' : 'SAL'}
                </span>
              </div>
            </div>

            {/* Footer do Card */}
            <div className="p-4 bg-zinc-950/80 flex justify-between items-center border-t border-zinc-800">
              <div className={`${pedido.status === 'preparando' ? 'text-red-500' : 'text-zinc-500'} font-mono text-xl font-bold`}>
                {pedido.data} <span className="text-[10px] uppercase opacity-50">min</span>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95">
                FINALIZAR
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ titulo, valor, info, cor }: { titulo: string, valor: string, info: string, cor: string }) {
  return (
    <div className={`bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 border-l-4 ${cor} flex flex-col justify-between shadow-xl backdrop-blur-sm`}>
      <div>
        <span className="text-zinc-500 font-black uppercase tracking-widest text-[10px] block mb-2">{titulo}</span>
        <span className="text-4xl font-bold font-headline text-white tracking-tighter">{valor}</span>
      </div>
      <div className={`text-[10px] font-black uppercase tracking-widest mt-4 ${info.includes('+') ? 'text-emerald-500' : 'text-zinc-500'}`}>
        {info}
      </div>
    </div>
  );
}
