import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { isAuthenticatedAtom } from "@/store/auth/atoms";

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const [isAuthenticated] = useRecoilState(isAuthenticatedAtom);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  } else {
    return children;
  }
}
