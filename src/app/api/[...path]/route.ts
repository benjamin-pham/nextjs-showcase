import { NextRequest, NextResponse } from 'next/server'
import axios, { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { BACKEND_URL, clearToken, setToken } from '../_helpers'
import mainApi from '@/api'
import { TokenResponse } from '@/types/TokenResponse'

type RouteContext = { params: Promise<{ path: string[] }> }

async function makeBackendRequest(
  method: string,
  endpoint: string,
  body: unknown,
  searchParams: URLSearchParams,
  accessToken: string | undefined,
) {
  return axios.request({
    baseURL: BACKEND_URL,
    method,
    url: endpoint,
    data: body,
    params: searchParams.size > 0 ? Object.fromEntries(searchParams) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  })
}

async function handler(req: NextRequest, { params }: RouteContext) {
  try {
    const { path } = await params
    const endpoint = '/api/' + path.join('/')
    const { searchParams } = new URL(req.url)

    let body: unknown
    if (!['GET', 'HEAD'].includes(req.method.toUpperCase())) {
      const text = await req.text()
      body = text ? JSON.parse(text) : undefined
    }

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    let backendResponse
    let newTokens: TokenResponse | undefined

    try {
      backendResponse = await makeBackendRequest(req.method, endpoint, body, searchParams, accessToken)
    } catch (error) {
      if (!(error instanceof AxiosError) || error.response?.status !== 401) throw error
      const refreshToken = cookieStore.get('refreshToken')?.value
      if (!refreshToken) {
        const resClearToken = NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        clearToken(resClearToken)
        return resClearToken
      }

      // accessToken hết hạn — thử refresh
      try {
        newTokens = await mainApi.auth.refreshToken({ refreshToken })
      } catch {
        const resClearToken = NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        clearToken(resClearToken)
        return resClearToken
      }

      backendResponse = await makeBackendRequest(req.method, endpoint, body, searchParams, newTokens.accessToken)
    }

    const hasBody = backendResponse.data !== undefined && backendResponse.data !== '' && backendResponse.data !== null
    const res = hasBody
      ? NextResponse.json(backendResponse.data, { status: backendResponse.status })
      : new NextResponse(null, { status: backendResponse.status })

    if (newTokens) {
      setToken(res, newTokens)
    }

    return res
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return NextResponse.json(error.response.data, { status: error.response.status })
    }
    console.error('Proxy error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
