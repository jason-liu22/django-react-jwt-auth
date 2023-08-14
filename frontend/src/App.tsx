import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { JWTAuthContextProvider } from "providers/JWTAuthContextProvider";
import router from "./routes";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <JWTAuthContextProvider>
        <RouterProvider router={router} />
      </JWTAuthContextProvider>
    </ReduxProvider>
  );
}
