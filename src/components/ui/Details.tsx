import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/bordado.jpg",
    alt: "Imagem de bordado",
    className: "absolute top-0 right-0 z-0 opacity-90 md:w-70 w-30",
  },
  {
    id: 2,
    src: "/images/costura.jpg",
    alt: "Imagem de costura",
    className: "absolute bottom-0 left-0 z-0 opacity-90 md:w-70 w-30",
  },
];

const Details = () => {
  return (
    <>
      {images.map((items) => (
        <div className={items.className} key={items.id}>
          <Image src={items.src} alt={items.alt} width={280} height={280} />
        </div>
      ))}
    </>
  );
};

export default Details;
