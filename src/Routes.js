import {
  HashRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"; // Importe o HashRouter
// Remova a importação do RouterProvider e createBrowserRouter

// Importações das páginas
import Home from "./pages/Home/Home";
import Empresa from "./pages/Empresa/Empresa";
import Contato from "./pages/Contato/Contato";
import Produtos from "./pages/Produtos/Produtos";
import IOT from "./pages/IOT/Iot";
import Servicos from "./pages/Servicos/Servicos";
import Locacao from "./pages/Locacao/Locacao";
import Assistencia from "./pages/Assistencia/Assistencia";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="empresa" element={<Empresa />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produtos/inversor" element={<Produtos />} />
      <Route path="produtos/iot" element={<IOT />} />
      <Route path="servicos/montagem-painel" element={<Servicos />} />
      <Route path="servicos/locacao-equipamento" element={<Locacao />} />
      <Route path="servicos/assistencia-tecnica" element={<Assistencia />} />
    </Route>
  )
);
function Routess() {
  return <RouterProvider router={router} />;
}

export default Routess;
