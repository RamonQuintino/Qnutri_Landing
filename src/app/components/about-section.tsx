import image_f73401bcbce80745b44984a2dca0e909865cfd20 from 'figma:asset/f73401bcbce80745b44984a2dca0e909865cfd20.png'
import { Award, Shield, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#9B1B30]/10 text-[#9B1B30] rounded-full mb-6">
              Sobre Nós
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excelência em Produção de Alimentos em Larga Escala
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de 15 anos de experiência e mais de 3 milhões de refeições servidas, a QNutri é referência em alimentação industrial, 
              oferecendo soluções completas para empresas, restaurantes, eventos, escolas e hospitais.
            </p>
            <p className="text-lg text-gray-600 mb-8">Nossa estrutura moderna e equipe altamente qualificada garantem a produção de refeições com os mais altos padrões de qualidade, seguindo rigorosamente todas as normas sanitárias e de segurança alimentar).</p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#9B1B30]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Licenças Completas</h3>
                  <p className="text-gray-600">Todas as licenças sanitárias e certificações exigidas por lei</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#9B1B30]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Qualidade Garantida</h3>
                  <p className="text-gray-600">Controle rigoroso em todas as etapas da produção</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#9B1B30]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Equipe Especializada</h3>
                  <p className="text-gray-600">Profissionais capacitados e em constante treinamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image_f73401bcbce80745b44984a2dca0e909865cfd20}
                alt="Produção de Alimentos"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E1AD01]/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}