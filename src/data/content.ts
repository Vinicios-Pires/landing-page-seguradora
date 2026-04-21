import { Car, Heart, Home, Building2, Activity, Plane, Shield, CheckCircle, Zap, TrendingDown, Clock, Star, ClipboardList, FileText, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  Icon: LucideIcon
  title: string
  description: string
}

export interface DifferentialItem {
  Icon: LucideIcon
  title: string
  description: string
}

export interface StepItem {
  number: string
  Icon: LucideIcon
  title: string
  description: string
}

export interface TestimonialItem {
  name: string
  city: string
  initials: string
  rating: number
  product: string
  text: string
}

export interface FAQItem {
  question: string
  answer: string
}

export const STATS = [
  { value: 50000, suffix: '+', label: 'Clientes Protegidos' },
  { value: 18, suffix: '+', label: 'Anos de Experiência' },
  { value: 200, suffix: '+', label: 'Coberturas Disponíveis' },
  { value: 98, suffix: '%', label: 'Índice de Satisfação' },
]

export const SERVICES: ServiceItem[] = [
  {
    Icon: Car,
    title: 'Seguro Auto',
    description: 'Proteção completa para o seu veículo contra colisões, roubo, furto e danos a terceiros. Assistência 24h em qualquer lugar do país.',
  },
  {
    Icon: Heart,
    title: 'Seguro de Vida',
    description: 'Garanta o futuro da sua família com coberturas para morte, invalidez e doenças graves. Planos a partir de valores acessíveis.',
  },
  {
    Icon: Home,
    title: 'Seguro Residencial',
    description: 'Proteja sua casa contra incêndio, inundações, roubo e danos elétricos. Inclui assistência para reparos emergenciais.',
  },
  {
    Icon: Building2,
    title: 'Seguro Empresarial',
    description: 'Soluções sob medida para proteger seu negócio, equipamentos, responsabilidade civil e interrupção de atividades.',
  },
  {
    Icon: Activity,
    title: 'Seguro Saúde',
    description: 'Acesso a uma rede credenciada com hospitais, clínicas e laboratórios de excelência. Cobertura nacional e internacional.',
  },
  {
    Icon: Plane,
    title: 'Seguro Viagem',
    description: 'Viaje com tranquilidade tendo cobertura para cancelamento, extravio de bagagem, emergências médicas e assistência jurídica.',
  },
]

export const WHY_US: DifferentialItem[] = [
  {
    Icon: Clock,
    title: 'Atendimento 24/7',
    description: 'Nossa central de atendimento está disponível 24 horas por dia, 7 dias por semana, para garantir suporte em qualquer situação.',
  },
  {
    Icon: CheckCircle,
    title: 'Cobertura Completa',
    description: 'Mais de 200 coberturas disponíveis para atender às suas necessidades com flexibilidade e sem burocracia.',
  },
  {
    Icon: Zap,
    title: 'Aprovação Rápida',
    description: 'Processo de análise ágil com resposta em até 2 horas. Contratação 100% digital, sem papelada.',
  },
  {
    Icon: TrendingDown,
    title: 'Preços Competitivos',
    description: 'As melhores condições do mercado com parcelamento em até 12x sem juros. Cotar é gratuito e sem compromisso.',
  },
]

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '01',
    Icon: ClipboardList,
    title: 'Escolha sua Cobertura',
    description: 'Navegue pelos nossos planos e selecione a cobertura que melhor atende às suas necessidades e ao seu orçamento.',
  },
  {
    number: '02',
    Icon: FileText,
    title: 'Receba sua Proposta',
    description: 'Em até 2 horas nossa equipe entra em contato com uma proposta personalizada e todos os detalhes da cobertura.',
  },
  {
    number: '03',
    Icon: ShieldCheck,
    title: 'Ative sua Proteção',
    description: 'Aprove a proposta, efetue o pagamento de forma digital e sua proteção é ativada imediatamente. É simples assim.',
  },
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Carlos Eduardo Lima',
    city: 'São Paulo, SP',
    initials: 'CE',
    rating: 5,
    product: 'Seguro Auto',
    text: 'Tive um sinistro e o atendimento foi impecável. Em menos de 24 horas já estava com meu carro no guincho e o processo de indenização iniciado. Recomendo a Vanguarda sem hesitar!',
  },
  {
    name: 'Mariana Fonseca',
    city: 'Belo Horizonte, MG',
    initials: 'MF',
    rating: 5,
    product: 'Seguro de Vida',
    text: 'Contratei o seguro de vida há dois anos e a tranquilidade que isso trouxe para minha família não tem preço. O processo foi super simples e o preço muito justo.',
  },
  {
    name: 'Roberto Nascimento',
    city: 'Curitiba, PR',
    initials: 'RN',
    rating: 5,
    product: 'Seguro Residencial',
    text: 'Após um problema elétrico na minha casa, a Vanguarda resolveu tudo rapidamente. A assistência enviou um técnico no mesmo dia. Excelente empresa!',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'O que é franquia e como ela funciona?',
    answer: 'A franquia é o valor que o segurado participa no pagamento do conserto em caso de sinistro. Por exemplo, se o conserto custar R$ 5.000 e a franquia for R$ 1.000, a seguradora paga R$ 4.000 e você paga R$ 1.000. Quanto maior a franquia escolhida, menor o valor do prêmio mensal.',
  },
  {
    question: 'Quais são os documentos necessários para contratar um seguro?',
    answer: 'Para a maioria dos seguros, precisamos apenas de CPF, RG e comprovante de residência. Para seguro auto, também é necessário o CRLV do veículo. Todo o processo é digital e pode ser feito pelo nosso site ou aplicativo.',
  },
  {
    question: 'Como funciona o processo de sinistro?',
    answer: 'Em caso de sinistro, entre em contato com nossa central 24/7 pelo telefone ou aplicativo. Nosso time irá guiá-lo em todos os passos, desde o acionamento até a conclusão. A maioria dos sinistros é resolvida em até 10 dias úteis.',
  },
  {
    question: 'Posso cancelar meu seguro a qualquer momento?',
    answer: 'Sim, você pode cancelar seu seguro a qualquer momento. Nos primeiros 7 dias após a contratação, você tem direito ao arrependimento com devolução integral do valor pago. Após esse prazo, o cancelamento gera restituição proporcional ao período não utilizado.',
  },
  {
    question: 'Meu seguro cobre danos causados por terceiros?',
    answer: 'Depende da cobertura contratada. O seguro com cobertura de responsabilidade civil cobre danos que você cause a terceiros. Já os danos que terceiros causem ao seu veículo ou propriedade dependem da cobertura de colisão e do tipo de apólice escolhida.',
  },
  {
    question: 'Como funciona a renovação automática do seguro?',
    answer: 'Seu seguro é renovado automaticamente 30 dias antes do vencimento. Você receberá um aviso por e-mail e SMS com as novas condições e valores. Se não desejar renovar, basta nos informar até 15 dias antes do vencimento.',
  },
  {
    question: 'É possível incluir condutores adicionais no seguro auto?',
    answer: 'Sim! Você pode incluir até 3 condutores adicionais no seu seguro auto. O perfil de cada condutor influencia no cálculo do prêmio. Recomendamos sempre manter os condutores atualizados para garantir a cobertura adequada.',
  },
  {
    question: 'A Vanguarda é regulamentada pela SUSEP?',
    answer: 'Sim, a Vanguarda Seguros é uma empresa devidamente registrada e regulamentada pela SUSEP (Superintendência de Seguros Privados), garantindo total segurança e conformidade com a legislação brasileira de seguros.',
  },
]

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Por Que Nós', href: '#por-que-nos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export const FOOTER_LINKS = {
  servicos: [
    'Seguro Auto',
    'Seguro de Vida',
    'Seguro Residencial',
    'Seguro Empresarial',
    'Seguro Saúde',
    'Seguro Viagem',
  ],
  empresa: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Imprensa', href: '#' },
    { label: 'Contato', href: '#' },
  ],
}

export { Shield, Star }
