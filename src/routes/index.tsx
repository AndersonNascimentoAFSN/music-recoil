import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";

const HomeComponent = lazy(() =>
  import("@/pages/Home").then(({ Home }) => ({ default: Home }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div>
            <span>Loading...</span>
          </div>
        }
      >
        <HomeComponent />
      </Suspense>
    ),
  },
]);

export const Routes = () => <RouterProvider router={router} />;
