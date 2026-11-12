"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      company: "Consortium Jeunesse Sénégal",
      position: "Software Engineer",
      period: "May 2026 - Present",
      location: "Dakar",
      description: [
        "Led development of a national youth services platform serving 23,000+ users across four role-based spaces.",
        "Implemented OAuth2/OIDC single sign-on with no stored password, plus profile, CV and application workflows.",
        "Migrated 22,500+ accounts and 4,290 opportunities from Drupal; 11,558 redirects preserved 98.8% of search traffic.",
        "Integrated WhatsApp messaging and an AI assistant with admin-configurable models and a Neo4j recommendation graph.",
        "Built deployment across dev, staging and production: release by image digest, automated backup, migration and rollback.",
        "Configured self-hosted observability (Grafana, Loki, Netdata) and a Data Hub of 13 documented export streams.",
      ],
      tech: ["Next.js", "TypeScript", "Prisma", "MariaDB", "Redis", "Docker", "Vertex AI", "Neo4j"],
    },
    {
      company: "EATH",
      position: "Co-CTO & Lead Developer",
      period: "October 2025 - Present",
      location: "Dakar",
      description: [
        "Co-lead technical strategy and development of an AI-driven platform; define iterative development vision using GitHub Projects and agile methodologies.",
        "Conducted a comprehensive audit of the mobile application (Flutter) and backend (Java Spring Boot), identified bugs and missing features; led resolution efforts to stabilize the app and accelerate MVP delivery.",
        "Implemented full-system containerization with Docker, eliminating environment inconsistencies and reducing dependency friction.",
        "Proposed and executed migration policies toward advanced architectures; integrated AI models in close collaboration with AI and data teams.",
        "Improved team productivity by establishing CI/CD pipelines, repository organization, and development workflows.",
      ],
      tech: ["Java", "Spring Boot", "Flutter", "Docker", "AI/LLM integration"],
    },
    {
      company: "Engitech (Fintech)",
      position: "Contract Software Engineer",
      period: "September 2025 - March 2026",
      location: "Dakar",
      description: [
        "Designed backend modules managing financial mission workflows using FastAPI, PostgreSQL, Redis, and AWS SES.",
        "Built real-time supervisor tracking system with geolocation monitoring.",
        "Implemented multi-channel notification system (email, push, SMS, WebSockets).",
        "Developed admin dashboard with Next.js and modern frontend stack.",
        "Reduced regressions by 40% through TDD and integration testing.",
        "Conducted React Native mobile application audit and delivered technical roadmap.",
      ],
      tech: ["FastAPI", "PostgreSQL", "Redis", "AWS SES", "Next.js", "React Native"],
    },
    {
      company: "Starfire Technology",
      position: "Contract Software Engineer",
      period: "June 2025 - December 2025",
      location: "Dakar",
      description: [
        "Migrated legacy WordPress platform to scalable architecture using FastAPI and Next.js.",
        "Developed the mobile version of the application with React Native.",
        "Increased platform registrations from 1,500 to 5,607 users.",
        "Built AI-powered intelligent search engine.",
        "Implemented subscription system with multiple pricing plans.",
        "Developed analytics dashboards and moderation tools improving operational efficiency.",
      ],
      tech: ["FastAPI", "Next.js", "React Native", "AI search"],
    },
    {
      company: "LuciSun",
      position: "Full Stack Developer",
      period: "March 2024 - May 2025",
      location: "Sart-Dames-Avelines, Wallonia, Belgique (Remote)",
      description: [
        "Designed and delivered solar simulation SaaS platform as sole engineer.",
        "Implemented scenario modeling workflows and data export capabilities.",
        "Contributed to 3D solar farm modeling prototype using Three.js and PyVista.",
        "Participated in architecture of centralized SaaS portal providing access to multiple products.",
      ],
      tech: ["Next.js", "TailwindCSS", "FastAPI", "MongoDB", "Three.js", "PyVista"],
    },
    {
      company: "E-huissier",
      position: "Contract Software Engineer",
      period: "January 2024 - July 2024",
      location: "Dakar",
      description: [
        "Led system architecture and frontend development of legal automation platform.",
        "Integrated LLM-powered legal document generation reducing drafting time by 50%.",
        "Implemented QR-based document authenticity verification system.",
        "Built financial modules for registers, taxes, and invoicing.",
      ],
      tech: ["Next.js", "React Query", "TailwindCSS", "MongoDB", "NestJS", "LLM integration"],
    },
    {
      company: "CECA Audit & Conseil",
      position: "Contract Software Engineer",
      period: "November 2023 - January 2024",
      location: "Dakar, SN",
      description: [
        "Developed internal management platform for missions, clients, invoices, and expenses.",
        "Enabled employees to track missions, working hours, and earnings.",
        "Significantly reduced manual administrative processes.",
      ],
      tech: ["React.js", "TailwindCSS", "MongoDB", "NestJS"],
    },
    {
      company: "MyFeedback",
      position: "Contract Software Engineer",
      period: "July 2023 - October 2023",
      location: "Dakar, SN",
      description: [
        "Led system modeling and frontend development of feedback collection SaaS platform.",
        "Designed cloud architecture and deployment strategy.",
      ],
      tech: ["Next.js", "TailwindCSS", "Prisma", "MongoDB", "NestJS", "AWS"],
    },
    {
      company: "Omedema",
      position: "Full Stack Developer / Frontend Engineer",
      period: "September 2021 - March 2024",
      location: "France (Remote)",
      description: [
        "Contributed to backend migration to NestJS improving maintainability and scalability.",
        "Implemented real-time messaging features using Socket.io supporting thousands of concurrent users.",
        "Wrote unit and integration tests ensuring platform reliability.",
      ],
      tech: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "Jest", "Socket.io", "NestJS"],
    },
    {
      company: "GoMyCode",
      position: "Full Stack JavaScript Instructor",
      period: "June 2022 - Present",
      location: "Dakar",
      description: [
        "Trained over 100 students and corporate professionals in full stack JavaScript development.",
        "Mentored professionals from companies such as Baobab Group.",
        "Developed course materials and delivered technical workshops.",
        "Contributed to student employability outcomes.",
      ],
      tech: ["JavaScript", "React", "Node.js", "Mentoring"],
    },
  ]

  const additionalExperience = [
    {
      company: "PI-Horaire",
      position: "Full Stack Developer (Freelance)",
      period: "Jul - Aug 2023",
      description: "Built a machine-scheduling app.",
    },
    {
      company: "SENDIGITAL",
      position: "Full Stack Developer (Freelance)",
      period: "Apr - Jun 2023",
      description: "Built a SaaS for digital vCards with QR codes.",
    },
    {
      company: "SEN IT Technologie",
      position: "Full Stack MERN Developer",
      period: "Jun - Sep 2021",
      description: "Inventory/sales management app, full requirements-to-delivery cycle.",
    },
    {
      company: "Regional Hospital of Ourossogui",
      position: "Full Stack Java Developer (Remote)",
      period: "Jun - Sep 2020",
      description: "Hospital records management app (Beans, DAO, Servlets, JSP).",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm font-normal">
                    {exp.period}
                  </Badge>
                </div>
                <CardDescription>{exp.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-1">
                  {exp.description.map((desc, dIndex) => (
                    <li key={dIndex} className="text-sm text-muted-foreground">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, tIndex) => (
                    <Badge key={tIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold">Additional Experience</h3>
          <div className="space-y-3">
            {additionalExperience.map((exp, index) => (
              <div key={index} className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                <span className="font-semibold">{exp.company}</span>
                <span className="text-muted-foreground">— {exp.position}</span>
                <span className="text-muted-foreground">({exp.period})</span>
                <span className="text-muted-foreground w-full md:w-auto">{exp.description}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
