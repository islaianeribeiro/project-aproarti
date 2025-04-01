interface ProductProps {
  image: string;
  title: string;
  description: string;
}

const InfiniteScroll = ({ image, title, description }: ProductProps) => {
  return (
    <div className="bg-white min-w-60 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-60 h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfiniteScroll;
