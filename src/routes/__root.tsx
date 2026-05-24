import { createRootRoute, Outlet } from "@tanstack/react-router";
import { StasisPullBadge } from "../components/StasisPullBadge";

const RootLayout = () => (
  <>
    <Outlet />
    <StasisPullBadge />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
