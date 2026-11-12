"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <GraduationCap className="w-8 h-8 text-primary mt-1" />
              <div>
                <CardTitle>Master, Computer Science</CardTitle>
                <CardDescription>GoMyCode School of Technology (WOOLF accreditation) — Online</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span className="font-medium">GoMyCode School of Technology</span>
                <Badge variant="outline">2025</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <GraduationCap className="w-8 h-8 text-primary mt-1" />
              <div>
                <CardTitle>University Diploma of Technology</CardTitle>
                <CardDescription>Computer Engineering</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">École Supérieure Polytechnique de Dakar</span>
                  <Badge variant="outline">2021</Badge>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>A two year of intense learning</li>
                  <li>Algorithms, Mathematics, Network Administration</li>
                  <li>System Administration with Linux</li>
                  <li>Database Administration with MySQL, ORACLE and PL/SQL</li>
                  <li>Programming Language HTML, CSS, JavaScript, C, Java, JavaEE</li>
                  <li>Communication</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <GraduationCap className="w-8 h-8 text-primary mt-1" />
              <div>
                <CardTitle>Baccalauréat</CardTitle>
                <CardDescription>S1 (Mathematics & Physics Specialities)</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lycée Seydina LimamouLaye</span>
                  <Badge variant="outline">2017</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Award className="w-8 h-8 text-primary mt-1" />
              <div>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>GoMyCode / Coursera</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Fullstack MERN</span>
                  <Badge variant="outline">2021</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Introduction to Data Engineering</span>
                  <Badge variant="outline">2024</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Introduction to DevOps</span>
                  <Badge variant="outline">2024</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Python for Data Science, AI &amp; Development</span>
                  <Badge variant="outline">2025</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Introduction to Cloud Computing</span>
                  <Badge variant="outline">2025</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
