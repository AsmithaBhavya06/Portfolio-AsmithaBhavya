"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Mail,
  Linkedin,
  Github,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  FileText,
  Star,
  ExternalLink,
  Menu,
  Eye,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  Building,
  BookOpen,
} from "lucide-react"

const personalInfo = {
  name: "Boddu Asmitha Bhavya",
  email: "asmithabhavya.boddu@gmail.com",
  linkedin: "https://www.linkedin.com/in/asmitha-bhavya-7b65b6221",
  github: "https://github.com/AsmithaBhavya06",
  photo:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20passport%20size%20photo%28Asmitha%29.jpg-fBBScXq1wxtYVerp5CZ2JVWJQNPj6Y.jpeg",
}

const navigationItems = [
  { id: "about", label: "About", icon: Target },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: Code },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "publications", label: "Publications", icon: FileText },
]

const technicalSkills = [
  "C Language",
  "C++",
  "Object Oriented Programming",
  "Java",
  "Spring Boot",
  "Python",
  "MySQL",
  "Data Structures",
  "Networking",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
  "Generative AI",
]

const softSkills = ["Problem solving ability", "Effective Communication", "Leadership"]

const languages = ["English, Telugu (Advanced)", "Hindi, French (Intermediate)"]

const education = [
  {
    degree: "B.Tech - CSE",
    institution: "Amity University Noida",
    year: "2021-2025",
    grade: "88.9%",
  },
  {
    degree: "Intermediate Education (11th & 12th class)",
    institution: "Sri Chaitanya junior College- Andhra Pradesh",
    year: "2019-2021",
    grade: "97.7%",
  },
  {
    degree: "10th Class",
    institution: "LEMS - Andhra Pradesh",
    year: "2018-2019",
    grade: "98.0%",
  },
]

const internships = [
  {
    title: "Software Developer Intern",
    company: "Fidelity International",
    duration: "Jan'25 – Jul'25 (6 Months)",
    description: "Worked on open rewrite(Java Version Upgrade) and Developed an inner source module for email automation",
    status: "Completed",
    certificate: "/placeholder.svg?height=600&width=800&text=Fidelity+International+Internship+Certificate",
  },
  {
    title: "Software Engineer Intern",
    company: "Brillanz Software Solutions",
    duration: "May'24 – July'24 (2 Months)",
    description: "Worked on Proctoring System Project.",
    status: "Completed",
    certificate: "/Brillanz Internship Certificate.png",
  },
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce",
    duration: "May'24 - July'24 (2 Months)",
    description: "Worked on Apex, Visualforce and Lightning Web Components to meet client requirements.",
    status: "Completed",
    certificate: "/Salesforce Internship Certificate.png",
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Intern Career",
    duration: "Oct'23-Nov'23 (1 Month)",
    description:
      "Worked on a Natural Language Processing project and Computer Vision project, focusing on analyzing and interpreting visual data.",
    status: "Completed",
    certificate: "/Artificial Intelligence InternCareer cert.png",
  },
  {
    title: "Management Trainee",
    company: "Lacozy Enterprises Private Limited",
    duration: "14-05-2024 to 01-07-2024",
    description: "Management training program with comprehensive professional development.",
    status: "Completed",
    certificate: "Lacozy cert.png",
  },
]

const projects = [
  {
    title: "Deep Learning based Eye driven Mouse Cursor",
    duration: "Aug'24 – Oct'23",
    description: "A system which uses eyes for the mouse cursor control without using hands.",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    status: "Completed",
  },
  {
    title: "Image Classification",
    duration: "Oct'23- Nov'23",
    description:
      "Developed a Convolutional Neural Network (CNN) model using TensorFlow and Keras to classify images from the CIFAR-10 dataset.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    status: "Completed",
  },
  {
    title: "Sentiment Analysis",
    duration: "May'23-Jul'23",
    description: "Predicts whether the review is positive or negative.",
    tech: ["Python", "NLP", "Machine Learning"],
    status: "Completed",
  },
  {
    title: "PG Website (Web Project)",
    duration: "Dec'21- Feb'22",
    description: "A PG Website to help college students to find their preferred PG easily.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    status: "Completed",
  },
]

const publications = [
  {
    title: "Live Audio Recognition and Text Conversion System",
    venue:
      "IEEE 2025 2nd International Conference on Computational Intelligence, Communication Technology and Networking (CICTN)",
    year: "2025",
    description:
      "This paper presents a comprehensive system for real-time audio recognition and text conversion, utilizing advanced machine learning algorithms for accurate speech-to-text processing.",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/10932489",
  },
]

const hobbies = ["Listening to Songs", "Dancing", "Playing Badminton"]

const certificateCategories = {
  "AI & Machine Learning": [
    {
      title: "Generative AI Foundational Course",
      date: "02/04/2025",
      issuer: "Fidelity International Company Training",
      image: "/Gen ai found course.png",
      description: "Comprehensive course covering fundamentals of Generative AI technologies and applications.",
    },
    {
      title: "Get Ready for Generative AI",
      date: "25/03/2025",
      issuer: "Fidelity International Company Training",
      image: "/get ready gen ai.png",
      description: "Preparatory course for understanding and implementing Generative AI solutions.",
    },
    {
      title: "Generative AI for Everyone",
      date: "5/24/2025",
      issuer: "Fidelity International Company Training",
      image: "/gen ai for everyone.png",
      description: "Course designed to make Generative AI accessible to professionals across industries.",
    },
  ],
  "API Development": [
    {
      title: "Learning REST APIs",
      date: "7/1/2025",
      issuer: "LinkedIn Learning",
      duration: "1 hour 6 minutes",
      image: "/learning rest api.png",
      description: "Comprehensive training on REST API design principles and implementation.",
    },
    {
      title: "Designing RESTful APIs",
      date: "7/1/2025",
      issuer: "LinkedIn Learning",
      duration: "1 hour 20 minutes",
      image: "/designing restfull api.png",
      description: "Advanced course on RESTful API design patterns and best practices.",
    },
    {
      title: "Building APIs with Swagger and the OpenAPI Specification",
      date: "7/1/2025",
      issuer: "LinkedIn Learning",
      duration: "3 hours 4 minutes",
      image: "/building apis with swagger.png",
      description: "Advanced course on API documentation and specification using Swagger and OpenAPI.",
    },
    {
      title: "API Testing Foundations",
      date: "7/1/2025",
      issuer: "LinkedIn Learning",
      duration: "1 hour 33 minutes",
      image: "/api testing foundations.png",
      description: "Fundamentals of API testing methodologies and best practices.",
    },
    {
      title: "API 101 - The Basics",
      date: "5/29/2025",
      issuer: "Fidelity International Company Training",
      image: "/Api 101 basics.png",
      description: "Introduction to API concepts and fundamental principles.",
    },
  ],
  "Cloud Computing": [
    {
      title: "Learning Cloud Fundamentals - 101",
      date: "5/25/2025",
      issuer: "Fidelity International Company Training",
      image: "/Learning cloud fund.png",
      description: "Introduction to cloud computing concepts and technologies.",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      date: "May 25, 2025",
      issuer: "AWS",
      image: "/aws cloud practitioner.png",
      description: "Foundation-level course covering AWS cloud concepts and services.",
    },
    {
      title: "Job Roles in the Cloud",
      date: "5/25/2025",
      issuer: "AWS",
      image: "/job roles in cloud.png",
      description: "Overview of various career opportunities in cloud computing.",
    },
  ],
  "Web & Mobile Development": [
    {
      title: "Web Development",
      date: "2023-03-14",
      issuer: "Internshala",
      duration: "8-week training",
      image: "/web development.png",
      description: "Comprehensive web development training covering HTML, CSS, JavaScript, React, and more.",
    },
    {
      title: "Android App Development",
      date: "2023-09-06",
      issuer: "Internshala & NSDC",
      duration: "8-week training",
      image: "/NSDC andriod app dev.png",
      description: "Complete Android app development course covering Kotlin and Android fundamentals.",
    },
  ],
  "Networking & Security": [
    {
      title: "CCNAv7: Introduction to Networks",
      date: "29 Nov 2023",
      issuer: "Cisco Networking Academy",
      image: "/Intro to networks.png",
      description: "Comprehensive networking course covering Cisco networking fundamentals.",
    },
    {
      title: "Systems and Usable Security",
      date: "Jan-Feb 2024",
      issuer: "NPTEL",
      score: "64%",
      image: "/System and usable security.png",
      description: "Academic course on systems security and usability principles.",
    },
    {
      title: "Cyber Security",
      date: "12-Dec-2023 to 12-Feb-2024",
      issuer: "Acmegrade",
      image: "/cyber sec train.png",
      description: "Intensive cybersecurity training covering threat analysis and security protocols.",
    },
  ],
  "Professional Development": [
    {
      title: "GitHub Copilot Risk, Controls & Usage Guidance",
      date: "01/04/2025",
      issuer: "Fidelity International Company Training",
      image: "/github copilot risk, contr.png",
      description: "Training on responsible use of GitHub Copilot and AI coding assistants.",
    },
    {
      title: "Health, Safety and Sustainability - 2022",
      date: "14/02/2025",
      issuer: "Fidelity International Company Training",
      image: "/health safety and sus.png",
      description: "Corporate training on workplace health, safety, and sustainability practices.",
    },
    {
      title: "ServiceNow Micro-Certification - Welcome to ServiceNow",
      date: "August 1, 2024",
      issuer: "ServiceNow",
      image: "/micro cert service now.png",
      description: "Introduction to ServiceNow platform and its capabilities.",
    },
    {
      title: "Technology Bootcamp",
      date: "27/01/2025 - 29/01/2025",
      issuer: "Fidelity International Company Training",
      duration: "5 Hours 15 Minutes",
      image: "/tech bootcamp.png",
      description: "Intensive technology training bootcamp covering latest industry trends.",
    },
    {
      title: "PTT Global New Joiner - Broken Trust",
      date: "14/02/2025",
      issuer: "PTT Global",
      image: "/ptt blobal new joiner.png",
      description: "New employee orientation and trust-building training program.",
    },
  ],
  "Academic Courses": [
    {
      title: "Economics of Innovation",
      date: "Jul-Oct 2024",
      issuer: "NPTEL",
      score: "65%",
      image: "/eco of inno.png",
      description: "12-week academic course on innovation economics and technology management.",
    },
    {
      title: "Sociology of Science",
      date: "Jul-Aug 2024",
      issuer: "NPTEL",
      score: "71%",
      image: "/soc of sci.png",
      description: "4-week course exploring the social aspects of scientific research and development.",
    },
    {
      title: "Data Cadet",
      date: "5/29/2025",
      issuer: "Fidelity International Company Training",
      image: "/data cadet.png",
      description: "Foundational data science and analytics training program.",
    },
  ],
  "Participation & Recognition": [
    {
      title: "Certificate of Participation - MCQ Coding Assessment",
      date: "2024",
      issuer: "Unstop Talent Park",
      image: "/unstop talent park.png",
      description: "Participation in coding assessment organized by Unstop Talent Park.",
    },
    {
      title: "Certificate of Appreciation",
      date: "2023",
      issuer: "JAX Foundation India",
      image: "/jax appriciation.png",
      description: "Recognition for generous support towards noble causes and community service.",
    },
    {
      title: "Certificate of Completion - Child Education EVS",
      date: "2024",
      issuer: "JAX Foundation",
      duration: "60 Hours",
      image: "/jax completion.png",
      description: "Internship completion in child education and environmental studies.",
    },
    {
      title: "Certificate of Participation - Copilot in Windows 11 & Microsoft 365",
      date: "02-05-2024",
      issuer: "Amity Technical Placement Centre",
      image: "/microsoft copilot in win 11.png",
      description: "Participation in seminar on Copilot integration in Windows 11 and Microsoft 365.",
    },
    {
      title: "Certificate of Merit - Naukri Campus Young Turks",
      date: "11-10-2024",
      issuer: "Naukri Campus",
      image: "naukri young turks.png",
      description: "Merit score in Naukri campus young turks competition.",
    },
  ],
}

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry&body=Hello Asmitha, I will provide response in 24 hours.`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-400/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Boddu Asmitha Bhavya
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 overflow-x-auto whitespace-nowrap">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/25"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-yellow-400 hover:bg-yellow-400/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-yellow-400/20 w-80">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Navigation
                  </span>
                </div>
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg"
                          : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-600/5 pointer-events-none" />
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-yellow-600 shadow-2xl shadow-yellow-400/20">
                <img
                  src={personalInfo.photo || "/placeholder.svg"}
                  alt="Asmitha Bhavya"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full shadow-lg">
                <Zap className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Asmitha Bhavya
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto lg:mx-0 mb-6" />
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  AI Engineer, Full-Stack Developer & Software Engineer passionate about creating innovative solutions with cutting-edge
                  technologies
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <button
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 underline decoration-yellow-400/50 hover:decoration-yellow-400"
                >
                  {personalInfo.email}
                </button>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 bg-transparent"
                >
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 bg-transparent"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated engineer with a passion for leveraging cutting-edge technologies to develop innovative
              solutions. Proficient in AI, Deep Learning with strong problem-solving abilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400 flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-400/50 text-yellow-400 hover:from-yellow-400/30 hover:to-yellow-600/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-400 flex items-center gap-3">
                    <Star className="w-5 h-5" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-400/50 text-yellow-400 hover:from-yellow-400/30 hover:to-yellow-600/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-400">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">English, Telugu</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-400/50">Advanced</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Hindi, French</span>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/50">Intermediate</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-400">Hobbies & Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {hobbies.map((hobby, index) => (
                      <p key={index} className="text-gray-300">
                        • {hobby}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-950/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive internship experience across leading technology companies
            </p>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-yellow-400 flex items-center gap-3 mb-2">
                        <Briefcase className="w-6 h-6" />
                        {internship.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{internship.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        className={`${
                          internship.status === "Current"
                            ? "bg-green-500/20 text-green-400 border-green-400/50"
                            : "bg-blue-500/20 text-blue-400 border-blue-400/50"
                        }`}
                      >
                        {internship.status}
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/50 text-yellow-400 hover:from-yellow-400/30 hover:to-yellow-600/30"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 border-yellow-400/30 max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-yellow-400 mb-4">
                              {internship.title} - {internship.company}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-400 font-medium">Company</p>
                                <p className="text-white text-lg">{internship.company}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 font-medium">Duration</p>
                                <p className="text-white text-lg">{internship.duration}</p>
                              </div>
                              <div className="col-span-2">
                                <p className="text-gray-400 font-medium">Status</p>
                                <p className="text-white text-lg">{internship.status}</p>
                              </div>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg border border-yellow-400/20">
                              <p className="text-gray-300 leading-relaxed">{internship.description}</p>
                            </div>

                            <div className="relative bg-white rounded-lg p-4 shadow-2xl">
                              <img
                                src={internship.certificate || "/placeholder.svg"}
                                alt={`${internship.title} Certificate`}
                                className="w-full h-auto rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{internship.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Academic journey with consistent excellence and outstanding performance
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-400 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-400/50 text-yellow-400">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-950/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Innovative projects showcasing expertise in AI, machine learning, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-400/50">{project.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional certifications showcasing expertise across various technology domains
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(certificateCategories).map(([category, certificates]) => (
              <div key={category}>
                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                  <Award className="w-7 h-7" />
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 cursor-pointer hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-yellow-400 line-clamp-2 group-hover:text-yellow-300 transition-colors">
                              {cert.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="space-y-2">
                              <p className="text-sm text-gray-400 font-medium">{cert.issuer}</p>
                              <p className="text-sm text-gray-500">{cert.date}</p>
                              {cert.duration && (
                                <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/50 text-xs">
                                  {cert.duration}
                                </Badge>
                              )}
                              {cert.score && (
                                <Badge className="bg-purple-500/20 text-purple-400 border-purple-400/50 text-xs">
                                  Score: {cert.score}
                                </Badge>
                              )}
                            </div>
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/50 text-yellow-400 hover:from-yellow-400/30 hover:to-yellow-600/30"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Certificate
                            </Button>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-900 border-yellow-400/30 max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-yellow-400 mb-4">{cert.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-400 font-medium">Issuer</p>
                              <p className="text-white text-lg">{cert.issuer}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 font-medium">Date</p>
                              <p className="text-white text-lg">{cert.date}</p>
                            </div>
                            {cert.duration && (
                              <div>
                                <p className="text-gray-400 font-medium">Duration</p>
                                <p className="text-white text-lg">{cert.duration}</p>
                              </div>
                            )}
                            {cert.score && (
                              <div>
                                <p className="text-gray-400 font-medium">Score</p>
                                <p className="text-white text-lg">{cert.score}</p>
                              </div>
                            )}
                          </div>

                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-400/20">
                            <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                          </div>

                          <div className="relative bg-white rounded-lg p-4 shadow-2xl">
                            <img
                              src={cert.image || "/placeholder.svg"}
                              alt={`${cert.title} Certificate`}
                              className="w-full h-auto rounded-lg shadow-lg"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-950/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Publications
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Research contributions to the academic and professional community
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-400/20 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-yellow-400 flex items-center gap-3 mb-4">
                        <FileText className="w-6 h-6" />
                        {pub.title}
                      </CardTitle>
                      <div className="space-y-2 text-gray-400">
                        <p className="font-semibold text-lg">{pub.venue}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{pub.year}</span>
                          </div>
                          <Badge className="bg-green-500/20 text-green-400 border-green-400/50">{pub.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                      onClick={() => window.open("https://ieeexplore.ieee.org/document/10932489", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{pub.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-950 to-black border-t border-yellow-400/20 py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Boddu Asmitha Bhavya
            </span>
          </div>
          <p className="text-gray-400 mb-2">© 2025 {personalInfo.name}. All rights reserved.</p>
          <p className="text-gray-500 mb-4">Built with passion for technology and innovation.</p>
          <button
            onClick={handleEmailClick}
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline decoration-yellow-400/50 hover:decoration-yellow-400"
          >
            Contact: {personalInfo.email}
          </button>
        </div>
      </footer>
    </div>
  )
}
