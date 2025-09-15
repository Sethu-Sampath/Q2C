export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  subject: string
}

export interface Subject {
  id: string
  name: string
  icon: string
  color: string
  questions: Question[]
}

export const quizData: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "Calculator",
    color: "bg-blue-500",
    questions: [
      {
        id: "math1",
        question: "What is the derivative of x²?",
        options: ["2x", "x", "2", "x²"],
        correctAnswer: 0,
        subject: "mathematics",
      },
      {
        id: "math2",
        question: "If log₁₀(x) = 2, what is the value of x?",
        options: ["10", "100", "20", "200"],
        correctAnswer: 1,
        subject: "mathematics",
      },
      {
        id: "math3",
        question: "What is the value of sin(90°)?",
        options: ["0", "1", "-1", "1/2"],
        correctAnswer: 1,
        subject: "mathematics",
      },
      {
        id: "math4",
        question: "The sum of interior angles of a triangle is:",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        subject: "mathematics",
      },
      {
        id: "math5",
        question: "What is the quadratic formula?",
        options: [
          "x = -b ± √(b²-4ac) / 2a",
          "x = b ± √(b²+4ac) / 2a",
          "x = -b ± √(b²+4ac) / 2a",
          "x = b ± √(b²-4ac) / 2a",
        ],
        correctAnswer: 0,
        subject: "mathematics",
      },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    icon: "Atom",
    color: "bg-purple-500",
    questions: [
      {
        id: "phy1",
        question: "What is the unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correctAnswer: 1,
        subject: "physics",
      },
      {
        id: "phy2",
        question: "The speed of light in vacuum is approximately:",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
        correctAnswer: 0,
        subject: "physics",
      },
      {
        id: "phy3",
        question: "Which law states that energy cannot be created or destroyed?",
        options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"],
        correctAnswer: 1,
        subject: "physics",
      },
      {
        id: "phy4",
        question: "What is the formula for kinetic energy?",
        options: ["mgh", "½mv²", "mv", "ma"],
        correctAnswer: 1,
        subject: "physics",
      },
      {
        id: "phy5",
        question: "The SI unit of electric current is:",
        options: ["Volt", "Ohm", "Ampere", "Coulomb"],
        correctAnswer: 2,
        subject: "physics",
      },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "TestTube",
    color: "bg-green-500",
    questions: [
      {
        id: "chem1",
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        subject: "chemistry",
      },
      {
        id: "chem2",
        question: "The pH of pure water is:",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1,
        subject: "chemistry",
      },
      {
        id: "chem3",
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        subject: "chemistry",
      },
      {
        id: "chem4",
        question: "The molecular formula of water is:",
        options: ["H₂O", "HO₂", "H₂O₂", "H₃O"],
        correctAnswer: 0,
        subject: "chemistry",
      },
      {
        id: "chem5",
        question: "Which element has the atomic number 6?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Boron"],
        correctAnswer: 1,
        subject: "chemistry",
      },
    ],
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    icon: "Globe",
    color: "bg-orange-500",
    questions: [
      {
        id: "gk1",
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
        correctAnswer: 1,
        subject: "general-knowledge",
      },
      {
        id: "gk2",
        question: "Which is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Earth"],
        correctAnswer: 1,
        subject: "general-knowledge",
      },
      {
        id: "gk3",
        question: "The capital of Australia is:",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        subject: "general-knowledge",
      },
      {
        id: "gk4",
        question: "Which year did India gain independence?",
        options: ["1945", "1947", "1948", "1950"],
        correctAnswer: 1,
        subject: "general-knowledge",
      },
      {
        id: "gk5",
        question: "The longest river in the world is:",
        options: ["Amazon", "Nile", "Ganges", "Mississippi"],
        correctAnswer: 1,
        subject: "general-knowledge",
      },
    ],
  },
  {
    id: "english",
    name: "English",
    icon: "BookOpen",
    color: "bg-red-500",
    questions: [
      {
        id: "eng1",
        question: "Which of the following is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctAnswer: 1,
        subject: "english",
      },
      {
        id: "eng2",
        question: "What is the past tense of 'go'?",
        options: ["Gone", "Going", "Went", "Goes"],
        correctAnswer: 2,
        subject: "english",
      },
      {
        id: "eng3",
        question: "Which sentence is grammatically correct?",
        options: ["She don't like apples", "She doesn't like apples", "She not like apples", "She no like apples"],
        correctAnswer: 1,
        subject: "english",
      },
      {
        id: "eng4",
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childes", "Child"],
        correctAnswer: 1,
        subject: "english",
      },
      {
        id: "eng5",
        question: "Which word is an antonym of 'difficult'?",
        options: ["Hard", "Easy", "Complex", "Tough"],
        correctAnswer: 1,
        subject: "english",
      },
    ],
  },
  {
    id: "computer",
    name: "Computer",
    icon: "Monitor",
    color: "bg-indigo-500",
    questions: [
      {
        id: "comp1",
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Personal Unit",
          "Computer Processing Unit",
        ],
        correctAnswer: 0,
        subject: "computer",
      },
      {
        id: "comp2",
        question: "Which of the following is a programming language?",
        options: ["HTML", "Python", "CSS", "All of the above"],
        correctAnswer: 3,
        subject: "computer",
      },
      {
        id: "comp3",
        question: "What is the binary equivalent of decimal 10?",
        options: ["1010", "1100", "1001", "1110"],
        correctAnswer: 0,
        subject: "computer",
      },
      {
        id: "comp4",
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctAnswer: 2,
        subject: "computer",
      },
      {
        id: "comp5",
        question: "What does RAM stand for?",
        options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Real Access Memory"],
        correctAnswer: 1,
        subject: "computer",
      },
    ],
  },
]

export const calculateScore = (
  answers: Record<string, number>,
): Record<string, { correct: number; total: number; percentage: number; score: number }> => {
  const subjectScores: Record<string, { correct: number; total: number; percentage: number; score: number }> = {}

  quizData.forEach((subject) => {
    let correct = 0
    let score = 0

    subject.questions.forEach((question) => {
      const userAnswer = answers[question.id]
      if (userAnswer !== undefined) {
        if (userAnswer === question.correctAnswer) {
          correct++
          score += 1 // +1 for correct answer
        } else {
          score -= 0.5 // -0.5 for wrong answer
        }
      }
    })

    subjectScores[subject.id] = {
      correct,
      total: subject.questions.length,
      percentage: Math.round((correct / subject.questions.length) * 100),
      score: Math.max(0, score), // Ensure score doesn't go below 0
    }
  })

  return subjectScores
}
