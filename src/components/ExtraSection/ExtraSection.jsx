import React from "react";
import "./ExtraSection.css";

const winterCareTips = [
  {
    number: "01",
    icon: "🧣",
    title: "Keep Them Warm",
    text: "Give your furry friend a warm, cozy sleeping space away from cold drafts.",
  },
  {
    number: "02",
    icon: "🐾",
    title: "Protect Their Paws",
    text: "Clean and dry your pet's paws after outdoor walks to protect them from cold surfaces.",
  },
  {
    number: "03",
    icon: "💧",
    title: "Fresh Water",
    text: "Make sure your pet always has access to fresh and clean drinking water.",
  },
  {
    number: "04",
    icon: "✂️",
    title: "Regular Grooming",
    text: "Regular grooming keeps their coat healthy and provides better protection from the cold.",
  },
  {
    number: "05",
    icon: "🥣",
    title: "Healthy Nutrition",
    text: "A balanced diet helps your pet maintain energy and stay healthy throughout winter.",
  },
  {
    number: "06",
    icon: "❤️",
    title: "Watch For Discomfort",
    text: "Keep an eye out for shivering, unusual tiredness, or reluctance to move.",
  },
];

const expertVets = [
  {
    name: "Dr. Emily Carter",
    specialty: "Veterinary Medicine",
    experience: "8+ Years Experience",
    avatar: "👩🏻‍⚕️",
  },
  {
    name: "Dr. Daniel Wilson",
    specialty: "Pet Dermatology",
    experience: "10+ Years Experience",
    avatar: "👨🏻‍⚕️",
  },
  {
    name: "Dr. Sophia Miller",
    specialty: "Small Animal Care",
    experience: "7+ Years Experience",
    avatar: "👩🏼‍⚕️",
  },
  {
    name: "Dr. Michael Anderson",
    specialty: "Animal Nutrition",
    experience: "9+ Years Experience",
    avatar: "👨🏼‍⚕️",
  },
];

const ExtraSection = () => {
  return (
    <section className="extra-section">

      {/* Decorative Snow */}
      <span className="extra-snow extra-snow-1">❄</span>
      <span className="extra-snow extra-snow-2">✦</span>
      <span className="extra-snow extra-snow-3">❄</span>
      <span className="extra-snow extra-snow-4">✦</span>


      <div className="extra-container">

        {/* =====================================
            WINTER CARE TIPS
        ====================================== */}

        <section className="care-section">

          <div className="extra-heading">

            <div className="extra-heading-content">

              <span className="extra-eyebrow">
                ❄ WINTER WELLNESS GUIDE
              </span>

              <h2>
                Winter Care Tips{" "}
                <span>for Pets</span>
              </h2>

              <p>
                Simple seasonal care tips to help your furry
                companions stay warm, safe, and healthy all winter.
              </p>

            </div>

            <div className="heading-decoration">
              ☃️
            </div>

          </div>


          <div className="care-tips-grid">

            {winterCareTips.map((tip) => (
              <article
                className="care-tip-card"
                key={tip.number}
              >

                <span className="tip-number">
                  {tip.number}
                </span>

                <div className="tip-icon">
                  {tip.icon}
                </div>

                <div className="tip-content">

                  <h3>
                    {tip.title}
                  </h3>

                  <p>
                    {tip.text}
                  </p>

                </div>

                <span className="tip-arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================
            EXPERT VETS
        ====================================== */}

        <section className="expert-section">

          <div className="extra-heading">

            <div className="extra-heading-content">

              <span className="extra-eyebrow">
                🩺 TRUSTED PET PROFESSIONALS
              </span>

              <h2>
                Meet Our{" "}
                <span>Expert Vets</span>
              </h2>

              <p>
                Meet caring professionals dedicated to keeping
                your furry companions happy and healthy.
              </p>

            </div>

            <div className="heading-decoration vet-decoration">
              🩺
            </div>

          </div>


          <div className="expert-grid">

            {expertVets.map((vet) => (
              <article
                className="expert-card"
                key={vet.name}
              >

                <div className="expert-card-top">
                  <span className="mini-snow">❄</span>
                  <span className="mini-paw">🐾</span>
                </div>


                <div className="vet-avatar-wrapper">

                  <div className="vet-avatar">
                    {vet.avatar}
                  </div>

                  <span className="vet-check">
                    ✓
                  </span>

                </div>


                <div className="vet-content">

                  <span className="vet-specialty">
                    {vet.specialty}
                  </span>

                  <h3>
                    {vet.name}
                  </h3>

                  <div className="vet-experience">

                    <span className="star">
                      ★
                    </span>

                    {vet.experience}

                  </div>

                  <p>
                    Dedicated to providing compassionate,
                    professional care for your beloved pets.
                  </p>

                </div>


                <div className="vet-footer">

                  <span>
                    🐾 Pet Care Specialist
                  </span>

                  <span className="vet-arrow">
                    →
                  </span>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================
            BOTTOM CTA
        ====================================== */}

        <div className="extra-cta">

          <div className="cta-paw">
            🐾
          </div>

          <div className="cta-content">

            <span>
              A LITTLE EXTRA LOVE
            </span>

            <h3>
              Because every pet deserves a cozy winter.
            </h3>

          </div>

          <div className="cta-snow">
            ❄️
          </div>

        </div>

      </div>

    </section>
  );
};

export default ExtraSection;