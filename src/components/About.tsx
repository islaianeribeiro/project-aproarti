import Image from "next/image";
import React from "react";
import AboutItems from "./AboutItems";

const sections = [
  {
    title: "Nossa História",
    content:
      "A APROATI nasceu do desejo de fortalecer e preservar o rico patrimônio artesanal de Icó. Ao longo dos anos, temos trabalhado incansavelmente para valorizar nossos artesãos e suas técnicas tradicionais.",
  },
  {
    title: "Comunidades Atendidas",
    list: ["Cascudo", "Três Budegas", "Varzinha", "Assentamento Bom Lugar"],
  },
  {
    title: "Nossa Missão",
    content:
      "Promover o desenvolvimento socioeconômico através do artesanato, preservando nossa cultura e gerando oportunidades para artesãos locais.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/bordado.jpg"
            alt="Imagem de bordado"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/costura.jpg"
            alt="Imagem de costura"
            width={300}
            height={300}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-teste text-3xl md:text-4xl font-bold mb-4 uppercase">
            Sobre a APROATI
          </h2>
          <p className="text-azul text-lg">
            Desde 2005, fortalecendo o artesanato e a cultura local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center h-120 z-1">
            <video
              width="320"
              height="240"
              controls
              autoPlay
              muted
              preload="none"
            >
              <source src="/loja.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6 z-3">
            {sections.map((section, index) => (
              <AboutItems key={index} {...section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
