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
                Senior Full Stack Software Engineer with 6+ years of experience designing scalable SaaS platforms and
                complex data-driven systems, particularly in fintech, geospatial applications, enterprise automation,
                and national-scale public service platforms.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Proven expertise in Java (Spring Boot), Node.js, Python (FastAPI), React, Next.js, React Native, and
                Flutter. Experienced in leading technical strategy as co-CTO, implementing agile methodologies,
                containerization (Docker), and AI integration.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Strong track record of delivering production-grade systems from concept to deployment, modernizing
                legacy platforms, and improving team productivity across African and European tech ecosystems.
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
                <span>+221 77 280 62 46</span>
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
                    <span className="text-muted-foreground">Native</span>
                  </li>
                  <li className="flex justify-between">
                    <span>French</span>
                    <span className="text-muted-foreground">Professional</span>
                  </li>
                  <li className="flex justify-between">
                    <span>English</span>
                    <span className="text-muted-foreground">Professional Working Proficiency</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Arabic</span>
                    <span className="text-muted-foreground">Basic</span>
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
