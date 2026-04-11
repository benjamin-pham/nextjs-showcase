import { TokenResponse } from '@/types/TokenResponse'
import { NextResponse } from 'next/server'

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const BACKEND_URL = process.env.API_URL

export function clearToken(res: NextResponse) {
  res.cookies.delete('accessToken')
  res.cookies.delete('refreshToken')
}

export function setToken(res: NextResponse, data: TokenResponse) {
  res.cookies.set('accessToken', data.accessToken, {
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: 'lax',
    expires: new Date(data.accessTokenExpiresAt),
    path: '/',
  })
  res.cookies.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: 'lax',
    expires: new Date(data.refreshTokenExpiresAt),
    path: '/',
  })
}
