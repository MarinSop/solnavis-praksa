import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/index.ts";
import "virtual:uno.css";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
