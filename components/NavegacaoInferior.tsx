"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Table, LayoutDashboard, History, Settings, Box } from "lucide-react";

/**
 * Componente de Navegação Dual (Sidebar para Desktop, Barra Inferior para Mobile)
 * Segue o padrão de design sofisticado com ícones em container zinc-900.
 */
export default function NavegacaoDual() {
  const pathname = usePathname();

  const links = [
    { href: "/mesa", icone: Table, texto: "Mesa" },
    { href: "/cozinha", icone: LayoutDashboard, texto: "Cozinha" },
    { href: "/admin", icone: History, texto: "Admin" },
  ];

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-24 bg-sidebar border-r border-zinc-800 flex-col items-center py-8 space-y-10 z-50">
        {/* Logo Icon Container */}
        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          <Box className="text-white" size={28} />
        </div>

        {/* Links de Navegação */}
        <nav className="flex flex-col space-y-6 flex-1 w-full items-center">
          {links.map((link) => {
            const Ativo = pathname === link.href;
            const Icone = link.icone;

            return (
              <Link
                key={link.texto}
                href={link.href}
                className={`group cursor-pointer flex flex-col items-center transition-all ${
                  Ativo ? "text-primary" : "text-zinc-500 hover:text-primary"
                }`}
              >
                <div className={`p-3 rounded-xl transition-all ${Ativo ? "bg-zinc-900" : "group-hover:bg-zinc-900"}`}>
                  <Icone size={24} strokeWidth={Ativo ? 2.5 : 2} />
                </div>
                <span className="text-[10px] font-bold mt-1 uppercase tracking-widest">{link.texto}</span>
              </Link>
            );
          })}
          
          <div className="mt-auto group cursor-pointer flex flex-col items-center text-zinc-500 hover:text-primary transition-colors">
            <div className="p-3 rounded-xl group-hover:bg-zinc-900">
              <Settings size={22} />
            </div>
            <span className="text-[10px] font-bold mt-1 uppercase tracking-widest">Ajustes</span>
          </div>
        </nav>

        {/* Versão Vertical */}
        <div className="text-zinc-600 text-[10px] font-mono uppercase rotate-180 mb-4" style={{ writingMode: "vertical-rl" }}>
          v1.2.04
        </div>
      </aside>

      {/* Navegação Inferior Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-sidebar border-t border-zinc-800 z-50 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center">
          {links.map((link) => {
            const Ativo = pathname === link.href;
            const Icone = link.icone;

            return (
              <Link
                key={link.texto}
                href={link.href}
                className={`flex flex-col items-center gap-1 transition-all ${
                  Ativo ? "text-primary" : "text-zinc-500"
                }`}
              >
                <div className={`p-2 rounded-lg ${Ativo ? "bg-zinc-900" : ""}`}>
                  <Icone size={22} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest">{link.texto}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
