import axiosInstance from "../axiosInstance";
import { login, LoginRequest } from "./login";
import { refreshToken, RefreshTokenRequest } from "./refreshToken";

const authApi = {
  login: (data: LoginRequest) => login(axiosInstance, data),
  refreshToken: (data: RefreshTokenRequest) => refreshToken(axiosInstance, data),
};

export default authApi;
