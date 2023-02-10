import { getToken } from "@/lib/localStorage";
export type Page = "profile" | "signin" | "/";

export const click = (p: Page) => {
  const token = getToken();
  const signin = () => {
    if (token) return "/profile";
    return "/signin";
  };
  const profile = () => {
    return "/profile";
  };
  const homeP = () => {
    return "/";
  };

  const pages = {
    profile: profile,
    signin: signin,
    "/": homeP,
  };

  return pages[p]();
};
