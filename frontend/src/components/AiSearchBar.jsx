import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constants";
import { addGptResult } from "../utils/aiSlice";
import bg from "./images/explorebg.png";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AiSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGeminiSearchClick = async () => {
    setIsLoading(true);
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      searchText.current.value +
      `Give me book recommendations in the form of an array of objects. Each object should have two keys: "title" for the name of the book and "description" for a brief description of the book. Please provide 5 book recommendations. If there are any random or irrelevant requests, provide only the information you can give, and avoid saying "I can't provide" or showing error messages. Just provide the information that is available in a simple, clear format.`;

    try {
      const geminiResult = await model?.generateContent(prompt);

      let gptResponseList =
        geminiResult.response.candidates[0].content.parts[0].text;

      gptResponseList = gptResponseList
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const bookList = JSON.parse(gptResponseList);
      dispatch(
        addGptResult({
          gptResultList: bookList,
        })
      );
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <img src={bg} className="h-96 w-full opacity-0" />
    <div className="absolute top-0 pt-28 grid grid-rows-2 px-3 sm:px-10">
      <h2 className=" text-5xl md:text-7xl font-playfair font-bold drop-shadow-lg">
      Search Scriptures using AI
      </h2>
      <form className="max-w-md mt-8" onSubmit={(e) => e.preventDefault()}>
        <div className="relative border-[1px] border-[#33160a] rounded-xl">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            ref={searchText}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-xl "
            placeholder="search"
            onChange={(e) => {
                  if (e.key === "Enter") handleGeminiSearchClick();
              }}
            />
          <button
            onClick={handleGeminiSearchClick}
            className="text-white absolute end-2.5 bottom-2.5 bg-[#127207] hover:bg-[#0a4504]  font-medium rounded-xl text-sm px-4 py-2 "
          >
           <NavLink
           to="searchResponse"
           >
              {isLoading ? <span>Loading...</span> : "Search"}
           </NavLink>
          </button>
        </div>
      </form>
    </div>

  </>
  );
};

export default AiSearchBar;
