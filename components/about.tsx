"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Talented Full Stack Developer with over 4 years of experience specializing in building robust web
                applications using Next.js, React, Node.js and Fast API. Proven track record of delivering clean,
                efficient, and reliable code tailored to meet project requirements. Adept in modern software development
                trends and methodologies and committed to continuous learning and improvement.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I enjoy working on challenging projects that push me to learn new technologies and improve my skills. My
                experience spans from frontend development with React and Next.js to backend systems with Node.js,
                NestJS, and FastAPI, along with database management using MongoDB, PostgreSQL, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary h-5 w-5" />
                <span>Dakar, Senegal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary h-5 w-5" />
                <span>+221 76 271 4888</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-5 w-5" />
                <span>ryhow99@gmail.com</span>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-2">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Wolof</span>
                    <span className="text-muted-foreground">First Language</span>
                  </li>
                  <li className="flex justify-between">
                    <span>French</span>
                    <span className="text-muted-foreground">Proficient</span>
                  </li>
                  <li className="flex justify-between">
                    <span>English</span>
                    <span className="text-muted-foreground">B1</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Arabic</span>
                    <span className="text-muted-foreground">Elementary</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

