"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "LuData",
      description:
        "A full-stack web application for scenario analysis with user authentication, report generation, and admin features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TailwindCSS", "DaisyUI", "FastAPI", "MongoDB"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "EKO Sensor Insights",
      description:
        "A platform for a solar energy company to manage, store, and analyze sensor data with automated quality checks.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TailwindCSS", "SQLite", "FastAPI", "Python"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "E-Huissier",
      description:
        "Process automation solution for bailiff offices with document management, digital signatures, and client portal.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "React Query", "TailwindCSS", "MongoDB", "NestJS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "MyFeedback",
      description: "SaaS platform for collecting client feedback and ratings for services provided within a company.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TailwindCSS", "Prisma", "MongoDB", "Redux TLK", "NestJS", "AWS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.links.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

