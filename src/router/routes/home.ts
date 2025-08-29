import React from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../root";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: React.lazy(() => import("../../routes/Home")),
});
