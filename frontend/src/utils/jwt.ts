import axios from "./axios";

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const setAccessToken = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("access", accessToken);
  } else {
    localStorage.removeItem("access");
  }
};

const setRefreshToken = (refreshToken: string | null) => {
  if (refreshToken) {
    localStorage.setItem("refresh", refreshToken);
  } else {
    localStorage.removeItem("refresh");
  }
};
export { setSession, setAccessToken, setRefreshToken };
