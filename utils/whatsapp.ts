/**
 * Módulo de Integração com WhatsApp
 * Gera links para abertura de conversa com mensagem pré-formatada.
 */

interface DadosPedido {
  mesa: string | number;
  pedido: string;
  quantidade: number;
  observacao?: string;
}

/**
 * Constrói a mensagem e retorna o link do WhatsApp
 */
export function gerarLinkWhatsApp(dados: DadosPedido): string {
  const numero = "5598984687854";
  
  const mensagem = `Novo pedido da mesa ${dados.mesa}

Pedido:
${dados.pedido}

Quantidade: ${dados.quantidade}

Observação:
${dados.observacao || "Nenhuma"}`;

  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
