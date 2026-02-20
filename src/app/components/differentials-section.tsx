import { CheckCircle2, TrendingUp, Truck, Users2, Shield, Clock } from "lucide-react";

const differentials = [
  {
    icon: CheckCircle2,
    title: "Licenças Completas",
    description: "ANVISA, APPCC e todas as licenças sanitárias atualizadas"
  },
  {
    icon: Shield,
    title: "Controle de Qualidade Total",
    description: "Monitoramento rigoroso em todas as etapas, da compra à entrega"
  },
  {
    icon: Users2,
    title: "Equipe Especializada",
    description: "Profissionais qualificados com treinamento contínuo em boas práticas"
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    description: "Frota própria refrigerada garantindo pontualidade e conservação"
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Capacidade para atender de 100 a 50.000 refeições diárias"
  },
  {
    icon: Clock,
    title: "Agilidade na Entrega",
    description: "Compromisso com prazos e horários estabelecidos"
  }
];

export function DifferentialsSection() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos experiência, tecnologia e comprometimento para entregar 
            os melhores resultados aos nossos clientes
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/20 rounded-lg flex items-center justify-center group-hover:bg-[#E1AD01] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#E1AD01] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-left">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E1AD01] mb-2">3M+</div>
            <div className="text-gray-400">Refeições Servidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E1AD01] mb-2">100%</div>
            <div className="text-gray-400">Conformidade Sanitária</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E1AD01] mb-2">15+</div>
            <div className="text-gray-400">Anos de Mercado</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E1AD01] mb-2">24/7</div>
            <div className="text-gray-400">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
}