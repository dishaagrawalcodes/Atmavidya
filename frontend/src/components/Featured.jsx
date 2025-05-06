import FeaturedCard from "./FeaturedCard";
import featured from "./images/vedas.jpg";

function Featured() {
  const data = [
    {
      img: "https://m.media-amazon.com/images/I/51mDE-WDILL._SY445_SX342_.jpg",
      heading: "Rigveda - The Oldest Scripture of Knowledge",
      para: " The Rigveda, the most ancient of the Vedas, is a treasure trove of hymns praising natural forces and deities. It provides profound insights into early Vedic culture and philosophy, laying the foundation of spiritual wisdom.",
    },
    {
      img: "https://i.pinimg.com/736x/84/80/c8/8480c8dd170d487000b8c8b257c29a30.jpg",
      heading: "Samaveda - The Melodic Wisdom",
      para: "The Samaveda, known for its hymns sung during rituals, bridges spirituality and music. Its verses form the basis of Indian classical music, echoing divine melodies that uplift the soul.",
    },
    {
      img: "https://m.media-amazon.com/images/I/51-Nbd8L4OL._SY445_SX342_.jpg",
      heading: " Atharvaveda - The Veda of Everyday Life",
      para: "A guide to practical and spiritual living, the Atharvaveda offers hymns, rituals, and remedies. It touches on medicine, daily life, and cosmic principles, embodying a holistic worldview.",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/l12h1u80/regionalbooks/r/u/8/atharvaveda-yajurveda-book-hindi-book-size-22-15-cm-original-imagcpnpf6unkyh7.jpeg",
      heading: "Yajurveda - The Manual of Sacred Rituals",
      para: "The Yajurveda serves as a guide for conducting Vedic rituals and ceremonies. Its prose and chants reflect the intricate relationship between humans and the divine, fostering harmony and order.",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617009497i/57562510.jpg",
      heading: "Mahabharat - The Great Epic of Dharma",
      para: "The Mahabharat, authored by Sage Vyasa, is the longest epic in the world. It explores the complexity of human emotions, duty, and morality, with the Bhagavad Gita as its spiritual core.",
    },
    {
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781839647772/ramayana-9781839647772_lg.jpg",
      heading: "Ramayan - The Epic of Devotion and Virtue",
      para: "The Ramayan, composed by Sage Valmiki, narrates the journey of Lord Rama. This timeless epic teaches the values of righteousness, devotion, and familial love, resonating across generations.",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-12 text-orange-200 bg-[#33160a] py-8">
        <div className=" col-span-3 pl-3 sm:pl-12 sm:mx-auto">
          <img src={featured} alt="" className="h-48 w-48 rounded-xl" />
        </div>
     
        <div className="col-span-9  sm:mt-28 pl-3">
         <p className="text-3xl sm:text-5xl pt-4">Featured Scriptures</p>
         <p>Brouse through some of your top pics</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-1 mt-8 place-items-center">
        {data.map((item, index) => (
          <FeaturedCard key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default Featured;
