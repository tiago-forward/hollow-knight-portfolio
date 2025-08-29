import React from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../root";

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: React.lazy(() => import("../../routes/Projects")),
});
