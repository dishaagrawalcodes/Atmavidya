import { useSelector } from "react-redux";

const AiResponseCards = () => {
  // Access the book list from Redux state
  const { gptResultList } = useSelector((state) => state.ai);

  if (!gptResultList || gptResultList.length === 0) {
    return null;
  }

  return (
    <div className="w-full h-auto flex justify-center items-center mt-8">
      <div className="w-3/4 mx-6 bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-white font-bold text-xl mb-4">
          Book Recommendations
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {gptResultList.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-black mb-2">
                {book.title}
              </h3>
              <p className="text-gray-700">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiResponseCards;
