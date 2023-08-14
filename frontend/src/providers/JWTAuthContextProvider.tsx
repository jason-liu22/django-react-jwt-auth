import { createContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";
import { FULL_PATH } from "routes/paths";

import axiosInstance from "utils/axios";
import { setAccessToken, setRefreshToken, setSession } from "utils/jwt";

type User = {
  access: string;
  refresh: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};

enum AuthActionKind {
  INITIALIZE = "INITIALIZE",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

interface AuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User | null;
}

interface AuthAction {
  type: AuthActionKind;
  payload: Partial<AuthState>;
}
const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  const { type, payload } = action;
  const { user, isAuthenticated } = payload;
  switch (type) {
    case AuthActionKind.INITIALIZE:
      return {
        ...state,
        ...(isAuthenticated !== undefined && { isAuthenticated }),
        isInitialized: true,
        ...(user !== undefined && { user }),
      };
    case AuthActionKind.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        ...(user !== undefined && { user }),
      };
    case AuthActionKind.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case AuthActionKind.REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        ...(user !== undefined && { user }),
      };
    default:
      return state;
  }
}

const JWTAuthContext = createContext({
  ...initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (email: string, password: string) => Promise.resolve(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: (username: string, email: string, password: string) =>
    Promise.resolve(),
  logout: () => Promise.resolve(),
});

function JWTAuthContextProvider({ children }: { children: ReactNode }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const access = window.localStorage.getItem("access");
        if (access) {
          // set authorization header on axios
          setSession(access);
          const response = await axiosInstance.get<User>("/users/me/");
          dispatch({
            type: AuthActionKind.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user: response.data,
            },
          });
        } else {
          dispatch({
            type: AuthActionKind.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: AuthActionKind.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post<User>("/auth/login/", {
        email,
        password,
      });
      setAccessToken(response.data.access);
      setRefreshToken(response.data.refresh);
      setSession(response.data.access);
      dispatch({
        type: AuthActionKind.LOGIN,
        payload: {
          user: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      await axiosInstance.post<User>("/auth/register/", {
        username,
        email,
        password,
      });
      window.location.href = FULL_PATH.login.href;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.get("/api/logout");
      setSession(null);
      dispatch({ type: AuthActionKind.LOGOUT, payload: {} });
    } catch (error) {
      console.error(error);
    }
  };

  // const resetPassword = () => {};

  // const updateProfile = () => {};

  return (
    <JWTAuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </JWTAuthContext.Provider>
  );
}

export { JWTAuthContext, JWTAuthContextProvider };
