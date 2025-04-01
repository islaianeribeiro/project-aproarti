import InfiniteScroll from "./InfiniteScroll";

const products = [
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
  {
    title: "Porta Objetos",
    description:
      "Capacitação em técnicas tradicionais de bordado para novos artesãos.",
    image: "/hero.webp",
  },
];

const Products = () => {
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
          <div className="flex scroll-animation whitespace-nowrap">
            {products.concat(products).map((product, index) => (
              <InfiniteScroll key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
