import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import DarkModeProvider from "./contexts/DarkMode";
import HomePage from "./pages/HomePage";
import StraightDeal from "./pages/StraightDeal";
import RavineCoffee from "./pages/RavineCoffee";
import MaduraKita from "./pages/MaduraKita";
import Linea from "./pages/Linea";
import Stora from "./pages/Stora";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/straight-deal",
    element: <StraightDeal />,
  },
  {
    path: "/ravine-coffee",
    element: <RavineCoffee />,
  },
  {
    path: "/madura-kita",
    element: <MaduraKita />,
  },
  {
    path: "/linea",
    element: <Linea />,
  },
  {
    path: "/stora",
    element: <Stora />,
  },
]);

const app = (
  <StrictMode>
    <HelmetProvider>
      <ReactLenis root>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </ReactLenis>
    </HelmetProvider>
  </StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
