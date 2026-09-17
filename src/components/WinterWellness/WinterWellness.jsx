import React from "react";
import {
  FaSnowflake,
  FaPaw,
  FaHeart,
  FaShieldAlt,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";
import "./WinterWellness.css";

const wellnessTips = [
  {
    id: 1,
    icon: <FaSnowflake />,
    number: "01",
    title: "Keep Them Warm",
    description:
      "Create a cozy winter space with warm bedding, comfortable clothing and a peaceful place to rest.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    number: "02",
    title: "Protect Their Paws",
    description:
      "Cold surfaces can be tough on little paws. Keep them clean, dry and protected during winter walks.",
  },
  {
    id: 3,
    icon: <FaUtensils />,
    number: "03",
    title: "Winter Nutrition",
    description:
      "Fresh water and balanced nutrition help your furry friend stay energetic and healthy through colder days.",
  },
  {
    id: 4,
    icon: <FaHeart />,
    number: "04",
    title: "Extra Grooming",
    description:
      "Regular grooming keeps their winter coat healthy while helping prevent dry skin and uncomfortable tangles.",
  },
];

const WinterWellness = () => {
  return (
    <section className="winter-wellness">
      {/* Background decorations */}
      <div className="wellness-glow wellness-glow-one"></div>
      <div className="wellness-glow wellness-glow-two"></div>

      <div className="wellness-snow snow-one">❄</div>
      <div className="wellness-snow snow-two">✦</div>
      <div className="wellness-snow snow-three">❄</div>
      <div className="wellness-snow snow-four">✧</div>

      <div className="wellness-container">
        {/* Header */}
        <div className="wellness-header">
          <div className="wellness-badge">
            <FaPaw />
            <span>WINTER WELLNESS GUIDE</span>
          </div>

          <h2>
            A little extra care for
            <span> colder days.</span>
          </h2>

          <p>
            Winter is beautiful, but colder days need a little extra attention.
            Here are some simple ways to keep your furry companions warm,
            healthy and happy.
          </p>
        </div>

        {/* Main Content */}
        <div className="wellness-content">
          {/* Left Feature */}
          <div className="wellness-feature">
            <div className="feature-top">
              <span className="feature-label">PET CARE • WINTER 2026</span>

              <div className="feature-icon">
                <FaPaw />
              </div>
            </div>

            <div className="feature-content">
              <span className="feature-small-title">
                MAKE WINTER COZIER
              </span>

              <h3>
                Happy paws,
                <br />
                <span>happy winter.</span>
              </h3>

              <p>
                From cozy corners to healthy routines, small moments of care
                can make a big difference in your pet's winter experience.
              </p>

              <div className="feature-points">
                <div>
                  <FaPaw />
                  <span>Warm & Comfortable</span>
                </div>

                <div>
                  <FaHeart />
                  <span>Healthy & Happy</span>
                </div>
              </div>
            </div>

            <div className="feature-bottom">
              <span>WinterPaws Care</span>

              <div className="feature-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Wellness Cards */}
          <div className="wellness-grid">
            {wellnessTips.map((tip) => (
              <article className="wellness-card" key={tip.id}>
                <div className="wellness-card-top">
                  <div className="wellness-card-icon">{tip.icon}</div>

                  <span className="wellness-number">{tip.number}</span>
                </div>

                <div className="wellness-card-body">
                  <h3>{tip.title}</h3>

                  <p>{tip.description}</p>
                </div>

                <div className="wellness-card-line"></div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="wellness-bottom">
          <div className="bottom-paw">
            <FaPaw />
          </div>

          <p>
            “Because every little paw deserves a little extra warmth this
            winter.”
          </p>

          <span>— WinterPaws</span>
        </div>
      </div>
    </section>
  );
};

export default WinterWellness;