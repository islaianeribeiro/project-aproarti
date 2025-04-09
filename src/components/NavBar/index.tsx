"use client";

import NavItem from "./NavItem";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

const navItems = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#about" },
  { name: "Produtos", href: "#products" },
  { name: "Contato", href: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-marfim shadow-md fixed w-full z-50 px-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-terracota font-bold text-xl">
              APROARTI
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.name} name={item.name} href={item.href} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              icon={isOpen ? <X size={24} /> : <Menu size={24} />}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-navy-900"
              aria-label={isOpen ? "Fechar" : "Abrir"}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="text-center px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
