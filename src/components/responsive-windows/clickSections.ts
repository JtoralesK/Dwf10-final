export type Page = "profile" | "signin" | "/" | "salir";

export const click = (p: Page) => {
  const pages = {
    profile: "/profile",
    signin: "/signin",
    salir: "/",
    "/": "/",
  };

  return pages[p];
};
