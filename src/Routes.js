import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importação de Páginas
import Home from "./pages/Home/Home";
import Empresa from "./pages/Empresa/Empresa";
import Contato from "./pages/Contato/Contato";
import Produtos from "./pages/Produtos/Produtos";
import IOT from "./pages/IOT/Iot";
import Servicos from "./pages/Servicos/Servicos";
import Locacao from "./pages/Locacao/Locacao";
import Assistencia from "./pages/Assistencia/Assistencia";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/empresa",
      element: <Empresa />,
    },
    {
      path: "/contato",
      element: <Contato />,
    },
    {
      path: "/produtos/inversor",
      element: <Produtos />,
    },
    {
      path: "/produtos/iot",
      element: <IOT />,
    },
    {
      path: "/servicos/montagem-painel",
      element: <Servicos />,
    },
    {
      path: "/servicos/locacao-equipamento",
      element: <Locacao />,
    },
    {
      path: "/servicos/assistencia-tecnica",
      element: <Assistencia />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Routes;
