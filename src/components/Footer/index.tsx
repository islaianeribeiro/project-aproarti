import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import SocialMedia from "../ui/SocialMedia";

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

            <SocialMedia
              className="text-white text-sm hover:scale-110 hover:bg-blue-950 transition duration-300 ease-in-out w-8 h-8 bg-azul rounded-full p-2 shadow-neutral-1 shadow"
              divClass="flex gap-5"
            />
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
