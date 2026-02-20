import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Obrigado! Entraremos em contato em breve.");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
      });
      
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#E1AD01]/20 text-[#E1AD01] rounded-full mb-6">
              Entre em Contato
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solicite um Orçamento Sem Compromisso
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Preencha o formulário ao lado e nossa equipe entrará em contato 
              para entender suas necessidades e apresentar a melhor solução.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#E1AD01]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-400">(24) 99817-3539</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#E1AD01]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">adm.qnutri@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E1AD01]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#E1AD01]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-400">Estrada Lambari, 1980<br />Primeiro, Piraí - RJ<br />27175-000</p>
                </div>
              </div>
            </div>

            {/* Image */}
            
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-900">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-gray-900">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-900">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent transition-all"
                    placeholder="(11) 98765-4321"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-900">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-900">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre suas necessidades (volume de refeições, frequência, etc.)"
                />
              </div>

              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9B1B30] hover:bg-[#7A1625] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Solicitação
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Responderemos em até 24 horas úteis
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}