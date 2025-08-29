import { createRoot } from "react-dom/client";
import "./styles.css";
import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
