"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BotIcon,
  UserIcon,
  SendIcon,
  MapPinIcon,
  GraduationCapIcon,
  ExternalLinkIcon,
  GlobeIcon,
  AwardIcon,
  CheckCircleIcon,
} from "@/components/icons"
import { getCollegesByStateAndCourse, getAllStates, type College } from "@/lib/college-data"

interface Message {
  id: string
  type: "bot" | "user"
  content: string
  timestamp: Date
  colleges?: College[]
  showStateSelector?: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [selectedState, setSelectedState] = useState("")
  const [chatStep, setChatStep] = useState<"initial" | "state-selection" | "colleges-shown" | "completed">("initial")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const states = getAllStates()

  useEffect(() => {
    // Load selected course from localStorage
    const storedCourse = localStorage.getItem("selectedCourse")
    if (storedCourse) {
      setSelectedCourse(JSON.parse(storedCourse))
    }

    // Initial bot message
    const initialMessage: Message = {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your AI career counselor. I see you've completed the quiz. Would you like me to suggest colleges based on your selected course?",
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addMessage = (type: "bot" | "user", content: string, colleges?: College[], showStateSelector?: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      colleges,
      showStateSelector,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleYesClick = () => {
    addMessage("user", "Yes, please suggest colleges for my selected course.")
    setChatStep("state-selection")

    setTimeout(() => {
      addMessage(
        "bot",
        `Great! I can see you're interested in ${selectedCourse?.name || "your selected course"}. To provide you with the most relevant college recommendations, please select the state where you'd prefer to study:`,
        undefined,
        true,
      )
    }, 1000)
  }

  const handleNoClick = () => {
    addMessage("user", "No, thank you.")
    setChatStep("completed")

    setTimeout(() => {
      addMessage(
        "bot",
        "Thank you for using Quiz2Career! Best wishes for your educational journey. Feel free to come back anytime if you need college recommendations.",
      )
    }, 1000)
  }

  const handleStateSelect = (state: string) => {
    setSelectedState(state)
    addMessage("user", `I'd like to study in ${state}.`)
    setChatStep("colleges-shown")

    setTimeout(() => {
      const colleges = getCollegesByStateAndCourse(state, selectedCourse?.id || "")

      if (colleges.length > 0) {
        addMessage(
          "bot",
          `Excellent choice! I found ${colleges.length} colleges in ${state} that offer ${selectedCourse?.name || "your selected course"}. Here are the top recommendations:`,
          colleges,
        )
      } else {
        addMessage(
          "bot",
          `I couldn't find specific colleges in ${state} for ${selectedCourse?.name || "your selected course"} in my current database. However, I recommend checking with local universities and colleges in ${state} that offer similar programs. You can also explore online resources or contact educational consultants in your area.`,
        )
      }
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addMessage("user", inputValue)
    setInputValue("")

    // Simple bot responses
    setTimeout(() => {
      addMessage(
        "bot",
        "Thank you for your message! For specific queries about admissions, fees, or course details, I recommend contacting the colleges directly using the information provided above.",
      )
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card via-background to-muted">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <BotIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold">AI Career Counselor</h1>
              <p className="text-sm text-muted-foreground">Get personalized college recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Course Info */}
      {selectedCourse && (
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <GraduationCapIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Selected Course: {selectedCourse.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedCourse.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}>
              {message.type === "bot" && (
                <Avatar className="w-8 h-8 bg-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <BotIcon className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-2xl ${message.type === "user" ? "order-first" : ""}`}>
                <Card className={`${message.type === "user" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                  <CardContent className="p-4">
                    <p className="text-sm leading-relaxed">{message.content}</p>

                    {/* Initial Yes/No Buttons */}
                    {message.type === "bot" && chatStep === "initial" && message.id === "1" && (
                      <div className="flex gap-2 mt-4">
                        <Button onClick={handleYesClick} size="sm" variant="secondary">
                          Yes
                        </Button>
                        <Button onClick={handleNoClick} size="sm" variant="outline" className="bg-transparent">
                          No
                        </Button>
                      </div>
                    )}

                    {/* State Selector */}
                    {message.showStateSelector && (
                      <div className="mt-4">
                        <Select onValueChange={handleStateSelect}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your preferred state" />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* College Cards */}
                    {message.colleges && message.colleges.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {message.colleges.map((college) => (
                          <Card key={college.id} className="bg-background border">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <CardTitle className="text-lg text-foreground">{college.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1 mt-1">
                                    <MapPinIcon className="w-3 h-3" />
                                    {college.location}
                                  </CardDescription>
                                </div>
                                <Badge variant={college.type === "Government" ? "default" : "secondary"}>
                                  {college.type}
                                </Badge>
                              </div>
                            </CardHeader>

                            <CardContent className="pt-0 space-y-4">
                              {/* Key Stats */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="text-center p-2 bg-muted/50 rounded">
                                  <div className="font-semibold text-primary">{college.fees.annual}</div>
                                  <div className="text-muted-foreground text-xs">Annual Fees</div>
                                </div>
                                <div className="text-center p-2 bg-muted/50 rounded">
                                  <div className="font-semibold text-primary">{college.placement.average}</div>
                                  <div className="text-muted-foreground text-xs">Avg Package</div>
                                </div>
                                <div className="text-center p-2 bg-muted/50 rounded">
                                  <div className="font-semibold text-primary">{college.placement.percentage}</div>
                                  <div className="text-muted-foreground text-xs">Placement</div>
                                </div>
                                <div className="text-center p-2 bg-muted/50 rounded">
                                  <div className="font-semibold text-primary">{college.established}</div>
                                  <div className="text-muted-foreground text-xs">Established</div>
                                </div>
                              </div>

                              {/* Ranking */}
                              {college.ranking.nirf && (
                                <div className="flex items-center gap-2">
                                  <AwardIcon className="w-4 h-4 text-yellow-500" />
                                  <span className="text-sm">NIRF Ranking: #{college.ranking.nirf}</span>
                                </div>
                              )}

                              {/* Facilities */}
                              <div>
                                <p className="text-sm font-medium mb-2">Facilities:</p>
                                <div className="flex flex-wrap gap-1">
                                  {college.facilities.slice(0, 5).map((facility, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {facility}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Approvals */}
                              <div>
                                <p className="text-sm font-medium mb-2">Approvals:</p>
                                <div className="flex flex-wrap gap-1">
                                  {college.approvals.map((approval, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      <CheckCircleIcon className="w-3 h-3 mr-1" />
                                      {approval}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Website Link */}
                              {college.website && (
                                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                                  <a href={college.website} target="_blank" rel="noopener noreferrer">
                                    <GlobeIcon className="w-4 h-4 mr-2" />
                                    Visit Website
                                    <ExternalLinkIcon className="w-3 h-3 ml-2" />
                                  </a>
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground mt-2">{formatTime(message.timestamp)}</div>
                  </CardContent>
                </Card>
              </div>

              {message.type === "user" && (
                <Avatar className="w-8 h-8 bg-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    <UserIcon className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {chatStep !== "completed" && (
        <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                <SendIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
