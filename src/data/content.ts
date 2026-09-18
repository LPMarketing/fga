import { FAQItem, DifferentialItem, ProcessStep, PracticeCardItem } from '../types';

export const WHATSAPP_RAW = '5562992585232';
export const WHATSAPP_DISPLAY = '(62) 99258-5232';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_RAW}`;
export const DEFAULT_WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dr. Frederico. Encontrei o site da FGA Advocacia e gostaria de informações sobre atendimento jurídico.'
);
export const WHATSAPP_DEFAULT_LINK = `${WHATSAPP_BASE_URL}?text=${DEFAULT_WHATSAPP_MSG}`;

export const OAB_PLACEHOLDER = 'OAB/GO 78.318';

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Apresente seu Caso', href: '#contato' },
  { label: 'Especialidades', href: '#areas' },
  { label: 'Dúvidas Frequentes', href: '#duvidas' },
];

export const PREVIDENCIARIO_ITEMS: PracticeCardItem[] = [
  {
    id: 'prev-1',
    title: 'Aposentadorias',
    description:
      'Orientação e análise jurídica relacionada aos diferentes tipos de aposentadoria e requisitos previdenciários.',
    category: 'previdenciario',
  },
  {
    id: 'prev-2',
    title: 'Benefícios por Incapacidade',
    description:
      'Análise de situações envolvendo incapacidade laboral e benefícios previdenciários correspondentes.',
    category: 'previdenciario',
  },
  {
    id: 'prev-3',
    title: 'Pensão por Morte',
    description:
      'Orientação jurídica para dependentes e análise do preenchimento dos requisitos legais.',
    category: 'previdenciario',
  },
  {
    id: 'prev-4',
    title: 'Benefício Assistencial — BPC/LOAS',
    description:
      'Análise jurídica sobre os requisitos relacionados ao benefício assistencial.',
    category: 'previdenciario',
  },
  {
    id: 'prev-5',
    title: 'Revisão de Benefícios',
    description:
      'Avaliação da possibilidade jurídica de revisão de benefícios previdenciários.',
    category: 'previdenciario',
  },
  {
    id: 'prev-6',
    title: 'Planejamento Previdenciário',
    description:
      'Análise do histórico contributivo com objetivo de proporcionar maior compreensão sobre possibilidades futuras de aposentadoria.',
    category: 'previdenciario',
  },
];

export const SERVIDOR_ITEMS: PracticeCardItem[] = [
  {
    id: 'serv-1',
    title: 'Aposentadoria do Servidor Público',
    description: 'Análise de regimes próprios (RPPS), regras de transição e paridade/integralidade.',
    category: 'servidor',
  },
  {
    id: 'serv-2',
    title: 'Direitos Funcionais',
    description: 'Assessoria em direitos estatutários, licenças, afastamentos e garantias do cargo.',
    category: 'servidor',
  },
  {
    id: 'serv-3',
    title: 'Processos Administrativos',
    description: 'Acompanhamento e defesa técnica em PADs e sindicâncias no âmbito administrativo.',
    category: 'servidor',
  },
  {
    id: 'serv-4',
    title: 'Revisão de Aposentadoria',
    description: 'Exame jurídico da fixação de proventos, gratificações e critérios de cálculo aplicados.',
    category: 'servidor',
  },
  {
    id: 'serv-5',
    title: 'Progressões e Vantagens Funcionais',
    description: 'Pleito e regularização de promoções, adicionais por tempo de serviço e títulos.',
    category: 'servidor',
  },
  {
    id: 'serv-6',
    title: 'Questões Remuneratórias',
    description: 'Revisão de desvios de função, defasagens de vencimentos e restituição de descontos indevidos.',
    category: 'servidor',
  },
  {
    id: 'serv-7',
    title: 'Defesa de Direitos do Servidor',
    description: 'Atuação judicial e extrajudicial em defesa integral das garantias funcionais.',
    category: 'servidor',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Primeiro Contato',
    description: 'O cliente apresenta brevemente sua situação e solicita atendimento.',
  },
  {
    step: '02',
    title: 'Análise Inicial',
    description: 'São identificadas as principais informações e documentos relacionados ao caso.',
  },
  {
    step: '03',
    title: 'Avaliação Jurídica',
    description: 'A situação é analisada considerando a legislação aplicável e as particularidades apresentadas.',
  },
  {
    step: '04',
    title: 'Orientação',
    description: 'O cliente recebe informações sobre possíveis alternativas e próximos passos jurídicos.',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: 'Atendimento Individualizado',
    description: 'Cada situação é analisada considerando suas próprias particularidades.',
    iconName: 'user-check',
  },
  {
    title: 'Clareza na Comunicação',
    description: 'Informações jurídicas apresentadas de maneira objetiva e compreensível.',
    iconName: 'message-square',
  },
  {
    title: 'Responsabilidade Profissional',
    description: 'Atuação ética e cuidadosa em todas as etapas do atendimento.',
    iconName: 'shield',
  },
  {
    title: 'Acompanhamento',
    description: 'Comunicação durante o desenvolvimento das demandas jurídicas.',
    iconName: 'activity',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o primeiro atendimento?',
    answer:
      'O cliente apresenta sua situação e as principais informações relacionadas ao caso. A partir disso, é possível identificar quais documentos e informações adicionais serão necessários para a análise.',
  },
  {
    id: 'faq-2',
    question: 'Quais documentos preciso apresentar?',
    answer:
      'Os documentos dependem do tipo de demanda. Após o primeiro contato, serão indicados os documentos necessários para análise do caso.',
  },
  {
    id: 'faq-3',
    question: 'O atendimento pode ser realizado online?',
    answer:
      'Consulte a disponibilidade de atendimento presencial ou por meios digitais entrando em contato com o escritório.',
  },
  {
    id: 'faq-4',
    question: 'O escritório garante o resultado do processo?',
    answer:
      'Não. Nenhum resultado jurídico pode ser garantido previamente. Cada caso depende de suas circunstâncias específicas, documentos, legislação aplicável e da análise das autoridades competentes.',
  },
  {
    id: 'faq-5',
    question: 'Como falar diretamente com o escritório?',
    answer: `Entre em contato pelo WhatsApp através do número ${WHATSAPP_DISPLAY}.`,
  },
];
