import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react"

const projects = [
  {
    id: "web-app",
    title: "Aplicación Web",
    description: "Crea una aplicación web moderna con React y Next.js",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile-ui",
    title: "Interfaz Móvil",
    description: "Diseña una interfaz móvil responsive y atractiva",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Construye un panel de control con gráficos y métricas",
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Desarrolla una página de aterrizaje impactante",
    icon: Palette,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "api-project",
    title: "Proyecto API",
    description: "Implementa una API REST con funcionalidades avanzadas",
    icon: Code,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "interactive-demo",
    title: "Demo Interactivo",
    description: "Crea una demostración interactiva con animaciones",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-balance mb-6">Comienza a construir en segundos</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Inicia tu próximo proyecto con plantillas construidas por nosotros y nuestra comunidad. Elige un proyecto y
            comienza a desarrollar.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-border/50 hover:border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg">
              Ver todos los ejemplos
            </Button>
            <Button variant="ghost" size="lg">
              Biblioteca oficial de GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
