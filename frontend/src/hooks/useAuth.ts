import { useContext } from "react";
import {
  AuthContextType,
  JWTAuthContext,
} from "providers/JWTAuthContextProvider";

const useAuth = () => useContext(JWTAuthContext) as AuthContextType;

export default useAuth;
