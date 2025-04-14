import Product from "./Product";
import SocialMedia from "../ui/SocialMedia";
import { Facebook, Instagram, Phone } from "lucide-react";
const socialLinks = [
  {
    id: 1,
    icon: <Facebook size={30} />,
    href: "https://www.facebook.com/aproartiico/?locale=pt_BR",
  },
  {
    id: 2,
    icon: <Instagram size={30} />,
    href: "https://www.instagram.com/aproarti.ico/",
  },
  {
    id: 3,
    icon: <Phone size={30} />,
    href: "https://wa.me/558899276182",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-marfim">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teste mb-4 uppercase">
            Nossos produtos
          </h2>
          <p className="text-azul text-lg">
            Produtos inspirados na arquitetura, história, lendas e vegetação da
            cidade de Icó.
          </p>
        </div>

        <div className="relative overflow-hidden mb-5">
          <Product />
        </div>

        <div className="flex flex-col justify-between items-center text-center">
          <h3 className="md:text-2xl text-xl font-semibold text-terracota mt-3">
            Esses são só alguns dos nossos produtos!
          </h3>
          <p className="text-azul text-lg">
            Fale com a gente e saiba mais pelas redes sociais.
          </p>

          <div className="flex items-center gap-12 mt-3">
            {socialLinks.map((social) => (
              <SocialMedia
                key={social.id}
                icon={social.icon}
                href={social.href}
                className="text-white hover:scale-110 hover:bg-blue-950 transition duration-300 ease-in-out text-3xl bg-azul rounded-full p-2 shadow-neutral-1 shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
