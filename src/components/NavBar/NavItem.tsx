type NavItemProps = {
  name: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const NavItem = ({ name, href, onClick, className = "" }: NavItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-terracota hover:border-b-2 hover:border-b-white ${className}`}
  >
    {name}
  </a>
);

export default NavItem;
