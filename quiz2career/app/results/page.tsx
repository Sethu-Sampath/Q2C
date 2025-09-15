"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  TrophyIcon,
  TargetIcon,
  TrendingUpIcon,
  BookOpenIcon,
  GraduationCapIcon,
  StarIcon,
  ChevronRightIcon,
  DownloadIcon,
  Share2Icon,
  MessageCircleIcon,
  CodeIcon,
  BrainIcon,
  CogIcon,
  ZapIcon,
  BarChartIcon,
  CalculatorIcon,
  BriefcaseIcon,
  UsersIcon,
  NewspaperIcon,
  ScaleIcon,
  BuildingIcon,
} from "@/components/icons"
import { generateRecommendations, getTopSubjects, type CourseRecommendation } from "@/lib/recommendation-engine"

const iconMap = {
  Code: CodeIcon,
  Brain: BrainIcon,
  Cog: CogIcon,
  Zap: ZapIcon,
  BarChart: BarChartIcon,
  Calculator: CalculatorIcon,
  Briefcase: BriefcaseIcon,
  Users: UsersIcon,
  Newspaper: NewspaperIcon,
  Scale: ScaleIcon,
  Building: BuildingIcon,
}

export default function ResultsPage() {
  const [results, setResults] = useState<any>(null)
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([])
  const [topSubjects, setTopSubjects] = useState<any[]>([])
  const [selectedCourse, setSelectedCourse] = useState<CourseRecommendation | null>(null)

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults")
    if (storedResults) {
      const parsedResults = JSON.parse(storedResults)
      setResults(parsedResults)

      const courseRecommendations = generateRecommendations(parsedResults.scores)
      setRecommendations(courseRecommendations)

      const subjects = getTopSubjects(parsedResults.scores)
      setTopSubjects(subjects)
    }
  }, [])

  const handleCourseSelect = (course: CourseRecommendation) => {
    setSelectedCourse(course)
    // Store selected course for AI chat
    localStorage.setItem("selectedCourse", JSON.stringify(course))
    window.location.href = "/chat"
  }

  const calculateOverallScore = () => {
    if (!results) return 0
    const totalScore = Object.values(results.scores).reduce((sum: number, score: any) => sum + score.score, 0)
    const maxPossibleScore = Object.values(results.scores).reduce((sum: number, score: any) => sum + score.total, 0)
    return Math.round((totalScore / maxPossibleScore) * 100)
  }

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    )
  }

  const overallScore = calculateOverallScore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <TrophyIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Results</h1>
            <p className="text-muted-foreground">Your personalized career recommendations are ready!</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Overall Performance */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <TargetIcon className="w-6 h-6 text-primary" />
              Overall Performance
            </CardTitle>
            <CardDescription>Your comprehensive assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{overallScore}%</div>
                <div className="text-muted-foreground">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{results.totalQuestions}</div>
                <div className="text-muted-foreground">Questions Answered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {Object.values(results.scores).reduce((sum: number, score: any) => sum + score.correct, 0)}
                </div>
                <div className="text-muted-foreground">Correct Answers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Performance */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5 text-primary" />
              Subject-wise Performance
            </CardTitle>
            <CardDescription>Your strengths across different subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSubjects.map((subject, index) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                          index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-orange-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="font-medium">{subject.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{subject.percentage}%</span>
                      {subject.percentage >= 80 && <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />}
                    </div>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Course Recommendations */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCapIcon className="w-5 h-5 text-primary" />
              Recommended Courses
            </CardTitle>
            <CardDescription>Based on your quiz performance and subject strengths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.slice(0, 6).map((course) => {
                const IconComponent = iconMap[course.icon as keyof typeof iconMap] || BookOpenIcon
                return (
                  <Card
                    key={course.id}
                    className="cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105 border-2 hover:border-primary/50"
                    onClick={() => handleCourseSelect(course)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg leading-tight">{course.name}</CardTitle>
                            <CardDescription className="text-sm">{course.category}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {course.matchPercentage}% match
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg. Salary:</span>
                          <span className="font-medium">{course.averageSalary}</span>
                        </div>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex flex-wrap gap-1">
                        {course.careerPaths.slice(0, 2).map((path, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {path}
                          </Badge>
                        ))}
                        {course.careerPaths.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.careerPaths.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <MessageCircleIcon className="w-5 h-5 mr-2" />
            Get College Recommendations
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent">
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download Results
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent">
            <Share2Icon className="w-5 h-5 mr-2" />
            Share Results
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready for the Next Step?</h3>
            <p className="text-muted-foreground mb-6">
              Select a course above to get personalized college recommendations based on your location preferences.
            </p>
            <Button
              size="lg"
              onClick={() => (window.location.href = "/chat")}
              className="bg-primary hover:bg-primary/90"
            >
              Start College Search
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
