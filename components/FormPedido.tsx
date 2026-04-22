"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { gerarLinkWhatsApp } from "@/utils/whatsapp";

/**
 * Componente de Formulário de Pedido
 * Gerencia o estado local e dispara o link para o WhatsApp
 */
export default function FormPedido() {
  const [mesa, setMesa] = useState("");
  const [pedido, setPedido] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [observacao, setObservacao] = useState("");

  const enviarPedido = (e: React.FormEvent) => {
    e.preventDefault();

    if (!mesa || !pedido) {
      alert("Por favor, preencha o número da mesa e o resumo do pedido.");
      return;
    }

    const link = gerarLinkWhatsApp({
      mesa,
      pedido,
      quantidade,
      observacao,
    });

    // Abre o WhatsApp em uma nova aba
    window.open(link, "_blank");
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-md shadow-2xl space-y-6">
      <form onSubmit={enviarPedido} className="space-y-6">
        
        {/* Número da Mesa */}
        <div className="space-y-2">
          <label htmlFor="mesa" className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">
            Número da Mesa
          </label>
          <input
            id="mesa"
            type="number"
            placeholder="Ex: 05"
            required
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}
            className="input-field text-2xl font-bold font-headline"
          />
        </div>

        {/* Detalhes do Pedido */}
        <div className="space-y-2">
          <label htmlFor="pedido" className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">
            Pedido
          </label>
          <textarea
            id="pedido"
            placeholder="Ex: 2 X-Salada, 1 Batata M, 1 Coca-Cola"
            required
            rows={3}
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            className="input-field resize-none font-medium"
          />
        </div>

        {/* Quantidade */}
        <div className="space-y-2">
          <label htmlFor="quantidade" className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">
            Quantidade
          </label>
          <input
            id="quantidade"
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
            className="input-field text-xl font-bold font-headline"
          />
        </div>

        {/* Observações Opcionais */}
        <div className="space-y-2">
          <label htmlFor="observacao" className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">
            Observação (Opcional)
          </label>
          <textarea
            id="observacao"
            placeholder="Ex: Sem cebola, ponto da carne mal passado..."
            rows={2}
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            className="input-field resize-none text-sm"
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="btn-primary w-full py-4 text-sm tracking-widest font-black bg-red-600 hover:bg-red-700 text-white border-none rounded-xl"
        >
          ENVIAR PEDIDO
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
