import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-marfim text-azul py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:flex md:justify-evenly gap-8">
          <div className="w-auto md:w-125">
            <h3 className="text-xl font-semibold mb-4 text-terracota">
              APROATI
            </h3>
            <p>
              Associação de Artesãos, Gestores Culturais e Artistas de Icó -
              Ceará. Nosso objetivo é estimular a produção artesanal local e
              oferecer maior estrutura aos artesãos.
            </p>
          </div>
          <div className="w-auto md:w-125">
            <h3 className="text-xl font-semibold mb-4 text-terracota">
              Contato
            </h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={25} />
                <span>
                  Rua Dr. Inácio Dias, Sobrado Canela Preta 2083, Icó - CEP
                  63430000
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>mariasoares.candido@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>(88) 99927-6182</span>
              </p>
            </div>
          </div>
          <div className="w-auto md:w-40">
            <h3 className="text-xl font-semibold mb-4 text-terracota">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-azul">
            © {new Date().getFullYear()} APROATI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
