export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  accessTokenExpiresAt: string | Date;
  refreshTokenExpiresAt: string | Date;
}