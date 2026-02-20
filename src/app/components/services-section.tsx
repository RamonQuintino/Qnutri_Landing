import { Utensils, Building2, Calendar, Briefcase, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Produção de Refeições",
    description: "Cardápios variados e balanceados para grandes volumes, com foco em qualidade nutricional e sabor."
  },
  {
    icon: Building2,
    title: "Terceirização de Cozinha",
    description: "Gestão completa da sua operação de alimentação, incluindo equipe, insumos e processos operacionais."
  },
  {
    icon: Calendar,
    title: "Eventos Corporativos",
    description: "Catering profissional para eventos de todos os portes, desde coffee breaks até banquetes completos."
  },
  {
    icon: Briefcase,
    title: "Refeições Corporativas",
    description: "Refeições coletivas embaladas com segurança, perfeitas para empresas e escritórios."
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Sanitária",
    description: "Assessoria para adequação às normas sanitárias, treinamento de equipes e implantação de processos."
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas para Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em alimentação industrial, 
            adaptados às necessidades específicas de cada cliente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B1B30] to-[#7A1625] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#9B1B30] to-[#7A1625] rounded-xl p-8 shadow-lg text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="mb-6 text-white/90">
              Entre em contato e desenvolvemos uma solução sob medida para você
            </p>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#9B1B30] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}