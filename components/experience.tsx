"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      company: "LuciSun",
      position: "Full Stack Developer",
      period: "March 2024 - Present",
      location: "Sart-Dames-Avelines, Wallonia, Belgique (Remote)",
      projects: [
        {
          name: "LUDATA",
          role: "Fullstack Developer",
          period: "July 2024 - October 2024",
          description: [
            "Led the development of LuData, a full-stack web application built using FastAPI and MongoDB for the backend, and Next.js, TailwindCSS, and DaisyUI for the frontend.",
            "Developed user authentication and account management, allowing clients to create accounts, log in, and manage sites and scenarios for analysis.",
            "Implemented a seamless process for clients to generate and retrieve detailed scenario analysis reports through an intuitive user interface.",
            "Integrated an external DataService tool that dynamically provides API access to clients based on their subscription level and role, ensuring personalized access to analysis reports.",
            "Built administrative features enabling admins to manage user accounts, track system usage, and monitor request statistics via a custom dashboard.",
            "Solely responsible for both frontend and backend tasks, ensuring end-to-end development and delivery of the project.",
          ],
          tech: ["Next.js", "TailwindCSS", "DaisyUI", "FastAPI", "MongoDB"],
        },
        {
          name: "EKO Sensor Insights",
          role: "Frontend Engineer",
          period: "March 2024 - May 2024",
          description: [
            "A solution designed for a solar energy company to manage, store, and analyze sensor data for better decision-making and benchmarking.",
            "Developed key UI components using Next.js and Tailwind CSS",
            "Implemented automated quality check features for irradiance sensors",
            "Built a data organization system for a sensor data bank",
            "Collaborated closely with data scientists and backend developers working with FastAPI",
            "Improved the user interface for better sensor data visualization and interaction",
            "Contributed to making sensor data insights actionable and easier to manage",
          ],
          tech: ["Next.js", "TailwindCSS", "SQLite", "FastAPI", "Python"],
        },
      ],
    },
    {
      company: "E-huissier",
      position: "Software Engineer",
      period: "January 2024 - July 2024",
      location: "Dakar",
      description: [
        "Led the system modeling and design of E-Huissier, a groundbreaking process automation solution for bailiff offices in Senegal, aimed at transforming their daily operations.",
        "Collaborated with a team of two fullstack developers and a UX/UI designer to design and develop the application, ensuring it met the specific needs of bailiff offices by working closely with a real bailiff firm.",
        "Led the UML-based system modeling, creating detailed diagrams to map the business processes, and co-designed the database schema to optimize data management.",
        "Developed the frontend interfaces using Next.js, React Query, and TailwindCSS, delivering a user-friendly experience for secretaries, clerks, and bailiffs.",
        "Collaborated with the UX/UI team to transform wireframes into an intuitive user interface.",
        "Implemented core functionalities that allowed secretaries to manage clients, files, invoices, and generate legal documents through an integrated template system.",
        "Designed workflows for clerks to process assigned cases, generate documents, and request bailiff signatures via the platform.",
        "Integrated a digital signature feature for bailiffs, with security measures like QR code verification to ensure document authenticity.",
        "Built a dynamic client portal where users can access their signed documents by scanning the QR code.",
      ],
      tech: ["Next.js", "React Query", "TailwindCSS", "MongoDB", "NestJS"],
    },
    {
      company: "CECA - Audit & Conseil",
      position: "Full Stack Developer",
      period: "November 2023 - January 2024",
      location: "Dakar, SN (Freelance)",
      description: [
        "Led the design and development of a custom internal management application for an accounting firm.",
        "Developed a secure, personalized login system with unique credentials for each employee.",
        "Built the entire application from scratch, ensuring it was fully customizable to meet the firm's specific needs.",
        "Enhanced flexibility and efficiency in day-to-day operations by streamlining internal workflows.",
        "Delivered a bespoke solution that significantly improved overall productivity and adaptability within the firm.",
      ],
      tech: ["React.js", "TailwindCSS", "MongoDB", "NestJS"],
    },
    {
      company: "MyFeedback",
      position: "Software Engineer",
      period: "July 2023 - October 2023",
      location: "Dakar, SN",
      description: [
        "Led the modelling and design team of a SaaS for collecting client feedbacks and thier ratings for provided services within a company.",
        "Worked as Frontend Engineer and build user interfaces.",
        "Design the cloud infrastructure for the app",
      ],
      tech: ["Next.js", "TailwindCSS", "Prisma", "MongoDB", "Redux TLK", "NestJS", "AWS"],
    },
    {
      company: "OMEDEMA",
      position: "Full Stack Developer (Primarily Frontend)",
      period: "September 2021 - March 2024",
      location: "Paris, France (Remote)",
      description: [
        "Worked as a fullstack developer, contributing primarily to the frontend development and backend migration of Omedema's platform.",
        "Developed the landing page using Next.js, Tailwind CSS, TypeScript, and Node.js",
        "Created reusable UI components for seamless user experience",
        "Performed unit testing for components using Jest, React Testing Library, and Enzyme",
        "Wrote integration tests using Jest and Enzyme for robust application performance",
        "Built forms with React-Hook-Form for user authentication and onboarding",
        "Implemented a real-time chat feature using Socket.io",
        "Set up state management with Redux Toolkit to handle application-wide data",
        "Contributed to the backend migration from legacy code to NestJS for better performance and scalability",
      ],
      tech: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Node.js",
        "Jest",
        "React Testing Library",
        "Socket.io",
        "Redux Toolkit",
        "NestJS",
      ],
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
                {exp.projects ? (
                  exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="space-y-2">
                      <h4 className="font-semibold">
                        {project.name} - {project.role} | {project.period}
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.description.map((desc, dIndex) => (
                          <li key={dIndex} className="text-sm text-muted-foreground">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <>
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
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

