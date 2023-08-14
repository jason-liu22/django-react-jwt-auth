import axios from "axios";
import { FULL_PATH } from "routes/paths";
import { setAccessToken } from "./jwt";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

export const jwtAuthInterceptor = axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequestConfig = error?.config;
    // refresh token
    if (
      error?.response?.status === 401 &&
      !originalRequestConfig._retry
      // error.response.data.code === "token_not_valid"
    ) {
      originalRequestConfig._retry = true;
      const refreshToken = window.localStorage.getItem("refresh");
      const response = await axiosInstance.post("/token/refresh/", {
        refresh: refreshToken,
      });
      setAccessToken(response?.data?.access);
      originalRequestConfig.headers = {
        ...originalRequestConfig.headers,
        Authorization: `Bearer ${response?.data?.access}`,
      };
      return axiosInstance(originalRequestConfig);
    } else {
      window.location.href = FULL_PATH.login.href;
      throw error;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
