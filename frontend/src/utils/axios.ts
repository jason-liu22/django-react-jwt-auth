import axios from "axios";
import { FULL_PATH } from "routes/paths";
import { setSession } from "./jwt";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

export const jwtAuthInterceptor = axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (
        error.response.status === 401 &&
        error.response.data === "Unauthorized."
      ) {
        setSession(null);
        window.location.href = FULL_PATH.login.href;
      } else {
        throw error;
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
