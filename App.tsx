import React, { useState } from 'react';
import {
  Check,
  BookOpen,
  Calendar,
  Layout,
  MonitorPlay,
  GraduationCap,
  TrendingUp,
  BrainCircuit,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

// --- Icons & UI Components ---

const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "px-8 py-4 font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-none";

  const variants = {
    primary: "bg-aurea-tangerine text-white hover:bg-orange-600",
    secondary: "bg-aurea-blue text-white hover:bg-blue-800",
    outline: "border-2 border-aurea-tangerine text-aurea-tangerine hover:bg-aurea-tangerine hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode; color?: string; align?: 'left' | 'center' }> = ({
  children,
  color = 'text-aurea-ebony',
  align = 'left'
}) => (
  <h2 className={`font-display text-4xl md:text-6xl uppercase tracking-tight mb-8 ${color} ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {children}
  </h2>
);

const ChecklistItem: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light = false }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className={`mt-1 min-w-[24px] ${light ? 'text-aurea-tangerine' : 'text-aurea-blue'}`}>
      <Check size={24} strokeWidth={3} />
    </div>
    <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-aurea-ebony'}`}>
      {children}
    </p>
  </div>
);

// --- Main Page Sections ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-aurea-ebony border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Logo Image */}
          <img src="/aurea.png" alt="Áurea Logo" className="h-10 w-auto object-contain" />
          <span className="font-logo text-3xl text-white font-medium tracking-tight">
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#diferenciais" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Diferenciais</a>
          <a href="#estrutura" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Estrutura</a>
          <a href="#professor" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Professor</a>
          <a href="#precos" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Planos</a>
          <a href="#contato" className="bg-white text-aurea-ebony px-6 py-2 font-bold hover:bg-aurea-tangerine hover:text-white transition-colors uppercase text-sm">
            Matricule-se
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-aurea-ebony border-t border-gray-800 absolute w-full p-6 flex flex-col gap-4 shadow-xl">
          <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Diferenciais</a>
          <a href="#estrutura" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Estrutura</a>
          <a href="#professor" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Professor</a>
          <a href="#precos" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Planos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="text-aurea-tangerine font-bold uppercase">Matricule-se Agora</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-aurea-blue text-white overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-aurea-tangerine opacity-20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6">
            Curso de Matemática<br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Áurea 2025</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light mb-8 max-w-2xl text-gray-200">
            Matemática descomplicada para Enem e vestibulares tradicionais
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl opacity-90">
            Um curso pensado para quem tem dificuldade em Matemática ou quer transformar a disciplina no ponto forte da prova. Aulas práticas, teoria objetiva e foco total em interpretação, resolução de problemas e estratégias para a TRI.
          </p>

          <Button onClick={() => document.getElementById('precos')?.scrollIntoView()}>
            Quero estudar Matemática com o Áurea
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyDifferent = () => {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle>Por que este curso é diferente</SectionTitle>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                O Curso de Matemática Áurea foi construído para tornar a Matemática realmente acessível e eficiente.
              </p>
              <p>
                Nada de fórmulas jogadas sem contexto. Aqui o foco é entender o raciocínio por trás de cada questão, aprender a interpretar comandos e usar a Matemática para ganhar pontos na TRI.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-aurea-tangerine shadow-sm">
            <ChecklistItem>Método único que aproxima Matemática do cotidiano</ChecklistItem>
            <ChecklistItem>Curso completo com aulas práticas e teóricas</ChecklistItem>
            <ChecklistItem>Aulas específicas para Enem e vestibulares tradicionais</ChecklistItem>
            <ChecklistItem>Estratégias para não perder pontos simples por descuido</ChecklistItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const Structure = () => {
  const blocks = [
    {
      title: "Carga horária semanal",
      desc: "Aulas as Terças das 19h às 22h. Início: 24 de fevereiro.",
      icon: <Calendar size={32} />
    },
    {
      title: "Primeiro semestre",
      desc: "Conteúdo completo e apostila com mais de 750 questões resolvidas por QR Code.",
      icon: <BookOpen size={32} />
    },
    {
      title: "Segundo semestre",
      desc: "Revisão por competências e habilidades do Enem com material de 250 questões.",
      icon: <Layout size={32} />
    },
    {
      title: "Plataforma",
      desc: "Acesso à Áurea Prime com PDFs, vídeos e revisões semanais.",
      icon: <MonitorPlay size={32} />
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-aurea-ebony text-white">
      <div className="container mx-auto px-6">
        <SectionTitle color="text-white">Como funciona o Curso de Matemática Áurea 2025?</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {blocks.map((block, i) => (
            <div key={i} className="bg-gray-900/50 p-8 border border-gray-800 hover:border-aurea-blue transition-colors group">
              <div className="text-aurea-tangerine mb-6 group-hover:scale-110 transition-transform duration-300">
                {block.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">{block.title}</h3>
              <p className="text-gray-400 leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Professor = () => {
  return (
    <section id="professor" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Abstract Image Placeholder for Hamilton */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden rounded-sm">
              <img
                src="hamilton.jpg"
                alt="Professor Hamilton Vinícius"
                className="object-cover w-full h-full mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-aurea-blue mix-blend-color opacity-0"></div>
            </div>
            {/* Geometric accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-aurea-tangerine rounded-full z-[-1]"></div>
          </div>

          <div className="md:col-span-7">
            <SectionTitle>Hamilton será o seu professor de Matemática</SectionTitle>

            <div className="space-y-6 text-lg text-gray-700 mb-8">
              <p className="font-medium text-xl">Hamilton Vinícius é mestre em Modelagem Computacional e especialista em Enem.</p>
              <p>Une Matemática, tecnologia e experiência de sala de aula para criar um curso dinâmico e direto.</p>
            </div>

            <div className="bg-gray-100 p-8 mb-8 rounded-sm">
              <h4 className="font-bold text-aurea-blue mb-4 uppercase tracking-wide">Com ele você vai</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-aurea-tangerine rounded-full"></div>
                  <span>Entender o porquê de cada passo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-aurea-tangerine rounded-full"></div>
                  <span>Aprender a escolher o melhor caminho na questão</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-aurea-tangerine rounded-full"></div>
                  <span>Usar a Matemática para alavancar sua nota</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-aurea-blue pl-6 italic text-xl md:text-2xl font-display text-aurea-ebony">
              "Com o Hamilton você vai descobrir que a Matemática é mais simples do que parece."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "30% de desconto até 31/12 para alunos novos",
    "Acesso à plataforma Áurea Prime",
    "Turma presencial ou online",
    "Material gratuito",
    "Simulados específicos de Matemática",
    "Terça 19h Matemática com foco total",
    "Sem taxa de material"
  ];

  return (
    <section className="py-24 bg-aurea-blue text-white relative">
      {/* Circle overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aurea-tangerine rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle color="text-white" align="center">Benefícios da Turma de Matemática</SectionTitle>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mt-12 bg-white/10 p-8 md:p-12 backdrop-blur-sm rounded-sm border border-white/20">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 min-w-[20px] text-aurea-tangerine">
                  <Check size={20} strokeWidth={4} />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  subtitle,
  price,
  installment,
  discounts
}: {
  title: string,
  subtitle: string,
  price: string,
  installment: string,
  discounts: { title: string, items: string[] }
}) => (
  <div className="flex flex-col h-full p-8 border border-gray-200 bg-white text-aurea-ebony shadow-lg transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
    {/* Top accent bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-aurea-blue group-hover:bg-aurea-tangerine transition-colors duration-300"></div>

    <h3 className="font-display text-3xl uppercase mb-2 text-aurea-blue mt-2">{title}</h3>
    <p className="text-sm mb-8 h-10 text-gray-500">{subtitle}</p>

    <div className="mb-8">
      <div className="text-sm uppercase tracking-wide opacity-70 mb-1">Preço à vista</div>
      <div className="text-4xl font-bold font-display text-aurea-ebony">{price}</div>
      <div className="text-sm mt-2 opacity-70">ou parcelado em</div>
      <div className="text-xl font-bold text-aurea-tangerine">{installment}</div>
    </div>

    <div className="flex-grow border-t border-gray-100 pt-6 mb-8">
      <p className="font-bold uppercase text-xs tracking-widest mb-3 text-aurea-tangerine">{discounts.title}</p>
      <ul className="space-y-2 text-sm">
        {discounts.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 block w-1 h-1 bg-aurea-blue rounded-full"></span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Buttons container */}
    <div className="flex flex-col gap-3 mt-auto">
      <button className="w-full py-4 font-bold uppercase tracking-wide bg-aurea-tangerine text-white hover:bg-orange-600 transition-colors text-sm shadow-md hover:shadow-lg">
        Comprar à Vista
      </button>
      <button className="w-full py-4 font-bold uppercase tracking-wide border-2 border-aurea-blue text-aurea-blue hover:bg-aurea-blue hover:text-white transition-colors text-sm">
        Comprar Parcelado
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const discountData = {
    title: "Até 31/12",
    items: [
      "30% de desconto para alunos novos",
    ]
  };

  return (
    <section id="precos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle align="center">Escolha sua modalidade</SectionTitle>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4 -mt-4">
          Invista no seu futuro com o melhor custo-benefício.
        </p>
        <div className="text-center mb-12">
          <div className="inline-block bg-aurea-blue text-white px-6 py-3 rounded-sm font-bold text-lg">
            📅 Início do curso: 24 de fevereiro de 2025
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Matemática Extensivo"
            subtitle="Para estudar o ano inteiro com ritmo constante"
            price="R$ 1.800,00"
            installment="10 x R$ 220,00"
            discounts={discountData}
          />
          <PricingCard
            title="Matemática Intensivo"
            subtitle="Para quem precisa acelerar o processo"
            price="R$ 1.100,00"
            installment="10 x R$ 150,00"
            discounts={discountData}
          />
          <PricingCard
            title="Matemática Online"
            subtitle="Para estudar com flexibilidade"
            price="R$ 600,00"
            installment="10 x R$ 90,00"
            discounts={discountData}
          />
        </div>
      </div>
    </section>
  );
};

const Combo = () => {
  return (
    <section className="py-20 bg-aurea-tangerine text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white text-aurea-tangerine px-4 py-1 font-bold uppercase text-xs tracking-widest mb-6">
              Oferta Especial
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mb-6">
              Combo Matemática<br />e Redação Áurea
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Para quem quer crescer nas duas áreas que mais impactam a nota do Enem, o Áurea oferece um combo especial que une Matemática e Redação com planejamento integrado.
            </p>
            <p className="text-lg opacity-90 mb-8">
              O aluno recebe condições especiais e acompanhamento nas duas disciplinas.
            </p>
            <a href="https://comboaurea2026.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-aurea-ebony text-white px-8 py-4 font-bold uppercase hover:bg-gray-900 transition-colors">
              Acessar página do combo
            </a>
          </div>

          <div className="bg-white/10 p-8 md:p-12 border border-white/20 backdrop-blur-sm">
            <h3 className="font-display text-2xl uppercase mb-8">Vantagens do Combo</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white text-aurea-tangerine p-2 rounded-full">
                  <TrendingUp size={24} />
                </div>
                <span className="text-xl font-bold">Planejamento conjunto</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white text-aurea-tangerine p-2 rounded-full">
                  <BrainCircuit size={24} />
                </div>
                <span className="text-xl font-bold">Estratégias semanais</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white text-aurea-tangerine p-2 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xl font-bold">Condição especial para o combo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contacts = [
    {
      initial: 'A',
      name: 'Alysson Freitas',
      role: 'SÓCIO DIRETOR',
      action: 'Falar com Alysson'
    },
    {
      initial: 'H',
      name: 'Hamilton Vinícius',
      role: 'SÓCIO DIRETOR',
      action: 'Falar com Hamilton'
    },
    {
      initial: 'E',
      name: 'Emanuelle',
      role: 'COORDENAÇÃO PEDAGÓGICA',
      action: 'Falar com Emanuelle'
    },
    {
      initial: 'A',
      name: 'Atendimento Áurea',
      role: 'SECRETARIA',
      action: 'Atendimento geral'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="fale-conosco">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase text-aurea-ebony mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1.5 bg-aurea-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-aurea-blue flex items-center justify-center text-white text-4xl font-display mb-6">
                {contact.initial}
              </div>
              <h3 className="font-bold text-xl text-aurea-ebony mb-2">{contact.name}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-8">{contact.role}</p>

              <button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200">
                <MessageCircle size={20} />
                <span>{contact.action}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-aurea-ebony text-white py-24 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-8 leading-tight">
            Domine a Matemática e transforme a sua nota em 2025
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Se você sente que a Matemática ainda é um bloqueio, este curso foi feito para você.
            Com metodologia clara, materiais completos e acompanhamento durante todo o ano, a disciplina deixa de ser um problema e passa a ser seu diferencial.
          </p>

          <Button variant="primary" className="w-full md:w-auto text-xl py-5 px-10">
            Quero garantir minha vaga no Curso de Matemática Áurea 2025
          </Button>

          <div className="mt-20 pt-10 border-t border-gray-800">
            <p className="text-gray-600 text-sm text-center">© 2024 Áurea Educação. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Container ---

function App() {
  return (
    <div className="font-sans antialiased text-aurea-ebony bg-white">
      <Header />
      <main>
        <Hero />
        <WhyDifferent />
        <Structure />
        <Professor />
        <Benefits />
        <Pricing />
        <Combo />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;