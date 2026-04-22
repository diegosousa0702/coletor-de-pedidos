/**
 * Utilitário para integração com WhatsApp
 * Formata as mensagens e gera os links para disparo
 */

export const formatarMensagemWhatsApp = (mesa: string, pedido: string, quantidade: number, observacao: string) => {
  const base = `🍔 *NOVO PEDIDO - BURGER COLLECTOR* 🍔\n\n`;
  const corpo = `*Mesa:* ${mesa}\n*Pedido:* ${pedido}\n*Qtd:* ${quantidade}\n*Obs:* ${observacao || 'Nenhuma'}`;
  const rodapé = `\n\n_Enviado via Coletor de Pedidos Digital_`;

  return encodeURIComponent(base + corpo + rodapé);
};

export const abrirWhatsApp = (telefone: string, mensagem: string) => {
  const url = `https://wa.me/${telefone}?text=${mensagem}`;
  window.open(url, '_blank');
};
