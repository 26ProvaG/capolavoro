"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Instagram, Mail, ArrowRight, Code, Cpu, MenuIcon } from "lucide-react" // Added MenuIcon
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Added Sheet components

export default function Portfolio() {
  const projects = [
    {
      title: "Rover a due ruote",
      description: "Un progetto basato sul microcontrollore Espressif ESP32 S3 e materiali di riciclo",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["ESP32", "IoT", "Arduino", "PCB Design"],
      type: "Hardware",
      website: "https://rover-gm.netlify.app/", // Placeholder URL
    },
    {
      title: "Smart Home Dashboard",
      description: "A web-based dashboard for controlling smart home devices and visualizing sensor data in real-time.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "Tailwind CSS", "MQTT", "Node.js"],
      type: "Software",
      website: "#", // Placeholder URL
    },
    {
      title: "AI-Powered Robot Arm",
      description: "Robotic arm controlled by computer vision for object recognition and manipulation tasks.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "OpenCV", "ROS", "Robotics"],
      type: "Hardware",
      website: "#", // Placeholder URL
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, and secure payments.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      type: "Software",
      website: "#", // Placeholder URL
    },
    {
      title: "Custom Mechanical Keyboard",
      description: "Designed and built a custom mechanical keyboard with programmable macros and RGB lighting.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["KiCad", "QMK Firmware", "3D Printing", "Electronics"],
      type: "Hardware",
      website: "#", // Placeholder URL
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable chat application with real-time messaging, user presence, and group chat features.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Socket.IO", "Express.js", "MongoDB"],
      type: "Software",
      website: "#", // Placeholder URL
    },
  ]

  const skills = [
    "Python",
    "C++",
    "React/Next.js",
    "Arduino",
    "Raspberry Pi",
    "ESP32",
    "IoT",
    "Machine Learning",
    "3D Printing",
    "PCB Design",
    "Web Development",
    "Database Management",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 py-4 md:py-5">
          {" "}
          {/* Adjusted padding for mobile */}
          <div className="flex justify-end items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Navigation (Hamburger Menu) */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white/95 backdrop-blur-xl p-6">
                  <nav className="flex flex-col gap-6 pt-8">
                    <Link
                      href="#home"
                      className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="#projects"
                      className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      href="#about"
                      className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="#contact"
                      className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-36 pb-28 px-4 md:px-6 overflow-hidden">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black mb-6 md:mb-8 leading-tight md:leading-[0.9] tracking-tight">
              {" "}
              {/* Adjusted font size for mobile */}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                I miei Lavori
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed font-light tracking-wide">
              {" "}
              {/* Adjusted font size for mobile */}
              Progettazione di sistemi elettronici dotati di microcontrollori in combinazione ad altre componenti per
              creare progetti creativi ed innovativi.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 hover:from-blue-700 hover:via-blue-800 hover:to-green-700 text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-base tracking-wide border-0 relative overflow-hidden group" // Adjusted padding for mobile
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">Esplora Progetti</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>
        {/* Enhanced gradient background */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-blue-50/80 via-blue-25/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-green-50/60 via-green-25/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50/40 to-transparent"></div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-50/50 to-white">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            {" "}
            {/* Adjusted margin */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-800 tracking-tight">
              {" "}
              {/* Adjusted font size for mobile */}
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {"Progetti"}
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {" "}
              {/* Adjusted font size for mobile */}
              Una rubrica di tutti i miei progetti riguardanti l'IoT e l'elettronica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {" "}
            {/* Ensured 1 column on mobile */}
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" // Adjusted image height
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border-0 shadow-lg ${
                          project.type === "Hardware"
                            ? "bg-orange-100/90 text-orange-700 shadow-orange-200/50"
                            : "bg-blue-100/90 text-blue-700 shadow-blue-200/50"
                        }`}
                      >
                        {project.type === "Hardware" ? (
                          <Cpu className="w-3 h-3 mr-1.5 inline-block" />
                        ) : (
                          <Code className="w-3 h-3 mr-1.5 inline-block" />
                        )}
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-7">
                  {" "}
                  {/* Adjusted padding */}
                  <CardTitle className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                    {" "}
                    {/* Adjusted font size */}
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4 md:mb-5 leading-relaxed font-light">
                    {" "}
                    {/* Adjusted font size */}
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                    {" "}
                    {/* Adjusted margin */}
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-slate-300/60 text-slate-600 bg-slate-50/50 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 rounded-lg px-2.5 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-semibold rounded-xl py-2.5 group/btn"
                  >
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      View Details{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              {" "}
              {/* Adjusted margin */}
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-800 tracking-tight py-0">
                {" "}
                {/* Adjusted font size */}
                About{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {" "}
              {/* Ensured 1 column on mobile */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-light shadow-none py-3 my-4 text-left">
                  {" "}
                  {/* Adjusted font size */}
                  Sono un diciasettene come tanti altri ma grazie alla mia curiosità è nata la scintilla che mi ha fatto
                  scoprire il mondo dell'elettronica e dell'IoT. Cerco di trovare soluzioni pratiche ed innovative ai
                  problemi quotidiani o altrimenti cerco di creare qualcosa fuori dagli schemi pensando sempre che la
                  tecnologia debba essere sempre al servizio di tutti.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {" "}
                  {/* Used flex-wrap for better mobile layout */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 bg-transparent transition-all duration-300 rounded-xl px-6 py-2.5 font-medium shadow-lg"
                  >
                    <a href="https://github.com/26Giammy" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 bg-transparent transition-all duration-300 rounded-xl px-6 py-2.5 font-medium shadow-lg"
                  >
                    <a href="https://instagram.com/gianmarco.marino" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-lg">
                {" "}
                {/* Adjusted padding */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}
                  {/* Adjusted font size */}
                  Skills &amp; Tecnologie
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {" "}
                  {/* Adjusted gap */}
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/80 text-slate-700 border border-slate-200/60 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all duration-300 px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-medium shadow-sm hover:shadow-md" // Adjusted padding
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-50/50 to-white">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-800 tracking-tight">
              {" "}
              {/* Adjusted font size */}
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              {" "}
              {/* Adjusted font size */}
              Vuoi collaborare con me o hai un'idea per un progetto? Non esitare a contattarmi!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              {" "}
              {/* Ensured 1 column on mobile */}
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <CardContent className="p-6 md:p-8 text-center">
                  {" "}
                  {/* Adjusted padding */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {" "}
                    {/* Adjusted size */}
                    <Mail className="w-7 h-7 md:w-8 md:h-8 text-blue-600" /> {/* Adjusted icon size */}
                  </div>
                  <h3 className="font-bold mb-1 md:mb-2 text-slate-800 text-base md:text-lg">Email</h3>{" "}
                  {/* Adjusted font size */}
                  <p className="text-slate-600 text-sm font-medium">marigiam026@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-1 md:mb-2 text-slate-800 text-base md:text-lg">GitHub</h3>
                  <p className="text-slate-600 text-sm font-medium">26Giammy</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-1 md:mb-2 text-slate-800 text-base md:text-lg">Instagram</h3>
                  <p className="text-slate-600 text-sm font-medium">gianmarco.marino</p>
                </CardContent>
              </Card>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 hover:from-blue-700 hover:via-blue-800 hover:to-green-700 text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-base tracking-wide border-0 relative overflow-hidden group"
            >
              <a href="mailto:marigiam026@gmail.com">
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  Start a Conversation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-slate-200/60 bg-white">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto text-center">
          <p className="text-slate-500 text-xs md:text-sm font-light tracking-wide">
            {" "}
            {/* Adjusted font size */}© {new Date().getFullYear()} Gianmarco Marino. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
