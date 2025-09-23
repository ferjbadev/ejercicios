import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"

const projectsData = {
  "web-app": {
    title: "Aplicación Web Moderna",
    description: "Una aplicación web completa construida con React, Next.js y TypeScript",
    longDescription:
      "Este proyecto incluye autenticación de usuarios, gestión de estado, integración con APIs, y un diseño responsive. Perfecto para aprender las mejores prácticas de desarrollo web moderno.",
    features: [
      "Autenticación con NextAuth.js",
      "Base de datos con Prisma",
      "Diseño responsive con Tailwind CSS",
      "Gestión de estado con Zustand",
      "API Routes optimizadas",
      "Despliegue en Vercel",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js"],
  },
  "mobile-ui": {
    title: "Interfaz Móvil Responsive",
    description: "Diseño de interfaz optimizado para dispositivos móviles",
    longDescription:
      "Aprende a crear interfaces que se adapten perfectamente a cualquier dispositivo. Incluye componentes reutilizables, animaciones suaves y navegación intuitiva.",
    features: [
      "Diseño mobile-first",
      "Componentes reutilizables",
      "Animaciones con Framer Motion",
      "Navegación por gestos",
      "Optimización de rendimiento",
      "PWA ready",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Styled Components", "Framer Motion"],
  },
  dashboard: {
    title: "Dashboard Analítico",
    description: "Panel de control con gráficos interactivos y métricas en tiempo real",
    longDescription:
      "Construye un dashboard completo con visualización de datos, gráficos interactivos y métricas en tiempo real. Ideal para aplicaciones de administración y análisis.",
    features: [
      "Gráficos con Chart.js",
      "Datos en tiempo real",
      "Filtros avanzados",
      "Exportación de reportes",
      "Notificaciones push",
      "Tema claro/oscuro",
    ],
    tech: ["Next.js", "Chart.js", "Socket.io", "Redis", "PostgreSQL", "Tailwind CSS"],
  },
  "landing-page": {
    title: "Landing Page Impactante",
    description: "Página de aterrizaje optimizada para conversiones",
    longDescription:
      "Crea una landing page que convierta visitantes en clientes. Incluye secciones optimizadas, formularios de contacto y integración con herramientas de marketing.",
    features: [
      "Diseño orientado a conversión",
      "Formularios optimizados",
      "Integración con CRM",
      "SEO optimizado",
      "Analytics integrado",
      "A/B testing ready",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form", "Vercel Analytics"],
  },
  "api-project": {
    title: "API REST Avanzada",
    description: "API robusta con autenticación, validación y documentación",
    longDescription:
      "Desarrolla una API REST completa con todas las mejores prácticas. Incluye autenticación JWT, validación de datos, documentación automática y testing.",
    features: [
      "Autenticación JWT",
      "Validación con Zod",
      "Documentación con Swagger",
      "Rate limiting",
      "Testing automatizado",
      "Monitoreo y logs",
    ],
    tech: ["Node.js", "Express", "TypeScript", "Prisma", "JWT", "Swagger", "Jest"],
  },
  "interactive-demo": {
    title: "Demo Interactivo",
    description: "Experiencia interactiva con animaciones y efectos visuales",
    longDescription:
      "Crea una demostración interactiva que cautive a los usuarios. Incluye animaciones complejas, efectos visuales y interacciones avanzadas.",
    features: [
      "Animaciones con Three.js",
      "Efectos de partículas",
      "Interacciones por mouse",
      "Transiciones suaves",
      "Optimización de rendimiento",
      "Experiencia inmersiva",
    ],
    tech: ["React", "Three.js", "Framer Motion", "GSAP", "WebGL", "TypeScript"],
  },
}

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver a proyectos
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-balance mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Descripción del Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Características Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project Demo Area */}
            <Card>
              <CardHeader>
                <CardTitle>Vista Previa del Proyecto</CardTitle>
                <CardDescription>Aquí puedes comenzar a desarrollar tu proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">¡Comienza aquí!</h3>
                  <p className="text-muted-foreground mb-4">
                    Este es tu espacio para desarrollar el proyecto. Puedes agregar componentes, lógica y
                    funcionalidades específicas.
                  </p>
                  <Button>Comenzar desarrollo</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Ver demo en vivo
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Github className="w-4 h-4" />
                  Ver código fuente
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tecnologías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-chart-1 rounded-full" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recursos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  📚 Documentación
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  🎥 Video tutorial
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  💬 Comunidad
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
