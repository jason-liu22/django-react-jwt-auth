function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const PATH_HOME = "";
export const PATH_DASHBOARD = "dashboard";
export const PATH_LOGIN = "signin";
export const PATH_REGISTER = "signup";

export const PATH_ROOT = "/";
export const PATH_AUTH = "/auth/";

export const FULL_PATH = {
  home: { label: "Home", href: path(PATH_ROOT, PATH_HOME) },
  dashboard: { label: "Dashboard", href: path(PATH_ROOT, PATH_DASHBOARD) },
  login: { label: "Signin", href: path(PATH_AUTH, PATH_LOGIN) },
  register: { label: "Signup", href: path(PATH_AUTH, PATH_REGISTER) },
};
