"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, BookOpen, Camera } from "lucide-react"
import { createSupabaseClient } from "@/lib/supabase/client"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    state: "",
    city: "",
    school_name: "",
    board: "",
    stream: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/")
        return
      }

      setUser(user)
      setProfile((prev) => ({ ...prev, email: user.email || "" }))

      // Try to load existing profile
      const { data: existingProfile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

      if (existingProfile) {
        setProfile({
          full_name: existingProfile.full_name || "",
          email: existingProfile.email || user.email || "",
          phone: existingProfile.phone || "",
          date_of_birth: existingProfile.date_of_birth || "",
          gender: existingProfile.gender || "",
          state: existingProfile.state || "",
          city: existingProfile.city || "",
          school_name: existingProfile.school_name || "",
          board: existingProfile.board || "",
          stream: existingProfile.stream || "",
        })
      }
    }

    checkUser()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsLoading(true)
    const supabase = createSupabaseClient()

    try {
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        ...profile,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error
      router.push("/home")
    } catch (error) {
      console.error("Error saving profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handleLogout = async () => {
    const supabase = createSupabaseClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-3xl font-bold text-foreground">Complete Your Profile</h1>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <p className="text-muted-foreground">Help us personalize your college recommendations</p>
        </div>

        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="relative mx-auto mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>This information will help us provide better recommendations</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input
                    id="full_name"
                    placeholder="Enter your full name"
                    value={profile.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={profile.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12"
                    disabled
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={profile.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date_of_birth">Date of Birth</Label>
                  <Input
                    id="date_of_birth"
                    type="date"
                    value={profile.date_of_birth}
                    onChange={(e) => handleInputChange("date_of_birth", e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select onValueChange={(value) => handleInputChange("gender", value)} value={profile.gender}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    placeholder="Your state"
                    value={profile.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Your city"
                  value={profile.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Educational Background */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Educational Background</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school_name">School Name *</Label>
                    <Input
                      id="school_name"
                      placeholder="Your school name"
                      value={profile.school_name}
                      onChange={(e) => handleInputChange("school_name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="board">Board *</Label>
                    <Select onValueChange={(value) => handleInputChange("board", value)} value={profile.board}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="state">State Board</SelectItem>
                        <SelectItem value="ib">IB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stream">Stream *</Label>
                  <Select onValueChange={(value) => handleInputChange("stream", value)} value={profile.stream}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="science-pcm">Science (PCM)</SelectItem>
                      <SelectItem value="science-pcb">Science (PCB)</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts/Humanities</SelectItem>
                      <SelectItem value="vocational">Vocational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Profile Completion Status */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Profile Completion</span>
                  <Badge variant="secondary">{Object.values(profile).filter(Boolean).length}/10 Complete</Badge>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(Object.values(profile).filter(Boolean).length / 10) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 bg-transparent"
                  onClick={() => router.push("/")}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12"
                  disabled={Object.values(profile).filter(Boolean).length < 7 || isLoading}
                >
                  {isLoading ? "Saving..." : "Continue to Home"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
