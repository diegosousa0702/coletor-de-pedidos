import { Pedido, Estatisticas } from "./tipos";

export const PEDIDOS_MOCK: Pedido[] = [
  {
    id: "#1024",
    mesa: "07",
    itens: "2x Monster BBQ, 1x Batata Frita",
    quantidade: 3,
    status: "preparando",
    valor: 112.00,
    data: "14:20"
  },
  {
    id: "#1023",
    mesa: "02",
    itens: "1x Classic Double, 1x Refrigerante Lata",
    quantidade: 2,
    status: "entregue",
    valor: 48.50,
    data: "14:05"
  },
  {
    id: "#1022",
    mesa: "Delivery",
    itens: "3x Spicy Chicken, 2x Milkshake",
    quantidade: 5,
    status: "pendente",
    valor: 135.00,
    data: "13:58"
  },
  {
    id: "#1021",
    mesa: "08",
    itens: "1x Double Smash Bacon, 1x Batata Rústica",
    quantidade: 2,
    status: "entregue",
    valor: 65.00,
    data: "13:45"
  }
];

export const ESTATISTICAS_MOCK: Estatisticas = {
  pedidosHoje: 42,
  mesaMaisAtiva: "07",
  ticketMedio: 84.50,
  tempoMedioPreparo: 18
};
