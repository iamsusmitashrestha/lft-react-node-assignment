import { get, post } from "./axios";

export const fetchUser = async () => {
  const { data } = await get("/users/allUsers");

  // const { data, ...other } = await get("localhost:4004/users/allUsers");

  return data;
};

export const register = async (userData: any) => {
  const data = await post("/register", { body: userData });
  return data;
};

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  userId: number;
  name: string;
  token: string;
}

export const login = async (userData: LoginPayload): Promise<LoginResponse> => {
  const response = await post("/login", { body: userData });
  return response.data;
};
