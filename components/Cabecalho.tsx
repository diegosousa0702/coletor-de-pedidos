"use client";

import React, { useEffect, useState } from "react";

/**
 * Componente de Cabeçalho Superior
 * Exibe o nome da marca com estilo itálico e status do sistema
 */
export default function Cabecalho() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const atualizarHora = () => {
      const agora = new Date();
      setHora(agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    };
    atualizarHora();
    const intervalo = setInterval(atualizarHora, 60000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 md:left-24 h-20 bg-background border-b border-zinc-800 flex items-center justify-between px-8 text-white z-50">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-black italic tracking-tighter uppercase">
          <span className="text-primary italic">Coletor</span> de Pedidos
        </h1>
        <div className="h-6 w-px bg-zinc-700 hidden sm:block"></div>
        <span className="text-zinc-400 font-medium hidden sm:block">Monitor de Vendas</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-right hidden md:block">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Status Sistema</div>
          <div className="text-sm font-bold flex items-center justify-end text-green-500">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            ONLINE
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Horário</div>
          <div className="text-xl font-mono text-zinc-100">{hora}</div>
        </div>
      </div>
    </header>
  );
}
