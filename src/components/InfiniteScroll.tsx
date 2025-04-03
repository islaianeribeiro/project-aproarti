interface ProductProps {
  image: string;
  title: string;
  description: string;
  setIsPaused: (paused: boolean) => void;
}

const InfiniteScroll = ({
  image,
  title,
  description,
  setIsPaused,
}: ProductProps) => {
  return (
    <div
      className="bg-white min-w-60 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-marfim"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img src={image} alt={title} className="w-60 h-60 object-cover" />
      <div className="p-4 border-t-3 border-t-marfim">
        <h3 className="text-xl font-semibold text-terracota text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfiniteScroll;
