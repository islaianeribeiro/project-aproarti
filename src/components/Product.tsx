"use client";

import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
import products from "@/data/products.json";

const Product = () => {
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
  );
};

export default Product;
