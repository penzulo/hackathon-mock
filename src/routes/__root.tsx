import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Topbar } from '../components/layout/Topbar';
import { fonts, globalCss } from '../lib/theme';

// Import devtools only in development
const TanStackRouterDevtools =
  import.meta.env.PROD
    ? () => null
    : (await import('@tanstack/router-devtools')).TanStackRouterDevtools;

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      {/* Global styles injected once at the root — same approach as original App.tsx */}
      <style>{fonts}</style>
      <style>{globalCss}</style>

      <Topbar />
      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}
