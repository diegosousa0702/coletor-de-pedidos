import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "@/components/Cabecalho";
import NavegacaoInferior from "@/components/NavegacaoInferior";
import PaginaMesa from "@/app/mesa/page";
import PaginaCozinha from "@/app/cozinha/page";
import PaginaAdmin from "@/app/admin/page";
import "@/app/globals.css";

/**
 * Ponto de entrada da aplicação para o ambiente de preview (Vite).
 * Configura as rotas e o layout global baseado na estrutura Next.js solicitada.
 */
export default function App() {
  return (
    <Router>
      <div className="bg-background text-zinc-100 min-h-screen">
        {/* Componentes Globais */}
        <Cabecalho />
        
        {/* Container Principal */}
        <main className="pt-24 px-4 pb-32 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/mesa" replace />} />
            <Route path="/mesa" element={<PaginaMesa />} />
            <Route path="/cozinha" element={<PaginaCozinha />} />
            <Route path="/admin" element={<PaginaAdmin />} />
          </Routes>
        </main>

        <NavegacaoInferior />
      </div>
    </Router>
  );
}
