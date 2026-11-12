"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      name: "frontend",
      label: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "React Query", level: 80 },
        { name: "SWR", level: 75 },
        { name: "Zustand", level: 75 },
        { name: "Three.js", level: 65 },
        { name: "Leaflet", level: 65 },
      ],
    },
    {
      name: "mobile",
      label: "Mobile",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 65 },
      ],
    },
    {
      name: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "FastAPI (Python)", level: 80 },
        { name: "Java / Spring Boot", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 75 },
        { name: "WebSockets / Socket.io", level: 80 },
        { name: "OAuth2 / OIDC", level: 75 },
      ],
    },
    {
      name: "database",
      label: "Databases",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 90 },
        { name: "MySQL / MariaDB", level: 75 },
        { name: "SQL Server", level: 70 },
        { name: "Prisma", level: 85 },
        { name: "Mongoose / Sequelize", level: 85 },
        { name: "Redis", level: 75 },
        { name: "Neo4j", level: 60 },
      ],
    },
    {
      name: "cloud",
      label: "Cloud & Infra",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes (notions)", level: 55 },
        { name: "AWS", level: 75 },
        { name: "CloudFormation", level: 70 },
        { name: "CI/CD (GitLab CI/CD)", level: 75 },
        { name: "Nginx", level: 65 },
        { name: "Grafana / Loki / Kibana", level: 65 },
      ],
    },
    {
      name: "architecture",
      label: "Architecture",
      skills: [
        { name: "System Design", level: 85 },
        { name: "UML / Domain Modeling", level: 85 },
        { name: "TDD / Integration Testing", level: 80 },
        { name: "Jest / Playwright", level: 80 },
        { name: "Agile (GitHub Projects)", level: 85 },
      ],
    },
    {
      name: "ai",
      label: "AI & Automation",
      skills: [
        { name: "LLM Integration (Vertex AI, Gemini)", level: 70 },
        { name: "AI-assisted dev workflows", level: 80 },
        { name: "Agent-based automation", level: 65 },
      ],
    },
    {
      name: "soft-skills",
      label: "Soft Skills",
      skills: [
        { name: "Technical Leadership", level: 85 },
        { name: "Cross-functional Collaboration", level: 85 },
        { name: "Client Communication", level: 85 },
        { name: "Mentoring", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="frontend">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8 h-auto">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.name} value={category.name} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * index }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
