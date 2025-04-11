import { Facebook, Instagram, Phone } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    icon: <Facebook size={15} />,
    href: "https://www.facebook.com/aproartiico/?locale=pt_BR",
  },
  {
    id: 2,
    icon: <Instagram size={15} />,
    href: "https://www.instagram.com/aproarti.ico/",
  },
  {
    id: 3,
    icon: <Phone size={15} />,
    href: "https://wa.me/558899276182",
  },
];

interface SocialMediaProps {
  className: string;
  divClass?: string;
}

const SocialMedia = ({ className, divClass }: SocialMediaProps) => {
  return (
    <div className={divClass}>
      {socialLinks.map((links) => (
        <a
          key={links.id}
          href={links.href}
          target="_blank"
          className={className}
        >
          {links.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
