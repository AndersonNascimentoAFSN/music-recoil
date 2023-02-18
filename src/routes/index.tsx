import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";

const LoginPage = lazy(() =>
  import("@/pages/Login").then(({ Login }) => ({ default: Login }))
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
        <LoginPage />
      </Suspense>
    ),
  },
]);

export const Routes = () => <RouterProvider router={router} />;
