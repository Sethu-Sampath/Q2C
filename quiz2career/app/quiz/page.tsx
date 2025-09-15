"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  CalculatorIcon,
  AtomIcon,
  TestTubeIcon,
  GlobeIcon,
  BookOpenIcon,
  MonitorIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FlagIcon,
  PlayIcon,
} from "@/components/icons"
import { quizData, calculateScore } from "@/lib/quiz-data"

const iconMap = {
  Calculator: CalculatorIcon,
  Atom: AtomIcon,
  TestTube: TestTubeIcon,
  Globe: GlobeIcon,
  BookOpen: BookOpenIcon,
  Monitor: MonitorIcon,
}

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentSubject = quizData[currentSubjectIndex]
  const currentQuestion = currentSubject?.questions[currentQuestionIndex]
  const totalQuestions = quizData.reduce((sum, subject) => sum + subject.questions.length, 0)
  const answeredQuestions = Object.keys(answers).length
  const progress = (answeredQuestions / totalQuestions) * 100

  // Timer effect
  useEffect(() => {
    if (!quizStarted || quizCompleted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted, quizCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < currentSubject.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (currentSubjectIndex < quizData.length - 1) {
      setCurrentSubjectIndex(currentSubjectIndex + 1)
      setCurrentQuestionIndex(0)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    } else if (currentSubjectIndex > 0) {
      setCurrentSubjectIndex(currentSubjectIndex - 1)
      setCurrentQuestionIndex(quizData[currentSubjectIndex - 1].questions.length - 1)
    }
  }

  const handleSubmitQuiz = () => {
    const scores = calculateScore(answers)
    setQuizCompleted(true)
    // Store results in localStorage for the results page
    localStorage.setItem("quizResults", JSON.stringify({ scores, answers, totalQuestions: answeredQuestions }))
    // Redirect to results page
    setTimeout(() => {
      window.location.href = "/results"
    }, 1000)
  }

  const isLastQuestion =
    currentSubjectIndex === quizData.length - 1 && currentQuestionIndex === currentSubject.questions.length - 1

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <PlayIcon className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl mb-4">Career Assessment Quiz</CardTitle>
            <CardDescription className="text-lg">
              Discover your perfect college path through our comprehensive assessment
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Quiz Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quizData.map((subject) => {
                const IconComponent = iconMap[subject.icon as keyof typeof iconMap]
                return (
                  <div key={subject.id} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${subject.color} rounded-lg mb-2`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm">{subject.name}</h3>
                    <p className="text-xs text-muted-foreground">{subject.questions.length} questions</p>
                  </div>
                )
              })}
            </div>

            {/* Instructions */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FlagIcon className="w-5 h-5 text-primary" />
                Quiz Instructions
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Total Questions: 30 (5 questions per subject)</li>
                <li>• Time Limit: 30 minutes</li>
                <li>• Scoring: +1 for correct, -0.5 for incorrect</li>
                <li>• You can navigate between questions</li>
                <li>• Results will show your strengths and course recommendations</li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpenIcon className="w-4 h-4" />
                <span>30 Questions</span>
              </div>
            </div>

            <Button onClick={handleStartQuiz} size="lg" className="w-full h-14 text-lg font-semibold">
              Start Quiz
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <FlagIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-muted-foreground mb-6">
              Analyzing your responses and generating personalized recommendations...
            </p>
            <div className="animate-pulse">
              <Progress value={100} className="mb-4" />
              <p className="text-sm text-muted-foreground">Redirecting to results...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const IconComponent = iconMap[currentSubject.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 ${currentSubject.color} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold">{currentSubject.name}</h1>
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {currentSubject.questions.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="w-4 h-4" />
                <span className={timeLeft < 300 ? "text-destructive font-semibold" : ""}>{formatTime(timeLeft)}</span>
              </div>
              <Badge variant="secondary">
                {answeredQuestions}/{totalQuestions}
              </Badge>
            </div>
          </div>

          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="text-xs">
                {currentSubject.name}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {currentSubjectIndex + 1}/{quizData.length} subjects
              </span>
            </div>
            <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQuestion.id]?.toString() || ""}
              onValueChange={(value) => handleAnswerSelect(currentQuestion.id, Number.parseInt(value))}
            >
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSubjectIndex === 0 && currentQuestionIndex === 0}
                className="bg-transparent"
              >
                <ChevronLeftIcon className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                Question {answeredQuestions} of {totalQuestions} answered
              </div>

              {isLastQuestion ? (
                <Button onClick={handleSubmitQuiz} className="bg-green-600 hover:bg-green-700">
                  Submit Quiz
                  <FlagIcon className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Next
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
