import { useEffect, useRef } from "react";
import a2bLogo from "figma:asset/2990f62f39d42a9624aa395d3af1789fd49226e9.png";
import inbrandsLogo from "figma:asset/2c12a1fb3afad1a871c9b9253fa692db44f336d0.png";
import petfiveLogo from "figma:asset/10f05d7b616d1df9f49c53bbb3ba48bf05d6991d.png";
import kosangasLogo from "figma:asset/a022b2c281b4d67ac100f0cf5bf0ce1269a33d58.png";
import grupoAcosLogo from "figma:asset/436b78eb66497afc803cb4af7885df7d5305434f.png";
import lightLogo from "figma:asset/084665fdbc2fbcad3d50511ec8d715e162fbe78e.png";
import trigoLogo from "figma:asset/558d8491364c423706c0a54367e64b2fdceb845d.png";
import knaufLogo from "figma:asset/fb3dd30b3404607551b9d891b029e061f46f06e4.png";
import ambevLogo from "figma:asset/99a77efe92d1bf4801e52584c4ee95b1a946af24.png";
import mitsubishiLogo from "figma:asset/0c1777701718f4698d3b4b8101aaf5f97c151bfa.png";
import casaVideoLogo from "figma:asset/064d0bb5ef5d9fd03417a7fb1f1835da3c41bc6b.png";
import accoLogo from "figma:asset/58454a540144ce4bf08fba08dc5cb9e1fc1c6615.png";
import acsoLogo from "figma:asset/22b8987d97eccd79ebe798add49f373cc54cd9e2.png";
import piraqueLogo from "figma:asset/e64580922fdaa49be6b46df46e070a2463f890a6.png";
import copaEnergiaLogo from "figma:asset/d5ed7a4acf0bc21552c1109b4e61d4a6f5a0323b.png";
import torcLogo from "figma:asset/ec33c6df3d49baa22914a8d09b6c3cdc5a2ea07c.png";

export function PartnersSection() {
  const partners = [
    { name: "A2B Group", logo: a2bLogo },
    { name: "Inbrands", logo: inbrandsLogo },
    { name: "Petfive Brands", logo: petfiveLogo },
    { name: "Kosangas", logo: kosangasLogo },
    { name: "Grupo Aços", logo: grupoAcosLogo },
    { name: "Light", logo: lightLogo },
    { name: "Trigo Franquias", logo: trigoLogo },
    { name: "Knauf", logo: knaufLogo },
    { name: "Ambev", logo: ambevLogo },
    { name: "Mitsubishi Motors", logo: mitsubishiLogo },
    { name: "Casa & Video", logo: casaVideoLogo },
    { name: "Aço", logo: accoLogo },
    { name: "ACSO", logo: acsoLogo },
    { name: "Piraquê", logo: piraqueLogo },
    { name: "Copa Energia", logo: copaEnergiaLogo },
    { name: "TORC", logo: torcLogo },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (scrollContainer) {
        scrollPos += speed;
        const halfScroll = scrollContainer.scrollWidth / 2;
        if (scrollPos >= halfScroll) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-[#ffc022]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos diversos segmentos com excelência e profissionalismo
          </p>
        </div>

        {/* Partners Carousel */}
        <div
          className="relative mb-12 overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 md:h-28 w-auto object-contain p-5"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#9B1B30] mb-2">10+</div>
            <div className="text-gray-600">Unidades Ativas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#9B1B30] mb-2">2 Mil+</div>
            <div className="text-gray-600">Refeições/Dia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#9B1B30] mb-2">15+</div>
            <div className="text-gray-600">Anos de Parceria</div>
          </div>
        </div>
      </div>
    </section>
  );
}