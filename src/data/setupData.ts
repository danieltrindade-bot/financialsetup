export const heroCards = [
  { title: "DRE gerencial confiável", icon: "BarChart3" },
  { title: "Fluxo de caixa projetado (90 dias)", icon: "TrendingUp" },
  { title: "Visão do ciclo financeiro", icon: "RefreshCw" },
  { title: "Plano de contas estruturado", icon: "FileText" },
  { title: "Integração com Oxy", icon: "Zap" },
  { title: "Governança financeira", icon: "Shield" },
];

export const timelinePhases = [
  { phase: "Diagnóstico", label: "Financial Dataflow Mapping", weeks: "Semanas 1–3", slides: [2, 3, 4] },
  { phase: "Estruturação", label: "Financial Structure Implementation", weeks: "Semanas 3–7", slides: [5, 6] },
  { phase: "Inteligência", label: "Integration & Financial Intelligence", weeks: "Semanas 7–10", slides: [7, 8, 9, 10, 11, 12, 13] },
];

export const diagnosticAreas = [
  { name: "Fluxo financeiro", value: 20, color: "hsl(239, 84%, 67%)" },
  { name: "ERP", value: 15, color: "hsl(215, 25%, 27%)" },
  { name: "Plano de contas", value: 18, color: "hsl(142, 71%, 45%)" },
  { name: "Contas a pagar", value: 15, color: "hsl(48, 96%, 53%)" },
  { name: "Contas a receber", value: 17, color: "hsl(0, 84%, 60%)" },
  { name: "Conciliação", value: 15, color: "hsl(280, 60%, 55%)" },
];

export const diagnosticDeliverables = [
  "Diagnóstico de dados",
  "Diagnóstico de processos",
  "Avaliação ERP",
  "Avaliação plano de contas",
  "Avaliação conciliação",
];

export const radarData = [
  { subject: "Processos", value: 35, fullMark: 100 },
  { subject: "Dados", value: 25, fullMark: 100 },
  { subject: "Governança", value: 20, fullMark: 100 },
  { subject: "Planejamento", value: 30, fullMark: 100 },
  { subject: "Controle", value: 40, fullMark: 100 },
];

export const structureAreas = [
  { name: "Plano de contas", progress: 85 },
  { name: "Contas a pagar", progress: 70 },
  { name: "Contas a receber", progress: 75 },
  { name: "Conciliação bancária", progress: 60 },
  { name: "CPV/CMV", progress: 45 },
  { name: "Fluxo de caixa", progress: 55 },
];

export const structureTable = [
  { frente: "Plano de contas", status: "Implementado", responsavel: "O2" },
  { frente: "Contas a receber", status: "Implementado", responsavel: "Cliente" },
  { frente: "Conciliação", status: "Em implementação", responsavel: "Cliente" },
  { frente: "CPV/CMV", status: "Em implementação", responsavel: "O2" },
];

export const priorityData = [
  { name: "Crítico", value: 30, color: "hsl(0, 84%, 60%)" },
  { name: "Importante", value: 45, color: "hsl(48, 96%, 53%)" },
  { name: "Melhoria", value: 25, color: "hsl(142, 71%, 45%)" },
];

export const integrationFlow = [
  { step: "ERP", description: "Dados brutos" },
  { step: "Oxy", description: "Processamento" },
  { step: "Dashboards", description: "Visualização" },
  { step: "Decisões", description: "Ação estratégica" },
];

export const kpis = [
  { name: "DRE", enabled: true, value: "R$ 2.4M", subtitle: "Receita mensal" },
  { name: "Fluxo de caixa", enabled: true, value: "90 dias", subtitle: "Projeção" },
  { name: "Ciclo financeiro", enabled: true, value: "32 dias", subtitle: "Ciclo operacional" },
  { name: "Margem operacional", enabled: true, value: "18.5%", subtitle: "Margem líquida" },
];

export const executiveCards = [
  { number: "1", title: "Contexto inicial", description: "Cenário financeiro encontrado na empresa antes do setup." },
  { number: "2", title: "Riscos financeiros", description: "Principais riscos mapeados no diagnóstico." },
  { number: "3", title: "Transformações", description: "Mudanças implementadas na estrutura financeira." },
  { number: "4", title: "Resultado financeiro", description: "Ganhos de visibilidade e controle." },
  { number: "5", title: "Próximos passos", description: "Recomendações para evolução contínua." },
];

export const transformationBefore = [
  "Decisões por saldo bancário",
  "Sem projeção de caixa",
  "Margem distorcida",
];

export const transformationAfter = [
  "Leitura mensal de resultado",
  "Previsibilidade de caixa",
  "Visão de capital de giro",
];

export const ritualSemanal = [
  "Saldo de caixa",
  "Contas a pagar",
  "Contas a receber",
  "Projeção",
];

export const ritualMensal = [
  "Análise da DRE",
  "Margem",
  "Capital de giro",
];

export const customerDelightMoments = [
  { number: 1, title: "Diagnóstico financeiro", description: "Primeira visão clara dos dados" },
  { number: 2, title: "Primeira leitura estratégica", description: "DRE confiável pela primeira vez" },
  { number: 3, title: "Go-Live financeiro", description: "Dashboards operacionais ativos" },
];

export const successMetrics = [
  { name: "Transações classificadas", value: 95, color: "hsl(239, 84%, 67%)" },
  { name: "Conciliação padronizada", value: 100, color: "hsl(142, 71%, 45%)" },
  { name: "DRE mensal estruturada", value: 100, color: "hsl(215, 25%, 27%)" },
  { name: "Fluxo de caixa projetado", value: 100, color: "hsl(48, 96%, 53%)" },
  { name: "Time treinado", value: 100, color: "hsl(280, 60%, 55%)" },
];
