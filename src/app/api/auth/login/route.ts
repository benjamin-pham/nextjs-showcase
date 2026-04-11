import { NextRequest, NextResponse } from 'next/server'
import { AxiosError } from 'axios'
import { setToken } from '../../_helpers'
import mainApi from '@/api'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const tokens = await mainApi.auth.login(body)
    const res = NextResponse.json(tokens, { status: 200 })
    setToken(res, tokens)
    return res
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return NextResponse.json(error.response.data, { status: error.response.status })
    }
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
