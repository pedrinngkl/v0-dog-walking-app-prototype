import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Star,
  Heart,
  Award,
  GraduationCap,
  Calendar,
  DollarSign,
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function SpecialistProfile({ params }: { params: { id: string } }) {
  // Mock data - em produção viria de uma API
  const specialist = {
    id: params.id,
    name: "Dr. Ana Reptiliana",
    title: "Veterinária Especialista em Répteis",
    rating: 4.9,
    reviews: 127,
    location: "Vila Madalena, SP",
    experience: "8 anos",
    education: "Veterinária - USP",
    specialties: ["Répteis", "Anfíbios", "Quelônios"],
    image: "/woman-smiling-dog.png",
    badges: ["Veterinária", "Certificado IBAMA", "Emergência 24h", "Cirurgia"],
    bio: "Especialista em medicina veterinária de animais exóticos com foco em répteis e anfíbios. Formada pela USP com pós-graduação em medicina de animais silvestres. Atua há 8 anos no cuidado especializado de animais exóticos.",
    certifications: [
      "Medicina Veterinária - USP (2016)",
      "Pós-graduação em Animais Silvestres - ANCLIVEPA (2018)",
      "Certificação IBAMA para Fauna Silvestre (2019)",
      "Curso Avançado em Cirurgia de Répteis - ARAV (2021)",
    ],
    services: [
      {
        name: "Consulta Veterinária",
        description: "Exame clínico completo, diagnóstico e orientações",
        price: 150,
        duration: "60 min",
        frequency: "Conforme necessidade",
      },
      {
        name: "Cuidado Domiciliar",
        description: "Visita para cuidados básicos, alimentação e monitoramento",
        price: 120,
        duration: "45 min",
        frequency: "Semanal recomendado",
      },
      {
        name: "Emergência 24h",
        description: "Atendimento emergencial para situações críticas",
        price: 300,
        duration: "Conforme necessário",
        frequency: "Sob demanda",
      },
    ],
    plans: [
      {
        name: "Plano Básico",
        type: "weekly",
        price: 120,
        originalPrice: 150,
        discount: "20%",
        description: "1 visita por semana",
        features: ["Cuidado domiciliar", "Relatório semanal", "Suporte via WhatsApp"],
      },
      {
        name: "Plano Completo",
        type: "monthly",
        price: 400,
        originalPrice: 600,
        discount: "33%",
        description: "4 visitas por mês + consulta",
        features: [
          "4 visitas domiciliares",
          "1 consulta veterinária",
          "Relatórios detalhados",
          "Suporte 24h",
          "Desconto em emergências",
        ],
      },
    ],
    recentReviews: [
      {
        name: "Carlos M.",
        rating: 5,
        date: "2 dias atrás",
        comment:
          "Excelente profissional! Minha iguana estava com problemas de alimentação e a Dra. Ana resolveu rapidamente. Muito atenciosa e conhecedora.",
        animal: "Iguana Verde",
      },
      {
        name: "Marina S.",
        rating: 5,
        date: "1 semana atrás",
        comment:
          "Salvou meu jabuti! Atendimento emergencial impecável, chegou rapidamente e soube exatamente o que fazer.",
        animal: "Jabuti Piranga",
      },
    ],
    stats: {
      totalAnimals: 89,
      emergenciesHandled: 23,
      successRate: 98,
      responseTime: "< 2h",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🦎</span>
            </div>
            <span className="font-bold text-xl text-foreground">ExoticCare</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">Voltar à Busca</Link>
          </Button>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={specialist.image || "/placeholder.svg"} alt={specialist.name} />
                    <AvatarFallback className="text-2xl">
                      {specialist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-1">{specialist.name}</CardTitle>
                        <p className="text-muted-foreground mb-2">{specialist.title}</p>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{specialist.rating}</span>
                            <span className="text-muted-foreground">({specialist.reviews} avaliações)</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {specialist.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-3">
                          <GraduationCap className="h-4 w-4" />
                          {specialist.education} • {specialist.experience} de experiência
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {specialist.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{specialist.bio}</p>
                <Separator className="my-4" />
                <div>
                  <h4 className="font-semibold mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {specialist.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="border-primary text-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Animais Cuidados</span>
                  <span className="font-semibold">{specialist.stats.totalAnimals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergências</span>
                  <span className="font-semibold">{specialist.stats.emergenciesHandled}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxa de Sucesso</span>
                  <span className="font-semibold text-secondary">{specialist.stats.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tempo Resposta</span>
                  <span className="font-semibold">{specialist.stats.responseTime}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contato Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Serviços & Planos</TabsTrigger>
            <TabsTrigger value="certifications">Certificações</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            <TabsTrigger value="schedule">Agendar</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            {/* Individual Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Serviços Individuais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialist.services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Preço:</span>
                          <span className="font-semibold">R$ {service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duração:</span>
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Frequência:</span>
                          <span className="text-sm">{service.frequency}</span>
                        </div>
                      </div>
                      <Button className="w-full" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Agendar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Plans */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Planos com Desconto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialist.plans.map((plan, index) => (
                  <Card key={index} className="relative">
                    {plan.discount && (
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.discount} OFF
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold">R$ {plan.price}</span>
                          <span className="text-muted-foreground">/{plan.type === "weekly" ? "semana" : "mês"}</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">De R$ {plan.originalPrice}</div>
                        )}
                      </div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Contratar Plano
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certificações e Formação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {specialist.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{cert}</div>
                        <div className="text-sm text-muted-foreground">Verificado ✓</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Avaliações dos Clientes</CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">{specialist.rating}</span>
                    </div>
                    <div className="text-muted-foreground">Baseado em {specialist.reviews} avaliações</div>
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-4">
                {specialist.recentReviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {review.animal} • {review.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Agendar Consulta</CardTitle>
                <p className="text-muted-foreground">
                  Escolha o serviço e horário desejado. O pagamento será processado de forma segura e liberado 3 dias
                  após a confirmação do serviço.
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sistema de Agendamento</h3>
                  <p className="text-muted-foreground mb-4">
                    Funcionalidade em desenvolvimento. Em breve você poderá agendar diretamente pela plataforma.
                  </p>
                  <Button>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
