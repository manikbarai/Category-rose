import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./HeroSlider.css"


import winterPet1 from "../../assets/winter-pet-1.png";
import winterPet2 from "../../assets/winter-pet-2.png";
import winterPet3 from "../../assets/winter-pet-3.png";
import winterPet4 from "../../assets/winter-pet-4.png";
import winterPet5 from "../../assets/winter-pet-5.png";
import winterPet6 from "../../assets/winter-pet-6.png";

const slides = [
  {
    image: winterPet1,
    smallTitle: "🐾 Winter is Better Together",
    title: (
      <>
        Cozy Outfits
        <br />
        <span>Happier Pets</span>
      </>
    ),
    description:
      "Keep your furry friends warm, stylish and comfortable this winter.",
    badge: "Small Outfits",
    badge2: "Big Love",
  },

  {
    image: winterPet2,
    smallTitle: "❄️ Snuggle Season",
    title: (
      <>
        Warm Paws
        <br />
        <span>Happy Hearts</span>
      </>
    ),
    description:
      "Soft winter sweaters made for chilly walks and cozy evenings.",
    badge: "Warm & Soft",
    badge2: "Made with Love",
  },

  {
    image: winterPet3,
    smallTitle: "🐾 Cold Days, Cozy Ways",
    title: (
      <>
        Winter Looks
        <br />
        <span>For Every Pet</span>
      </>
    ),
    description:
      "Discover adorable winter outfits designed for your best friend.",
    badge: "Cute Styles",
    badge2: "Cozy Moments",
  },

  {
    image: winterPet4,
    smallTitle: "🏠 Cozy Winter Home",
    title: (
      <>
        Stay Warm
        <br />
        <span>Stay Cozy</span>
      </>
    ),
    description:
      "From snowy adventures to lazy mornings, keep your pet extra warm.",
    badge: "Winter Ready",
    badge2: "Extra Cozy",
  },

  {
    image: winterPet5,
    smallTitle: "🧣 Style Meets Comfort",
    title: (
      <>
        Cute Sweaters
        <br />
        <span>Cozy Adventures</span>
      </>
    ),
    description:
      "Winter fashion your furry friend will love wearing every day.",
    badge: "Soft Knit",
    badge2: "Happy Pets",
  },

  {
    image: winterPet6,
    smallTitle: "✨ A Little Winter Magic",
    title: (
      <>
        Snowy Days
        <br />
        <span>Cozy Nights</span>
      </>
    ),
    description:
      "Make every winter moment warmer with our adorable pet collection.",
    badge: "Winter Magic",
    badge2: "Big Love ❤️",
  },
];

const Snow = () => {
  const snowflakes = Array.from({ length: 55 });

  return (
    <div className="snow-container">
      {snowflakes.map((_, index) => (
        <span
          className="snowflake"
          key={index}
          style={{
            "--left": `${Math.random() * 100}%`,
            "--size": `${Math.random() * 5 + 3}px`,
            "--duration": `${Math.random() * 6 + 5}s`,
            "--delay": `${Math.random() * 7}s`,
            "--opacity": Math.random() * 0.6 + 0.35,
          }}
        />
      ))}
    </div>
  );
};

const HeroSlider = () => {
  return (
    <section className="winter-hero">

      {/* Animated Snow */}
      <Snow />

      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".winter-next",
          prevEl: ".winter-prev",
        }}
        pagination={{
          el: ".winter-pagination",
          clickable: true,
        }}
        className="winter-swiper"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="winter-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Dark overlay */}
              <div className="winter-overlay"></div>

              {/* Warm glow */}
              <div className="warm-glow"></div>

              {/* Content */}
              <div className="winter-content">

                <div className="winter-small-title">
                  <span className="paw">🐾</span>
                  {slide.smallTitle}
                  <span className="heart">♡</span>
                </div>

                <h1 className="winter-title">
                  {slide.title}
                </h1>

                <p className="winter-description">
                  {slide.description}
                </p>

                <button className="winter-button">
                  Shop Winter Collection
                  <span>→</span>
                </button>

              </div>

              {/* Decorative badge */}
              <div className="winter-badge">

                <div className="badge-paw">
                  🐾
                </div>

                <div>
                  <span>{slide.badge}</span>
                  <br />
                  <span>{slide.badge2}</span>
                </div>

              </div>

              {/* Right side decorative sign */}
              <div className="winter-sign">
                <div className="sign-text">
                  Warm
                  <br />
                  Hearts
                  <br />
                  Brighter
                  <br />
                  Days ♡
                </div>
              </div>

            </div>

          </SwiperSlide>
        ))}

        {/* Previous */}
        <button className="winter-nav winter-prev">
          <span>‹</span>
        </button>

        {/* Next */}
        <button className="winter-nav winter-next">
          <span>›</span>
        </button>

        {/* Pagination */}
        <div className="winter-pagination"></div>

      </Swiper>
    </section>
  );
};

export default HeroSlider;