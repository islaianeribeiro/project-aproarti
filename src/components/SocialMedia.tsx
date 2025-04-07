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

interface SocialMediaProps {
  className?: string;
}

const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <div className="flex items-center gap-12 mt-3">
      {socialLinks.map((links) => (
        <a
          key={links.id}
          href={links.href}
          target="_blank"
          className="text-white hover:scale-110 hover:bg-blue-950 transition duration-300 ease-in-out text-3xl bg-azul rounded-full p-2 shadow-neutral-1 shadow"
        >
          {links.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
