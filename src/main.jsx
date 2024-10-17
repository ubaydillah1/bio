import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import "./index.css";
import HomePage from "./pages/homePage";
import DarkModeProvider from "./contexts/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
