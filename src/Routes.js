import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importação de Páginas
import Home from "./pages/Home/Home";
import Empresa from "./pages/Empresa/Empresa";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/empresa",
      element: <Empresa/>
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Routes;
