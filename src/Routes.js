import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Routes;
