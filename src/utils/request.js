// import { getCookie } from "../helpers/cookie";

const API_DOMAIN = "https://database-pj5.vercel.app/";
// const token = getCookie("token");

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Bearer <TOKEN>",
    },
    body: JSON.stringify(options),
  });
  const result = response.json();
  return result;
};

export const del = async (path, id) => {
  const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const edit = async (path, id, options) => {
  const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};
