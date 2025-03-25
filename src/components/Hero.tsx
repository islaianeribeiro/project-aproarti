import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpX6vJmuyHb4ULJ8b6s1L-wlnRmgZbiDsKnA&s")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-verde-oliva mb-6">
          Valorizando o Artesanato Local
        </h1>
        <p className="text-xl md:text-2xl text-neutral-0 mb-8 max-w-3xl mx-auto">
          Fortalecendo a cultura e o artesanato de Icó através da união de
          artesãos, gestores culturais e artistas locais.
        </p>
        <a
          href="#about"
          className="inline-block bg-white text-navy-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Conheça Nossa História
        </a>
      </div>
    </section>
  );
};

export default Hero;
