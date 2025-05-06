import { useState } from "react";

function FeaturedCard({ data }) {
  const { img, heading, para } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit the preview to the first 5-6 words
  const previewText = para.split(" ").slice(0, 6).join(" ") + "...";

  return (
    <div
      className={`m-2 w-[350px] shadow-lg rounded-md bg-gradient-to-r from-yellow-50 to-orange-100 border-[#33160a] border-[1px] overflow-hidden transition-transform duration-300  cursor-pointer ${
        isExpanded ? "shadow-2xl" : "hover:scale-105 hover:shadow-xl"
      }`}
      onClick={() => setIsExpanded(!isExpanded)} // Toggle expand state
    >
      <div className="grid grid-cols-10 gap-2 p-3">
        <img
          src={img}
          className="h-32 w-28 col-span-3 object-cover rounded-lg transition-transform duration-300"
          alt=""
        />
        <div className="col-span-7 px-2">
          <h1 className="text-base font-bold text-[#0a4504]  border-[#33160a] border-b-[1px] pb-1">
            {heading}
          </h1>
          <p className="text-slate-900 mt-2 text-justify text-sm sm:text-base font-serif">
            {isExpanded ? para : previewText + "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
