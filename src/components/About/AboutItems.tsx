interface AboutItemsProps {
  title: string;
  content?: string;
  list?: string[];
}

const AboutItems = ({ title, content, list }: AboutItemsProps) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-terracota mb-3 md:text-start text-center">
        {title}
      </h3>

      {list ? (
        <ul className="list-disc list-inside text-azul text-lg">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-azul md:text-start text-justify text-lg">
          {content}
        </p>
      )}
    </div>
  );
};

export default AboutItems;
