/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Cabecalho from "@/components/Cabecalho";
import NavegacaoDual from "@/components/NavegacaoInferior";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Coletor de Pedidos | Burger Collector",
  description: "Gerenciamento profissional de pedidos para hamburguerias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-zinc-100 min-h-screen">
        {/* Navegação Lateral (Desktop) / Inferior (Mobile) */}
        <NavegacaoDual />
        
        {/* Container Principal com Offset da Sidebar no Desktop */}
        <div className="md:pl-24 flex flex-col min-h-screen">
          <Cabecalho />
          
          <main className="flex-1 pt-20 px-4 md:px-8 max-w-[1400px] w-full mx-auto pb-24 md:pb-8">
            {children}
          </main>
          
          {/* Footer Informativo Estilo Design Sophisticated */}
          <footer className="hidden md:flex h-14 bg-zinc-950 border-t border-zinc-900 px-8 items-center justify-between text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            <div>Total de Pedidos Pendentes: 07</div>
            <div>Carga de Trabalho: Moderada (42%)</div>
            <div>Terminal: COZINHA_01_PROD</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
