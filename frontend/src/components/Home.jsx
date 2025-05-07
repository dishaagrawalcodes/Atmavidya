import { useEffect, useState } from "react";
import front1 from "./images/front1.jpg";
import front2 from "./images/front2.jpg";
import { NavLink } from "react-router-dom";
import homebg from "./images/homebgimage.jpg";

const Home = () => {
  const images = [front1, front2];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="relative overflow-x-hidden w-full min-h-screen bg-cover bg-center transition-all duration-1000 pt-20"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 grid sm:grid-cols-2 h-full items-center px-6 sm:px-16">
        {/* Left: Highlighted image container with Glassmorphism */}
        <div className="flex justify-center">
          <div className="relative flex justify-center items-center p-4 rounded-3xl bg-Emerald/10 border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-500 max-w-md">
            <img
              src={images[index]}
              alt="Vedic Tradition"
              className={`h-96 w-auto rounded-2xl transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Optional quote */}
            <div className="absolute bottom-4 text-center text-sm text-white font-lora italic px-2">
              “Let your inner light guide the way.”
            </div>
          </div>
        </div>

        {/* Right: Text and CTA */}
        <div className="text-white text-left mt-10 sm:mt-0">
          <h1 className="text-4xl sm:text-6xl font-dmserif mb-6 drop-shadow-xl leading-tight">
            Explore the <span className="text-yellow-300">Timeless Wisdom</span>
            <br />
            of the Vedas <span className="text-green-400 font-mukta">Atmavidya</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-6 max-w-lg leading-relaxed font-lora">
            Discover ancient spiritual knowledge preserved through centuries.
            Let the scriptures guide your inner journey.
          </p>
          <NavLink
            to="/exploremore"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg px-6 py-3 rounded-full shadow-lg transition"
          >
            Explore Vedas
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
