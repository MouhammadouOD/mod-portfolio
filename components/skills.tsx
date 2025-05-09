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
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "shadcn/ui", level: 85 },
        { name: "daisyUI", level: 80 },
      ],
    },
    {
      name: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Python", level: 70 },
      ],
    },
    {
      name: "database",
      label: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SQL Server", level: 70 },
        { name: "Prisma", level: 85 },
        { name: "Mongoose", level: 85 },
      ],
    },
    {
      name: "devops",
      label: "DevOps",
      skills: [
        { name: "AWS", level: 75 },
        { name: "CloudFormation", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      name: "other",
      label: "Other",
      skills: [
        { name: "Design Patterns", level: 80 },
        { name: "SCRUM", level: 85 },
        { name: "REST API", level: 90 },
        { name: "Microservices", level: 75 },
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
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
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

