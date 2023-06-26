import { get, post } from "./axios";

export const register = async (userData: any) => {
  const data = await post("/register", { body: userData });

  return data;
};
