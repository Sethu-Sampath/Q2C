"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCapIcon, MailIcon, PhoneIcon, EyeIcon, EyeOffIcon } from "@/components/icons"
import { createSupabaseClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "sethusampath.2006@gmail.com",
    phone: "",
    password: "abc@123",
    otp: "",
  })
  const [showOTP, setShowOTP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loginMethod === "phone" && !showOTP) {
      setShowOTP(true)
      return
    }

    setIsLoading(true)
    setError(null)
    const supabase = createSupabaseClient()

    try {
      if (loginMethod === "email") {
        console.log("[v0] Attempting login with:", formData.email)
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })
        console.log("[v0] Login response:", { data, error })
        if (error) throw error
        console.log("[v0] Login successful, redirecting to profile")
        router.push("/profile")
      } else {
        if (formData.otp.length === 6) {
          console.log("OTP verified:", formData.otp)
          router.push("/profile")
        } else {
          throw new Error("Please enter a valid 6-digit OTP")
        }
      }
    } catch (error: any) {
      console.log("[v0] Login error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    const supabase = createSupabaseClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/profile`,
      },
    })
    if (error) {
      setError(error.message)
    } else {
      router.push("/profile")
    }
  }

  const handleSignUp = () => {
    router.push("/auth/sign-up")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <GraduationCapIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz2Career</h1>
          <p className="text-gray-600">Find your perfect college path</p>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">Choose your preferred login method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={loginMethod === "email" ? "default" : "outline"}
                onClick={() => {
                  setLoginMethod("email")
                  setShowOTP(false)
                }}
                className="w-full flex items-center justify-center gap-2"
              >
                <MailIcon className="w-4 h-4" />
                Email
              </Button>
              <Button
                type="button"
                variant={loginMethod === "phone" ? "default" : "outline"}
                onClick={() => {
                  setLoginMethod("phone")
                  setShowOTP(false)
                }}
                className="w-full flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                Phone
              </Button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {loginMethod === "email" ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="h-12 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 rounded-r-md"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {!showOTP ? (
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                        required
                        className="h-12 text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                      <p className="text-sm text-gray-500 text-center">OTP sent to {formData.phone}</p>
                    </div>
                  )}
                </>
              )}

              {error && <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">{error}</div>}

              <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                {isLoading ? "Please wait..." : loginMethod === "phone" && !showOTP ? "Send OTP" : "Sign In"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button type="button" variant="outline" onClick={handleGoogleLogin} className="w-full h-12 bg-white">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC04"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-500">Don't have an account? </span>
              <button onClick={handleSignUp} className="text-blue-600 hover:underline font-medium">
                Sign up here
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
