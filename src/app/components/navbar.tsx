import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/51015f58dd581c3fb51a795fff6ae5fbcd4b8925.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="QNutri" 
              className="h-20 md:h-24
              w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className={`hover:text-[#9B1B30] transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`hover:text-[#9B1B30] transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className={`hover:text-[#9B1B30] transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Como Funciona
            </button>
            
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-[#9B1B30] hover:bg-[#7A1625] text-white px-6 py-2.5 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-[#9B1B30] transition-colors px-4 py-2 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-[#9B1B30] transition-colors px-4 py-2 text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("processo")}
                className="text-gray-700 hover:text-[#9B1B30] transition-colors px-4 py-2 text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-700 hover:text-[#9B1B30] transition-colors px-4 py-2 text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-[#9B1B30] hover:bg-[#7A1625] text-white px-4 py-2.5 rounded-md transition-colors mx-4 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}