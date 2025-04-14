import { ReactNode } from "react";

interface SocialMediaProps {
  className: string;
  icon: ReactNode;
  href: string;
}

const SocialMedia = ({ className, icon, href }: SocialMediaProps) => {
  return (
    <a href={href} target="_blank" className={className}>
      {icon}
    </a>
  );
};

export default SocialMedia;
