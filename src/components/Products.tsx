"use client";

import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";

const products = [
  {
    title: "Bolsas",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb2A5aA3ge589XlpAE15BUPi1VC0fhk3VoxkbF7IVQFPzim6t_IkgCuvIFD7thPGbtVM&usqp=CAU",
  },
  {
    title: "Carteiras",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAb7ClA6ufKYFsM3uvP_BXBVjEIA2ISSn4Z_S2BusiB4MoAOG60jVOd57UmCYs3Ci4dCE&usqp=CAU",
  },
  {
    title: "Jogos americanos",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image:
      "https://redeartesol.org.br/wp-content/uploads/2023/05/APROARTI-1-scaled.jpg",
  },
  {
    title: "Almofadas",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlqHu4evzHmTEmZqdAVZ-W8gXToxeAh8OtYSvIAuxic0FcWm63GBXezmBGlL0xJXPmW0&usqp=CAU",
  },
  {
    title: "Chaveiros",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image:
      "https://cdn.awsli.com.br/800x800/624/624507/produto/253059030/design-sem-nome--24-_auto_x2-gspio6wpkc.jpg",
  },
  {
    title: "Porta Objetos",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image: "/hero.webp",
  },
  {
    title: "Porta Objetos",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image: "/hero.webp",
  },
];

const Products = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    const speed = 2; // ✅ Velocidade ajustável para rolagem mais suave

    const animateScroll = () => {
      if (!isPaused && scrollRef.current) {
        setScrollPosition((prev) => {
          if (!scrollRef.current) return prev;

          const newPosition = prev - speed; // ✅ Rolagem mais fluida e contínua
          const maxScroll = scrollRef.current.scrollWidth / 2;

          return newPosition <= -maxScroll ? 0 : newPosition;
        });

        if (scrollRef.current) {
          scrollRef.current.style.transform = `translateX(${scrollPosition}px)`;
        }
      }

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, scrollPosition]);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teste mb-4 uppercase">
            Nossos produtos
          </h2>
          <p className="text-azul">
            Produtos inspirados na arquitetura, história, lendas e vegetação da
            cidade de Icó.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex whitespace-nowrap transition-transform duration-200 ease-linear gap-5"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {products.concat(products).map((product, index) => (
              <InfiniteScroll
                key={`${product.title}-${index}`} // ✅ Melhorando a chave do map
                {...product}
                setIsPaused={setIsPaused}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
