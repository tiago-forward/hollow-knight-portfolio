import { createRouter } from "@tanstack/react-router";
import rootRoute from "./root";
import { homeRoute } from "./routes/home";
import { profileRoute } from "./routes/profile";
import { skillsRoute } from "./routes/skills";
import { formationsRoute } from "./routes/formations";
import { projectsRoute } from "./routes/projects";

const routeTree = rootRoute.addChildren([
  homeRoute,
  profileRoute,
  skillsRoute,
  formationsRoute,
  projectsRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
