import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Sobre a APROATI
          </h2>
          <p className="text-gray-600">
            Desde 2005, fortalecendo o artesanato e a cultura local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center h-120">
            <img
              src="https://img.freepik.com/fotos-gratis/pessoa-fazendo-scrapbook-em-casa_23-2149614065.jpg?t=st=1742929142~exp=1742932742~hmac=5364429ccbae17a6af7754907f6f818a10419db5305540a295688726e9536eff&w=740"
              alt="Artesãos trabalhando"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Nossa História
              </h3>
              <p className="text-gray-600">
                A APROATI nasceu do desejo de fortalecer e preservar o rico
                patrimônio artesanal de Icó. Ao longo dos anos, temos trabalhado
                incansavelmente para valorizar nossos artesãos e suas técnicas
                tradicionais.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Comunidades Atendidas
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cascudo</li>
                <li>Três Budegas</li>
                <li>Varzinha</li>
                <li>Assentamento Bom Lugar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Nossa Missão
              </h3>
              <p className="text-gray-600">
                Promover o desenvolvimento socioeconômico através do artesanato,
                preservando nossa cultura e gerando oportunidades para artesãos
                locais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
