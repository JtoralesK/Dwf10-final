import { saveToken, getToken } from "./localStorage";
export async function fetchAPI(input: RequestInfo, options: any) {
  console.log(options);

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
  //console.log(object);

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
export function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: { email },
  });
}
export async function obtainToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  saveToken(data.token);
  return true;
}
export async function obtainSomeProducts() {
  const data = await fetchAPI("/search?q=a&offset=0&limit=5", {});
  // saveToken(data);
  return true;
}
