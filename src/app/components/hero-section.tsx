import { ChevronDown } from "lucide-react";
import heroImage from "../../assets/d825605d5bea801aa266a37b64348aad96990daa.png";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="QNutri - Cozinha Profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight mt-24 md:mt-0">
            Soluções Completas em<br />
            <span className="text-[#E1AD01]">Alimentação Industrial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Mais de 3 milhões de refeições servidas com eficiência comprovada, segurança alimentar garantida e capacidade para atender grandes volumes com excelência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-[#9B1B30] hover:bg-[#7A1625] text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento
            </button>
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-md transition-all duration-300"
            >
              Conheça Nossos Serviços
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 mb-0 hidden md:grid md:grid-cols-4 gap-8 text-white max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E1AD01] mb-2">3M+</div>
              <div className="text-sm text-gray-300">Refeições Servidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E1AD01] mb-2">10+</div>
              <div className="text-sm text-gray-300">Unidades Ativas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E1AD01] mb-2">2 Mil+</div>
              <div className="text-sm text-gray-300">Refeições/Dia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E1AD01] mb-2">15+</div>
              <div className="text-sm text-gray-300">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}