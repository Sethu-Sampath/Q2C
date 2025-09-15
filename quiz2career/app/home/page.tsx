"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  GraduationCap,
  User,
  Settings,
  LogOut,
  BookOpen,
  Stethoscope,
  Briefcase,
  Palette,
  Shield,
  Code,
  Atom,
  Play,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react"

const courseCategories = [
  {
    id: "engineering",
    title: "Engineering & Technology",
    icon: Code,
    color: "bg-blue-500",
    courses: [
      "Computer Science Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Electronics & Communication",
    ],
    description: "Build the future with technology",
  },
  {
    id: "medical",
    title: "Medical & Healthcare",
    icon: Stethoscope,
    color: "bg-green-500",
    courses: ["MBBS", "BDS", "BAMS", "BHMS", "B.Pharma", "Nursing", "Physiotherapy"],
    description: "Heal and care for others",
  },
  {
    id: "business",
    title: "Business & Management",
    icon: Briefcase,
    color: "bg-orange-500",
    courses: ["BBA", "B.Com", "CA", "CFA", "MBA", "Hotel Management"],
    description: "Lead and manage organizations",
  },
  {
    id: "science",
    title: "Pure Sciences",
    icon: Atom,
    color: "bg-purple-500",
    courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics", "B.Sc Biology", "Data Analytics"],
    description: "Explore the mysteries of nature",
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    icon: Palette,
    color: "bg-pink-500",
    courses: ["BA English", "BA History", "BA Political Science", "Journalism", "Psychology", "Fine Arts"],
    description: "Express creativity and understand society",
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    icon: Shield,
    color: "bg-indigo-500",
    courses: ["BA LLB", "BBA LLB", "LLB", "Legal Studies"],
    description: "Uphold justice and rights",
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleStartQuiz = () => {
    window.location.href = "/quiz"
  }

  const handleCourseSelect = (courseId: string) => {
    setSelectedCategory(selectedCategory === courseId ? null : courseId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Quiz2Career</h1>
                <p className="text-xs text-muted-foreground">Find Your Path</p>
              </div>
            </div>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Student Name</p>
                    <p className="text-xs leading-none text-muted-foreground">student@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Welcome to Your Future</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect college path through our intelligent quiz system and explore courses that match your
            interests and abilities.
          </p>
        </div>

        {/* Quiz CTA Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-secondary border-0 text-primary-foreground shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Play className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Take the Career Quiz</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Answer 30 questions across 6 subjects to get personalized course recommendations based on your strengths
                and interests.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>6 Subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Instant Results</span>
                </div>
              </div>
              <Button
                onClick={handleStartQuiz}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Start Quiz Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Course Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Explore Course Options</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Browse through various career paths and discover what interests you most. Take the quiz for personalized
            recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCategories.map((category) => {
            const IconComponent = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  isSelected ? "border-primary shadow-lg scale-105" : "border-transparent hover:border-border"
                }`}
                onClick={() => handleCourseSelect(category.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription className="text-sm">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {category.courses.slice(0, isSelected ? category.courses.length : 3).map((course, index) => (
                      <div key={index} className="flex items-center justify-between py-1">
                        <span className="text-sm text-foreground">{course}</span>
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      </div>
                    ))}
                    {!isSelected && category.courses.length > 3 && (
                      <div className="text-sm text-muted-foreground pt-2">
                        +{category.courses.length - 3} more courses
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Guided</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Colleges Listed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
