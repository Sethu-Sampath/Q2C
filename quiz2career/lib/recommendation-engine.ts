export interface CourseRecommendation {
  id: string
  name: string
  category: string
  description: string
  icon: string
  color: string
  matchPercentage: number
  requiredSubjects: string[]
  careerPaths: string[]
  averageSalary: string
  duration: string
}

export const courseDatabase: CourseRecommendation[] = [
  // Engineering & Technology
  {
    id: "cse",
    name: "Computer Science Engineering",
    category: "Engineering & Technology",
    description: "Design and develop software systems, algorithms, and computing solutions",
    icon: "Code",
    color: "bg-blue-500",
    matchPercentage: 0,
    requiredSubjects: ["computer", "mathematics", "physics"],
    careerPaths: ["Software Engineer", "Data Scientist", "AI/ML Engineer", "Product Manager"],
    averageSalary: "₹8-25 LPA",
    duration: "4 years",
  },
  {
    id: "cse-aiml",
    name: "CSE - AI & Machine Learning",
    category: "Engineering & Technology",
    description: "Specialize in artificial intelligence and machine learning technologies",
    icon: "Brain",
    color: "bg-purple-500",
    matchPercentage: 0,
    requiredSubjects: ["computer", "mathematics", "physics"],
    careerPaths: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "Research Scientist"],
    averageSalary: "₹10-30 LPA",
    duration: "4 years",
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    category: "Engineering & Technology",
    description: "Design, build, and maintain mechanical systems and machines",
    icon: "Cog",
    color: "bg-gray-500",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "physics", "chemistry"],
    careerPaths: ["Mechanical Engineer", "Design Engineer", "Manufacturing Engineer", "Project Manager"],
    averageSalary: "₹6-20 LPA",
    duration: "4 years",
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    category: "Engineering & Technology",
    description: "Work with electrical systems, power generation, and electronics",
    icon: "Zap",
    color: "bg-yellow-500",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "physics", "chemistry"],
    careerPaths: ["Electrical Engineer", "Power Systems Engineer", "Control Systems Engineer"],
    averageSalary: "₹6-18 LPA",
    duration: "4 years",
  },

  // Pure Sciences
  {
    id: "bsc-data-analytics",
    name: "B.Sc. Data Analytics",
    category: "Pure Sciences",
    description: "Analyze complex data to derive insights and support decision-making",
    icon: "BarChart",
    color: "bg-green-500",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "computer", "physics"],
    careerPaths: ["Data Analyst", "Business Analyst", "Data Scientist", "Research Analyst"],
    averageSalary: "₹5-15 LPA",
    duration: "3 years",
  },
  {
    id: "bsc-computational-math",
    name: "B.Sc. Computational Mathematics",
    category: "Pure Sciences",
    description: "Apply mathematical methods to solve complex computational problems",
    icon: "Calculator",
    color: "bg-blue-600",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "computer", "physics"],
    careerPaths: ["Quantitative Analyst", "Research Scientist", "Software Developer", "Actuary"],
    averageSalary: "₹6-20 LPA",
    duration: "3 years",
  },

  // Business & Management
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    category: "Business & Management",
    description: "Learn business fundamentals and management principles",
    icon: "Briefcase",
    color: "bg-orange-500",
    matchPercentage: 0,
    requiredSubjects: ["english", "general-knowledge", "mathematics"],
    careerPaths: ["Business Manager", "Marketing Executive", "HR Manager", "Entrepreneur"],
    averageSalary: "₹4-12 LPA",
    duration: "3 years",
  },
  {
    id: "ca",
    name: "Chartered Accountancy",
    category: "Business & Management",
    description: "Become a financial expert and auditing professional",
    icon: "Calculator",
    color: "bg-green-600",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "english", "general-knowledge"],
    careerPaths: ["Chartered Accountant", "Financial Advisor", "Tax Consultant", "Auditor"],
    averageSalary: "₹8-25 LPA",
    duration: "4-5 years",
  },

  // Arts & Humanities
  {
    id: "ba-political-science",
    name: "BA Political Science",
    category: "Arts & Humanities",
    description: "Study government systems, politics, and public administration",
    icon: "Users",
    color: "bg-red-500",
    matchPercentage: 0,
    requiredSubjects: ["english", "general-knowledge"],
    careerPaths: ["Civil Servant", "Political Analyst", "Journalist", "Policy Researcher"],
    averageSalary: "₹4-15 LPA",
    duration: "3 years",
  },
  {
    id: "ba-journalism",
    name: "BA Journalism",
    category: "Arts & Humanities",
    description: "Learn media, communication, and news reporting skills",
    icon: "Newspaper",
    color: "bg-purple-600",
    matchPercentage: 0,
    requiredSubjects: ["english", "general-knowledge"],
    careerPaths: ["Journalist", "News Reporter", "Content Writer", "Media Producer"],
    averageSalary: "₹3-12 LPA",
    duration: "3 years",
  },

  // Law
  {
    id: "ba-llb",
    name: "BA LLB",
    category: "Law & Legal Studies",
    description: "Integrated law degree combining arts and legal studies",
    icon: "Scale",
    color: "bg-indigo-500",
    matchPercentage: 0,
    requiredSubjects: ["english", "general-knowledge"],
    careerPaths: ["Lawyer", "Legal Advisor", "Judge", "Legal Consultant"],
    averageSalary: "₹5-20 LPA",
    duration: "5 years",
  },
  {
    id: "bba-llb",
    name: "BBA LLB",
    category: "Law & Legal Studies",
    description: "Integrated degree combining business and legal studies",
    icon: "Scale",
    color: "bg-indigo-600",
    matchPercentage: 0,
    requiredSubjects: ["english", "general-knowledge", "mathematics"],
    careerPaths: ["Corporate Lawyer", "Legal Advisor", "Business Consultant", "Compliance Officer"],
    averageSalary: "₹6-25 LPA",
    duration: "5 years",
  },

  // Architecture
  {
    id: "b-arch",
    name: "Bachelor of Architecture",
    category: "Design & Architecture",
    description: "Design buildings and spaces that are functional and aesthetic",
    icon: "Building",
    color: "bg-teal-500",
    matchPercentage: 0,
    requiredSubjects: ["mathematics", "physics", "chemistry"],
    careerPaths: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect"],
    averageSalary: "₹5-18 LPA",
    duration: "5 years",
  },
]

export const generateRecommendations = (
  subjectScores: Record<string, { correct: number; total: number; percentage: number; score: number }>,
): CourseRecommendation[] => {
  const recommendations = courseDatabase.map((course) => {
    let matchScore = 0
    let totalWeight = 0

    // Calculate match percentage based on required subjects
    course.requiredSubjects.forEach((subject) => {
      const subjectScore = subjectScores[subject]
      if (subjectScore) {
        matchScore += subjectScore.percentage
        totalWeight += 100
      }
    })

    // Add bonus for high-performing subjects
    Object.entries(subjectScores).forEach(([subject, score]) => {
      if (course.requiredSubjects.includes(subject) && score.percentage >= 80) {
        matchScore += 10 // Bonus for excellence
      }
    })

    const matchPercentage = totalWeight > 0 ? Math.min(100, Math.round((matchScore / totalWeight) * 100)) : 0

    return {
      ...course,
      matchPercentage,
    }
  })

  // Sort by match percentage and return top recommendations
  return recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 8)
}

export const getTopSubjects = (
  subjectScores: Record<string, { correct: number; total: number; percentage: number; score: number }>,
): Array<{ subject: string; percentage: number; name: string }> => {
  const subjectNames = {
    mathematics: "Mathematics",
    physics: "Physics",
    chemistry: "Chemistry",
    "general-knowledge": "General Knowledge",
    english: "English",
    computer: "Computer",
  }

  return Object.entries(subjectScores)
    .map(([subject, score]) => ({
      subject,
      percentage: score.percentage,
      name: subjectNames[subject as keyof typeof subjectNames] || subject,
    }))
    .sort((a, b) => b.percentage - a.percentage)
}
