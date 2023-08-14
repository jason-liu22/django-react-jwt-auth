import { Outlet, Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { FULL_PATH } from "routes/paths";

function GuestGuard() {
  const { isAuthenticated, user } = useAuth();
  if (isAuthenticated && user)
    return <Navigate to={FULL_PATH.dashboard.href} replace />;
  else return <Outlet />;
}

export default GuestGuard;
