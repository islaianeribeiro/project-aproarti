import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-bege opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-1 mb-6">
          Valorizando o Artesanato Local
        </h1>
        <p className="text-xl md:text-2xl text-neutral-1 mb-8 max-w-3xl mx-auto">
          Fortalecendo a cultura e o artesanato de Icó através da união de
          artesãos, gestores culturais e artistas locais.
        </p>
        <a
          href="#about"
          className="text-neutral-1 inline-block bg-teste text-navy-900 px-8 py-3 rounded-full font-semibold hover:bg-green-200 transition-colors duration-200"
        >
          Conheça Nossa História
        </a>
      </div>
    </section>
  );
};

export default Hero;
