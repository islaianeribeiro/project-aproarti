import Image from "next/image";

const Details = () => {
  return (
    <>
      <div className="absolute top-0 right-0 z-0 opacity-90">
        <Image
          src="/bordado.jpg"
          alt="Imagem de bordado."
          width={280}
          height={280}
        />
      </div>
      <div className="absolute bottom-0 left-0 z-0 opacity-90">
        <Image
          src="/costura.jpg"
          alt="Imagem de costura."
          width={280}
          height={280}
        />
      </div>
    </>
  );
};

export default Details;
