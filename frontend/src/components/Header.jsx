import { Link, NavLink } from "react-router-dom";
import menu from "./images/icons/menu.svg";
import logo from "./images/logo2.png";

const Header = () => {
  const showMenu = () => {
    const sidebar = document.querySelector("#show");
    sidebar.style.display = "flex";
  };

  const hideMenu = () => {
    const sidebar = document.querySelector("#show");
    sidebar.style.display = "none";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#33160a]">
      
      <div className="flex justify-between border-b border-[#32180d] p-3 backdrop-blur-md z-20 fixed top-0 w-full sm:invisible bg-[#33160a]">
        <div>
          <img
            className="h-10 rounded-full border-2 border-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </div>
        <button onClick={showMenu} className="text-black">
          <img src={menu} className="h-6" alt="Menu" />
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        id="show"
        className="h-60 w-50 z-40 bg-white opacity-90 rounded-2xl flex-col p-2 fixed top-10 right-12"
        style={{ display: "none" }}
      >
        {[
          { to: "/", text: "Home" },
          { to: "/exploremore", text: "Explore Vedas" },
          { to: "/about", text: "About" },
          { to: "/notes", text: "Notes" },
          { to: "/aisearchbar", text: "AI Search" },
          { to: "/log", text: "LogIn", isLogin: true },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={hideMenu}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-yellow-500 outline outline-yellow-500 outline-[1px]"
                  : ""
              } 
              rounded-md 
              px-2 
              py-1 
              text-yellow-400 
              hover:outline-yellow-400 
              hover:outline 
              hover:outline-[1px]
              ${item.isLogin ? "transform translate-x-[-5rem]" : ""}`
            }
          >
            {item.text}
          </NavLink>
        ))}
      </div>

      {/* Laptop Navbar */}
      <div className="flex border-b border-[#32180d] z-10 fixed top-0 w-full backdrop-blur-md justify-between p-3 invisible sm:visible bg-[#33160a]">
      <img
  className="h-16 w-16 object-contain bg-white rounded-lg border-2 border-yellow-400 shadow-xl cursor-pointer ml-4 transition-transform duration-300 hover:scale-105"
  src={logo}
  alt="Logo"
/>

        <div className="flex gap-4 items-center mr-6">
          {[
            { to: "/", text: "Home" },
            { to: "/exploremore", text: "Explore Vedas" },
            { to: "/about", text: "About" },
            { to: "/notes", text: "Notes" },
            { to: "/aisearchbar", text: "AI Search" },
            { to: "/log", text: "Login", isLogin: true },
          ].map((item) => (
            <div key={item.to} className="flex items-center gap-2">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-yellow-500 outline outline-yellow-500 outline-[1px]"
                      : ""
                  } 
                  rounded-md 
                  px-2 
                  py-1 
                  text-yellow-400 
                  hover:outline-yellow-400 
                  hover:outline 
                  hover:outline-[1px]
                  text-lg font-medium
                  font-cinzel
                  ${item.isLogin ? "mr-8" : "mx-1"}`
                }
              >
                {item.text}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
