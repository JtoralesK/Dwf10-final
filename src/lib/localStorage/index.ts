export function getMeLocalStorage() {
  const data = localStorage.getItem("me");
  return data;
}
export function deleteMeLocalStorage() {
  const data = localStorage.removeItem("me");
}
export function getToken() {
  let data: any = getMeLocalStorage();
  if (data) {
    data = JSON.parse(data);
    const token = data.token;
    return data.token;
  }
  return null;
}
export function saveToken(data: any) {
  const me = getMeLocalStorage();
  let object: any = {};
  if (me) object = JSON.parse(me);
  object.token = data;
  localStorage.setItem("me", JSON.stringify(object));
}
export function setPageLocalStorage(page: string) {
  const me = getMeLocalStorage();
  let object: any = {};
  if (me) object = JSON.parse(me);
  object.page = page;
  localStorage.setItem("me", JSON.stringify(object));
}
