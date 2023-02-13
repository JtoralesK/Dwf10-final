export type Page = "profile" | "signin" | "/";

export const click = (p: Page) => {
  const pages = {
    profile: "/profile",
    signin: "/signin",
    "/": "/",
  };

  return pages[p];
};
