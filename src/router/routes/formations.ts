import React from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../root";

export const formationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/formations",
  component: React.lazy(() => import("../../routes/Formations")),
});
