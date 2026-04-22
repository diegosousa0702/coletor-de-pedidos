export interface Pedido {
  id: string;
  mesa: string;
  itens: string;
  quantidade: number;
  observacao?: string;
  status: 'pendente' | 'preparando' | 'entregue' | 'cancelado';
  valor: number;
  data: string;
}

export interface Estatisticas {
  pedidosHoje: number;
  mesaMaisAtiva: string;
  ticketMedio: number;
  tempoMedioPreparo: number;
}
