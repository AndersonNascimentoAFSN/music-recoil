import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";

const LoginPage = lazy(() =>
  import("@/pages/Login").then(({ Login }) => ({ default: Login }))
);

const HomePage = lazy(() =>
  import("@/pages/Home").then(({ Home }) => ({ default: Home }))
);

import { PrivateRoute } from "@/components/PrivateRoute";

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
  {
    path: "/home",
    element: (
      <Suspense
        fallback={
          <div>
            <span>Loading...</span>
          </div>
        }
      >
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);

export const Routes = () => <RouterProvider router={router} />;
