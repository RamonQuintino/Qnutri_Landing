import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/51015f58dd581c3fb51a795fff6ae5fbcd4b8925.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="QNutri" 
              className="h-20 md:h-24 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Soluções completas em produção de alimentos para empresas, 
              hospitais, escolas e eventos. Qualidade, segurança e eficiência 
              em cada refeição.
            </p>
            <div className="flex gap-4">
              
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-[#E1AD01] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#E1AD01] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-[#E1AD01] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-[#E1AD01] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E1AD01]" />
                <div>
                  <div>(24) 99817-3539</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E1AD01]" />
                <span>adm.qnutri@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E1AD01]" />
                <span>
                  Estrada Lambari, 1980<br />
                  Primeiro, Piraí - RJ<br />
                  27175-000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} QNutri. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#E1AD01] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#E1AD01] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}