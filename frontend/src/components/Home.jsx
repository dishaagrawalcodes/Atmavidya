import { useEffect, useState } from "react";
import front1 from "./images/front1.jpg";
import front2 from "./images/front2.jpg";
import { NavLink } from "react-router-dom";
import homebg from "./images/homebgimage.jpg";

const images = [front1, front2];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center p-4 rounded-3xl bg-Emerald/10 border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-500 max-w-md">
      <img
        src={images[index]}
        alt="Vedic Tradition"
        className={`w-64 sm:w-80 h-auto rounded-2xl transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute bottom-4 text-center text-sm text-white font-lora italic px-2">
        “Let your inner light guide the way.”
      </div>
    </div>
  );
};

const GalleryCard = ({ title, image, subtitle, author, link }) => (
  <div className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <img src={image} alt={title} className="w-40 mx-auto mb-4" />
    <h3 className="text-lg text-red-500 font-semibold">{subtitle}</h3>
    <p className="text-sm mb-4">{author}</p>
    <NavLink to={link} className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
      More {title}
    </NavLink>
  </div>
);

const VideoCard = () => (
  <div className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center">
    <h2 className="text-2xl font-semibold mb-4">Video Gallery</h2>
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <iframe
        className="w-full h-full rounded"
        src="https://www.youtube.com/embed/4UN2D5avZ7g"
        title="How Big is Our Universe"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    <h3 className="text-lg text-red-500 font-semibold mb-4">How Big is our Universe</h3>
    <div className="flex justify-center gap-4">
      <NavLink to="/media" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">Media News</NavLink>
      <NavLink to="/videos" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">More Videos</NavLink>
    </div>
  </div>
);

const NewsSection = () => (
  <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-4 text-center">Latest News</h2>
    <div className="space-y-4">
      <div>
        <h4 className="text-red-600 font-bold">Vedas Translation</h4>
        <p className="text-sm">English Translation of commentary of Swami Dayanand Saraswati on Yajurveda is published in two volumes.</p>
      </div>
      <div>
        <h4 className="text-red-600 font-bold">Rigveda Translation</h4>
        <p className="text-sm">English Translation of commentary of Swami Dayanand Saraswati on Rigveda is under progress. First two Mandals, and seventh Mandal completed.</p>
      </div>
      <div>
        <h4 className="text-red-600 font-bold">Saankhya Darshan</h4>
        <p className="text-sm font-medium">First time ever, Vedic Commentary in English is ready. Will be published soon.</p>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <NavLink to="/news" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">Load More</NavLink>
    </div>
  </div>
);

const Home = () => {
  return (
    <div
      className="relative overflow-x-hidden w-full h-screen bg-cover bg-center transition-all duration-1000 pt-20 scrollbar-hide"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 grid sm:grid-cols-2 h-full items-center px-6 sm:px-16">
        <div className="flex justify-center">
          <ImageCarousel />
        </div>
        <div className="text-white text-left mt-10 sm:mt-0">
          <h1 className="text-4xl sm:text-6xl font-dmserif mb-6 drop-shadow-xl leading-tight">
            Explore the <span className="text-yellow-300">Timeless Wisdom</span><br />
            of the Vedas <span className="text-green-400 font-mukta">Atmavidya</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-6 max-w-lg leading-relaxed font-lora">
            Discover ancient spiritual knowledge preserved through centuries.
            Let the scriptures guide your inner journey.
          </p>
          <NavLink to="/exploremore" className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg px-6 py-3 rounded-full shadow-lg transition">
            Explore Vedas
          </NavLink>
        </div>
      </div>

      <section className="relative z-10 px-6 sm:px-16 py-16 grid sm:grid-cols-3 grid-cols-1 gap-10 bg-white text-gray-800">
        <GalleryCard
          title="Books Gallery"
          image="https://vedastro.org/Assets/Books/k.png"
          subtitle="Paramaatma Saakshataar - Kaisa"
          author="Written by Satish Arya"
          link="/books"
        />
        <VideoCard />
        <NewsSection />
      </section>
    </div>
  );
};

export default Home;
