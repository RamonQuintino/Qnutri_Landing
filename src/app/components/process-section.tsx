import { MessageSquare, ClipboardList, ChefHat, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contato Inicial",
    description: "Entre em contato conosco e conte suas necessidades. Faremos uma análise detalhada do seu projeto."
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planejamento",
    description: "Desenvolvemos uma proposta personalizada com cardápios, volumes, prazos e investimento necessário."
  },
  {
    number: "03",
    icon: ChefHat,
    title: "Produção",
    description: "Nossa equipe especializada inicia a produção seguindo rigorosos padrões de qualidade e higiene."
  },
  {
    number: "04",
    icon: Truck,
    title: "Entrega",
    description: "Logística eficiente garante a entrega pontual e conservação adequada até o destino final."
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#9B1B30]/10 text-[#9B1B30] rounded-full mb-6">
            Como Funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Processo de Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo estruturado e transparente para garantir a excelência 
            em cada etapa da parceria
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-[#E1AD01]/30 to-gray-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#E1AD01]/30 to-gray-200"></div>
                  )}
                  
                  <div className="relative bg-white rounded-xl p-6 text-center lg:pt-8">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#9B1B30] to-[#7A1625] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="mt-12 mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-100">
                        <Icon className="w-10 h-10 text-[#9B1B30]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Pronto para começar? Entre em contato e receba uma proposta personalizada
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#9B1B30] hover:bg-[#7A1625] text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Iniciar Projeto
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}