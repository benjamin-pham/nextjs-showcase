
import { TokenResponse } from "@/types/TokenResponse";
import { AxiosInstance } from "axios";

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (axios: AxiosInstance, data: LoginRequest): Promise<TokenResponse> => {
  const r = await axios.post<TokenResponse>("/api/auth/login", data, {
    headers: { Authorization: undefined },
  });
  return r.data;
};
