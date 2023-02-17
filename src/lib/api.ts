import { saveToken, getToken } from "./localStorage";
export async function fetchAPI(input: RequestInfo, options: any) {
  const baseUrl = "https://dwf9-d-final.vercel.app/api";
  const url = baseUrl + input;

  const token = getToken();
  const object: any = options || {};
  object.headers ||= {};
  if (token) {
    object.headers.authorization = "bearer " + token;
  }
  object.headers["content-type"] = "application/json";
  if (object.body) {
    object.body = JSON.stringify(object.body);
  }
  const res: any = await fetch(url, object);

  if (res.status >= 200 && res.status <= 300) {
    return res.json();
  } else {
    throw {
      message: "hubo un error",
      status: res.status,
    };
  }
}

export async function obtainToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  if (data.error) {
    return false;
  }
  if (data) {
    saveToken(data.token);
    return true;
  }
}
export async function obtainSomeProducts() {
  const data = await fetchAPI("/search?q=a&offset=0&limit=5", {});
  // saveToken(data);
  return true;
}
export async function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: { email },
  });
}
export function createOrder(id: string) {
  return fetchAPI(`/order?productId=${id}`, {
    method: "POST",
  });
}
export async function updatePerfil(nombre: string, address: string) {
  return fetchAPI("/me", {
    method: "PATCH",
    body: { nombre, address },
  });
}
