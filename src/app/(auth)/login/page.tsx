"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Spinner } from "@/components/atoms/spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card"
import { FormField } from "@/components/molecules/form/form-field"
import axios, { isAxiosError } from "axios"
const loginSchema = z.object({
  username: z.string().min(1, "Tên đăng nhập không được để trống"),
  password: z.string().min(1, "Mật khẩu không được để trống"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  })

  async function onSubmit(values: LoginFormValues) {
    setIsLoading(true)
    try {
      await axios.post("/api/auth/login", values)
      startTransition(() => {
        router.push("/")
      })
    } catch (err) {
      const data = isAxiosError(err) ? err.response?.data : undefined
      toast.error(data?.detail ?? data?.message ?? "Đăng nhập thất bại")
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Đăng nhập</CardTitle>
        <CardDescription>Nhập thông tin tài khoản để tiếp tục</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit(onSubmit)(e)
          }}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            label="Tên đăng nhập"
            required
            render={({ field, inputProps }) => (
              <Input
                {...field}
                {...inputProps}
                type="text"
                placeholder="username"
                autoComplete="username"
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            label="Mật khẩu"
            required
            render={({ field, inputProps }) => (
              <Input
                {...field}
                {...inputProps}
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            )}
          />
          <Button type="submit" className="w-full mt-2" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner className="mr-2" />
                Đang đăng nhập...
              </>
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
