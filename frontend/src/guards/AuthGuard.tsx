import useAuth from "hooks/useAuth";
import LoginPage from "pages/LoginPage";
import { Outlet } from "react-router-dom";

function AuthGuard() {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated || !user) return <LoginPage />;
  return <Outlet />;
}

export default AuthGuard;
