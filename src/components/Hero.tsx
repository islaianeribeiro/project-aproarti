import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-3">
        <Image
          src="/hero.webp"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-bege opacity-30" />
      </div>

      <div className="container p-6 relative z-10 text-center bg-white md:mx-40 rounded-2xl opacity-90">
        <h1 className="text-4xl md:text-6xl font-bold text-teste mb-6">
          Valorizando o Artesanato Local
        </h1>
        <p className="text-xl md:text-2xl text-azul mb-8 max-w-3xl mx-auto">
          Fortalecendo a cultura e o artesanato de Icó através da união de
          artesãos, gestores culturais e artistas locais.
        </p>
        <Button
          href="#about"
          className="text-neutral-0 inline-block bg-azul px-8 py-3 rounded-full font-semibold hover:bg-blue-950 transition-colors duration-200"
          text="Conheça Nossa História"
        />
      </div>
    </section>
  );
};

export default Hero;
