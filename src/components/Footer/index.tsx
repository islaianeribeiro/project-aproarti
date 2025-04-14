import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import SocialMedia from "../ui/SocialMedia";
import InfoFooter from "./InfoFooter";

const socialLinks = [
  {
    id: 1,
    icon: <Facebook size={16} />,
    href: "https://www.facebook.com/aproartiico/?locale=pt_BR",
  },
  {
    id: 2,
    icon: <Instagram size={16} />,
    href: "https://www.instagram.com/aproarti.ico/",
  },
  {
    id: 3,
    icon: <Phone size={16} />,
    href: "https://wa.me/558899276182",
  },
];

const Footer = () => {
  return (
    <footer className="bg-marfim text-azul py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:flex md:justify-evenly gap-8">
          <InfoFooter
            title="APROATI"
            paragraphs={[
              {
                text: "Associação de Artesãos, Gestores Culturais e Artistas de Icó - Ceará. Nosso objetivo é estimular a produção artesanal local e oferecer maior estrutura aos artesãos.",
              },
            ]}
          />

          <InfoFooter
            title="Contato"
            paragraphs={[
              {
                icon: <MapPin size={25} />,
                text: "Rua Dr. Inácio Dias, Sobrado Canela Preta 2083, Icó - CEP 63430000",
              },
              {
                icon: <Mail size={18} />,
                text: "mariasoares.candido@gmail.com",
              },
            ]}
          />

          <div className="w-auto md:w-40">
            <h3 className="text-xl font-semibold mb-4 text-terracota">
              Redes Sociais
            </h3>

            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <SocialMedia
                  key={social.id}
                  icon={social.icon}
                  href={social.href}
                  className="text-white text-sm hover:scale-110 hover:bg-blue-950 transition duration-300 ease-in-out w-8 h-8 bg-azul rounded-full p-2 shadow-neutral-1 shadow"
                />
              ))}
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
