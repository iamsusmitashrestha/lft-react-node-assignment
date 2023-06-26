import { get, post } from "./axios";

export const fetchUser = async () => {
  const { data, ...other } = await get("/users/allUsers");

  // const { data, ...other } = await get("localhost:4004/users/allUsers");

  return data;
};

export const register = async (userData: any) => {
  const data = await post("/register", { body: userData });
  return data;
};

export const login = async (userData: any) => {
  const response = await post("/login", { body: userData });
  const token = response.data.token;
  return token;
};
