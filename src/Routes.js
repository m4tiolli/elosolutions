import { HashRouter, Route, Routes } from "react-router-dom";
// Importações das páginas
import Home from "./pages/Home/Home";
import Empresa from "./pages/Empresa/Empresa";
import Contato from "./pages/Contato/Contato";
import Produtos from "./pages/Produtos/Produtos";
import IOT from "./pages/IOT/Iot";
import Servicos from "./pages/Servicos/Servicos";
import Locacao from "./pages/Locacao/Locacao";
import Assistencia from "./pages/Assistencia/Assistencia";

function Routess() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/produtos/inversor" element={<Produtos />} />
        <Route exact path="/produtos/iot" element={<IOT />} />
        <Route exact path="/servicos/montagem-painel" element={<Servicos />} />
        <Route
          exact
          path="/servicos/locacao-equipamento"
          element={<Locacao />}
        />
        <Route
          exact
          path="/servicos/assistencia-tecnica"
          element={Assistencia}
        />
      </Routes>
    </HashRouter>
  );
}

export default Routess;
