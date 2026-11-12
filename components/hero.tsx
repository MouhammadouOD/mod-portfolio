"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary">Mouhammadou Oury</span> Diallo
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Senior Full Stack Software Engineer</h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          6+ years designing scalable SaaS platforms and complex data-driven systems — fintech, geospatial
          applications, enterprise automation, and national-scale public service platforms.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#experience">View Experience</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 pt-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/MouhammadouOD" target="_blank" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/mouhammadouod/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:ryhow99@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
