import { TokenResponse } from "@/types/TokenResponse";
import { AxiosInstance } from "axios";

export interface RefreshTokenRequest {
  refreshToken: string;
}

export const refreshToken = async (axios: AxiosInstance, data: RefreshTokenRequest): Promise<TokenResponse> => {
  const r = await axios.post<TokenResponse>("/api/auth/refresh-token", data, {
    headers: { Authorization: undefined },
  });
  return r.data;
};
