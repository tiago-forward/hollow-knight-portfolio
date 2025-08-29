import React from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../root";

export const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skills",
  component: React.lazy(() => import("../../routes/Skills")),
});
