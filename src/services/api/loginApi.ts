import axios from "../request";
import { LoginResponse, LoginRequest } from "../apiTypes/types";

export const login = async (request: LoginRequest) => {
  const response = await axios.post<LoginResponse>(`auth/login/`, request);
  return response.data;
};