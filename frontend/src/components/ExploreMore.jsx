import bg from "./images/explorebg.png";
import { NavLink } from "react-router-dom";

const ExploreMore = () => {
  return (
    <>
      <img src={bg} className="h-96 w-full opacity-0" />
      <div className="absolute top-0 pt-28 grid grid-rows-3 px-3 sm:px-10">
        <h2 className="text-5xl md:text-7xl font-playfair font-bold  h-[84px] drop-shadow-lg">
          Explore Vedic Scriptures
        </h2>
        <p className="text-2xl font-roboto font-semibold text-[#33160a] pt-4">
          Dive into the profound wisdom of the Vedas.
        </p>

        <form className="max-w-md">
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
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-xl "
              placeholder="Search by scripture"
              required
            />
            {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#127207] hover:bg-[#0a4504]  font-medium rounded-xl text-sm px-4 py-2 "
            >
              Search
            </button> */}
            <NavLink
            to="/exploreData"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#127207] hover:bg-[#0a4504]  font-medium rounded-xl text-sm px-4 py-2 "
            >
            Seach
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExploreMore;
