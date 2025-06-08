import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/react";

import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <SpeedInsights />
        <Analytics />
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
