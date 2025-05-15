import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <section className="py-16 px-8 md:px-24  relative">
        <img
          src="/assets/aboutus.jpg"
          alt="About Us"
          className="mb-8 w-full h-auto rounded-lg shadow-lg"
        />
        {/* About Veda Section */}
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-4">
          <img
            src="/assets/title_left.png"
            alt="Left decorative swirl"
            className="w-20 h-12"
          />
          <span className="italic font-serif">About Veda</span>
          <img
            src="/assets/title_right.png"
            alt="Right decorative swirl"
            className="w-20 h-12"
          />
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The past century  witnessed a steady decline in the interest of
          people to study, protect, preserve, and propagate Indian culture and
          heritage. This is particularly true with respect to the Vedas. Several
          unique <i>shakas</i>, branches of the Vedas, were dwindling into
          non-existence.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          To address this pressing issue, a charitable institution was formed
          under the instruction and guidance of Sri Jayendra Saraswathi Swamy.
          He says that a true disciple of this Vedic life or{" "}
          <i>Vaidica Dharma</i> must strive to protect the Vedas.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The Vedas are divided into four primary texts: <b>Rigveda:</b> The oldest and
          most important of the Vedas, it contains hymns (mantras) dedicated to
          various deities, celebrating the forces of nature and cosmic order.{" "}
          <b>Yajurveda:</b> A compilation of ritual instructions and sacrificial
          formulas used in Vedic ceremonies. <b>Samveda:</b> A collection of melodies
          and chants, often derived from the Rigveda, designed for use in
          specific rituals and sung by priests. <b>Atharvaveda:</b> A diverse text
          containing hymns, spells, charms, and practical knowledge addressing
          everyday concerns like health, prosperity, and protection.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <b>Components of Each Veda:</b> Each Veda has four subdivisions, reflecting
          different aspects of its teachings: Samhitas: Hymns and prayers.
          Brahmanas: Prose texts explaining rituals and ceremonies. Aranyakas:
          "Forest books" that explore the philosophical meaning behind rituals.
          Upanishads: Mystical and philosophical texts that form the core of
          Vedantic philosophy.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <b>Significance of the Vedas:</b> The Vedas are much more than religious
          texts; they are a treasure trove of wisdom that encompasses:
          Spirituality: Exploring profound questions about life, existence, and
          the universe. Philosophy: Laying the groundwork for Indian schools of
          thought, including Vedanta, Yoga, and Mimamsa. Science: Containing
          insights into astronomy, mathematics, medicine (Ayurveda), and
          ecology. Cultural Heritage: Preserving the oral traditions and values
          of ancient Indian society.
        </p>

        {/* The Glimpse Section */}
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-4">
          <img
            src="/assets/title_left.png"
            alt="Left decorative swirl"
            className="w-20 h-12"
          />
          <span className="italic font-serif">The Glimpse</span>
          <img
            src="/assets/title_right.png"
            alt="Right decorative swirl"
            className="w-20 h-12"
          />
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          It is said that this form of knowledge "THE <span className="italic">Vedas</span>" is protected by LORD BRAHMA. LORD MAHAVISHNU incarnated as BHAGAVAN VEDA VYASA in Dvapara Yuga and categorized it into four major branches (*shakas*).
        </p>



        {/* Vedas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rigveda */}
          <div
            className="inner_block p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "#ffaa07" }}
          >
            <img
              src="/assets/icon_rig.png"
              alt="Rigveda"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              Rig Veda <span className="block text-sm font-light">Book of Hymns</span>
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              The <span className="italic">Rigveda</span> is the oldest and most
              important of the Vedas, containing hymns dedicated to the deities
              that praise the cosmic order. It serves as the primary source of
              Vedic knowledge and spirituality.
            </p>
            <p className="text-lg text-white leading-relaxed">
              It is divided into ten <span className="italic">mandalas</span> or
              books, each containing mantras and praises for deities like Agni,
              Indra, and Varuna.
            </p>
            <div className="author text-center mt-4 text-white font-semibold">
              The main deity: Agni – Fire God
            </div>
          </div>

          {/* Yajurveda */}
          <div
            className="inner_block p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "#dd5a2c" }}
          >
            <img
              src="/assets/icon_yajur.png"
              alt="Yajurveda"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              Yajur Veda <span className="block text-sm font-light">Book of Rituals</span>
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              The <span className="italic">Yajurveda</span> is a manual for
              performing sacred rituals. Derived from the word{" "}
              <span className="italic">yajus</span> (worship), it provides
              instructions for sacrifices and ceremonies.
            </p>
            <p className="text-lg text-white leading-relaxed">
              It has two branches: <span className="italic">Shukla</span>{" "}
              (white) and <span className="italic">Krishna</span> (black),
              comprising prose and poetic mantras.
            </p>
            <div className="author text-center mt-4 text-white font-semibold">
              The main deity: Surya – Sun God
            </div>
          </div>

          {/* Samaveda */}
          <div
            className="inner_block p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "#dd5a2c" }}
          >
            <img
              src="/assets/icon_sama.png"
              alt="Samaveda"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              Sama Veda <span className="block text-sm font-light">Book of Songs</span>
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              The <span className="italic">Samaveda</span> focuses on music and
              melodies to enhance the spiritual experience. Many of its hymns
              are derived from the Rigveda but are set to music for chanting.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Lord Krishna said in the <span className="italic">Bhagavad Gita</span> that
              among the Vedas, he is the <span className="italic">Samaveda</span>.
            </p>
            <div className="author text-center mt-4 text-white font-semibold">
              The main deity: Vayu – Wind God
            </div>
          </div>

          {/* Atharvaveda */}
          <div
            className="inner_block p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "#f45c2a" }}
          >
            <img
              src="/assets/icon_atharva.png"
              alt="Atharvaveda"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              Atharva Veda <span className="block text-sm font-light">Book of Mantras</span>
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              The <span className="italic">Atharvaveda</span> contains hymns and
              spells for practical and spiritual use. It addresses daily life,
              offering protection against evil, health remedies, and prosperity.
            </p>
            <p className="text-lg text-white leading-relaxed">
              It extols the creation of the universe in the hymn{" "}
              <span className="italic">Prithivi Sooktam</span> and holds the
              <span className="italic">Maandukya Upanishad</span>, considered
              essential for attaining liberation.
            </p>
            <div className="author text-center mt-4 text-white font-semibold">
              The main deity: Chandra – Moon God
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
