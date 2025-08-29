import React from "react";
import { createRoute } from "@tanstack/react-router";
import rootRoute from "../root";

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: React.lazy(() => import("../../routes/Profile")),
});
