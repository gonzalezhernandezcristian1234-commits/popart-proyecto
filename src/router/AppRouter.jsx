
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

import Inicio from "../pages/Inicio";
import Entradas from "../pages/Entradas";
import Club from "../pages/Club";
import Lineup from "../pages/Lineup";
import Mapa from "../pages/Mapa";
import Galeria from "../pages/Galeria";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      {
        path: "entradas",
        element: <Entradas />
      },
      {
        path: "club",
        element: <Club />
      },
      {
        path: "lineup",
        element: <Lineup />
      },
      {
        path: "mapa",
        element: <Mapa />
      },
      {
        path: "galeria",
        element: <Galeria />
      },
    ],
  },
]);

export default router;
