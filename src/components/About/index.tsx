import AboutItems from "./AboutItems";
import Details from "../ui/Details";

const sections = [
  {
    title: "Nossa História",
    content:
      "A APROATI nasceu do desejo de fortalecer e preservar o rico patrimônio artesanal de Icó. Ao longo dos anos, temos trabalhado incansavelmente para valorizar e estimular a produção artesanal local e oferecer maior estrutura aos artesãos, por meio de formações e difusão das manifestações culturais e artesanais da cidade. A organização estimula a capacidade produtiva de cerca de 60 bordadeiras e a venda dos produtos artesanais de alta qualidade nas regiões urbanas e rurais.",
  },
  {
    title: "Comunidades Atendidas",
    list: [
      "Cascudo",
      "Três Budegas",
      "Varzinha",
      "Assentamento Bom Lugar",
      "Icó",
    ],
  },
  {
    title: "Nossa Missão",
    content:
      "Promover o desenvolvimento socioeconômico através do artesanato, preservando nossa cultura e gerando oportunidades para artesãos locais. Também entre diversas atividades, oferecemos cursos de Bordado Rococó. Uma técnica tradicional que valoriza o artesanato local e desenvolve habilidades criativas e manuais.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <Details />

        <div className="max-w-3xl mx-auto text-center mb-10 z-10 relative">
          <h2 className="text-teste text-3xl md:text-4xl font-bold mb-4 uppercase">
            Sobre a APROATI
          </h2>
          <p className="text-azul text-lg">
            Desde 2005, fortalecendo o artesanato e a cultura local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center h-120 z-10">
            <video
              width="320"
              height="240"
              controls
              autoPlay
              muted
              preload="none"
            >
              <source src="/videos/loja.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6 z-5">
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
