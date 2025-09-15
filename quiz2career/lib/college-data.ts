export interface College {
  id: string
  name: string
  location: string
  state: string
  city: string
  type: "Government" | "Private" | "Deemed"
  courses: string[]
  fees: {
    annual: string
    total: string
  }
  ranking: {
    nirf?: number
    overall?: string
  }
  placement: {
    average: string
    highest: string
    percentage: string
  }
  facilities: string[]
  approvals: string[]
  website?: string
  established: number
}

export const collegeDatabase: College[] = [
  // Delhi Colleges
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, Delhi",
    state: "Delhi",
    city: "New Delhi",
    type: "Government",
    courses: ["cse", "mechanical", "electrical", "civil", "chemical"],
    fees: {
      annual: "₹2.5 Lakhs",
      total: "₹10 Lakhs",
    },
    ranking: {
      nirf: 2,
      overall: "Excellent",
    },
    placement: {
      average: "₹18 LPA",
      highest: "₹1.2 Crore",
      percentage: "95%",
    },
    facilities: ["Hostel", "Library", "Labs", "Sports Complex", "Wi-Fi"],
    approvals: ["AICTE", "UGC", "NAAC A++"],
    website: "https://home.iitd.ac.in",
    established: 1961,
  },
  {
    id: "dtu",
    name: "Delhi Technological University",
    location: "Delhi, Delhi",
    state: "Delhi",
    city: "Delhi",
    type: "Government",
    courses: ["cse", "cse-aiml", "mechanical", "electrical", "civil"],
    fees: {
      annual: "₹1.5 Lakhs",
      total: "₹6 Lakhs",
    },
    ranking: {
      nirf: 36,
      overall: "Very Good",
    },
    placement: {
      average: "₹12 LPA",
      highest: "₹45 LPA",
      percentage: "85%",
    },
    facilities: ["Hostel", "Library", "Labs", "Cafeteria", "Wi-Fi"],
    approvals: ["AICTE", "UGC", "NAAC A+"],
    established: 1941,
  },

  // Maharashtra Colleges
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Government",
    courses: ["cse", "mechanical", "electrical", "chemical", "aerospace"],
    fees: {
      annual: "₹2.5 Lakhs",
      total: "₹10 Lakhs",
    },
    ranking: {
      nirf: 3,
      overall: "Excellent",
    },
    placement: {
      average: "₹20 LPA",
      highest: "₹1.5 Crore",
      percentage: "98%",
    },
    facilities: ["Hostel", "Library", "Research Labs", "Sports Complex", "Medical Center"],
    approvals: ["AICTE", "UGC", "NAAC A++"],
    website: "https://www.iitb.ac.in",
    established: 1958,
  },
  {
    id: "vjti-mumbai",
    name: "Veermata Jijabai Technological Institute",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    city: "Mumbai",
    type: "Government",
    courses: ["cse", "mechanical", "electrical", "civil", "chemical"],
    fees: {
      annual: "₹1.2 Lakhs",
      total: "₹4.8 Lakhs",
    },
    ranking: {
      nirf: 45,
      overall: "Very Good",
    },
    placement: {
      average: "₹8 LPA",
      highest: "₹25 LPA",
      percentage: "80%",
    },
    facilities: ["Library", "Labs", "Cafeteria", "Wi-Fi", "Auditorium"],
    approvals: ["AICTE", "UGC", "NAAC A"],
    established: 1887,
  },

  // Karnataka Colleges
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science",
    location: "Bangalore, Karnataka",
    state: "Karnataka",
    city: "Bangalore",
    type: "Deemed",
    courses: ["bsc-data-analytics", "bsc-computational-math", "cse", "mechanical"],
    fees: {
      annual: "₹3 Lakhs",
      total: "₹12 Lakhs",
    },
    ranking: {
      nirf: 1,
      overall: "Outstanding",
    },
    placement: {
      average: "₹25 LPA",
      highest: "₹2 Crore",
      percentage: "100%",
    },
    facilities: ["Hostel", "Research Labs", "Library", "Sports", "Medical Center"],
    approvals: ["UGC", "NAAC A++"],
    website: "https://www.iisc.ac.in",
    established: 1909,
  },

  // Tamil Nadu Colleges
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    city: "Chennai",
    type: "Government",
    courses: ["cse", "mechanical", "electrical", "chemical", "aerospace"],
    fees: {
      annual: "₹2.5 Lakhs",
      total: "₹10 Lakhs",
    },
    ranking: {
      nirf: 1,
      overall: "Outstanding",
    },
    placement: {
      average: "₹22 LPA",
      highest: "₹1.8 Crore",
      percentage: "97%",
    },
    facilities: ["Hostel", "Library", "Research Centers", "Sports Complex", "Hospital"],
    approvals: ["AICTE", "UGC", "NAAC A++"],
    website: "https://www.iitm.ac.in",
    established: 1959,
  },

  // Business Schools
  {
    id: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    city: "Ahmedabad",
    type: "Government",
    courses: ["bba", "ca"],
    fees: {
      annual: "₹8 Lakhs",
      total: "₹16 Lakhs",
    },
    ranking: {
      nirf: 1,
      overall: "Outstanding",
    },
    placement: {
      average: "₹35 LPA",
      highest: "₹1.5 Crore",
      percentage: "100%",
    },
    facilities: ["Hostel", "Library", "Case Study Rooms", "Sports", "Cafeteria"],
    approvals: ["AICTE", "UGC"],
    website: "https://www.iima.ac.in",
    established: 1961,
  },

  // Law Colleges
  {
    id: "nlu-delhi",
    name: "National Law University Delhi",
    location: "New Delhi, Delhi",
    state: "Delhi",
    city: "New Delhi",
    type: "Government",
    courses: ["ba-llb", "bba-llb"],
    fees: {
      annual: "₹2 Lakhs",
      total: "₹10 Lakhs",
    },
    ranking: {
      nirf: 2,
      overall: "Excellent",
    },
    placement: {
      average: "₹15 LPA",
      highest: "₹50 LPA",
      percentage: "95%",
    },
    facilities: ["Hostel", "Moot Court", "Library", "Sports", "Wi-Fi"],
    approvals: ["UGC", "BCI"],
    website: "https://nludelhi.ac.in",
    established: 2008,
  },

  // Arts Colleges
  {
    id: "du-stephens",
    name: "St. Stephen's College, Delhi University",
    location: "New Delhi, Delhi",
    state: "Delhi",
    city: "New Delhi",
    type: "Government",
    courses: ["ba-political-science", "ba-journalism", "english"],
    fees: {
      annual: "₹50,000",
      total: "₹1.5 Lakhs",
    },
    ranking: {
      overall: "Excellent",
    },
    placement: {
      average: "₹8 LPA",
      highest: "₹25 LPA",
      percentage: "85%",
    },
    facilities: ["Library", "Auditorium", "Sports", "Cafeteria", "Wi-Fi"],
    approvals: ["UGC", "NAAC A++"],
    established: 1881,
  },
]

export const getCollegesByStateAndCourse = (state: string, courseId: string): College[] => {
  return collegeDatabase.filter(
    (college) => college.state.toLowerCase().includes(state.toLowerCase()) && college.courses.includes(courseId),
  )
}

export const getAllStates = (): string[] => {
  const states = [...new Set(collegeDatabase.map((college) => college.state))]
  return states.sort()
}
