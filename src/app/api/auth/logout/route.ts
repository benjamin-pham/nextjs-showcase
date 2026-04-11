import { NextResponse } from 'next/server'
import { clearToken } from '../../_helpers'

export async function POST() {
  const res = NextResponse.json(null, { status: 200 })
  clearToken(res)
  return res
}
