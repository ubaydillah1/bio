import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import "./index.css";
import DarkModeProvider from "./contexts/DarkMode";
import HomePage from "./pages/HomePage";
import StraightDeal from "./pages/StraightDeal";
import RavineCoffee from "./pages/RavineCoffee";
import MaduraKita from "./pages/MaduraKita";
import Linea from "./pages/Linea";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </ReactLenis>
  </StrictMode>
);
