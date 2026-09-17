import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPaw,
  FaSearch,
  FaSnowflake,
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import ServiceCard from "../../components/card/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  /* =====================================
     CATEGORIES
  ===================================== */

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        services
          .map((service) => service.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [services]);

  /* =====================================
     FILTER SERVICES
  ===================================== */

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        service.serviceName?.toLowerCase().includes(searchText) ||
        service.description?.toLowerCase().includes(searchText) ||
        service.providerName?.toLowerCase().includes(searchText) ||
        service.category?.toLowerCase().includes(searchText);

      const matchesCategory =
        activeCategory === "All" ||
        service.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [services, search, activeCategory]);

  /* =====================================
     HERO SERVICE
  ===================================== */

  const featuredService =
    services.find((service) => service.serviceId === 20) ||
    services[0];

  return (
    <main className="services-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="services-hero">

        {/* Background decoration */}
        <div className="services-glow services-glow-one"></div>
        <div className="services-glow services-glow-two"></div>

        <div className="services-snow snow-1">
          <FaSnowflake />
        </div>

        <div className="services-snow snow-2">
          <FaSnowflake />
        </div>

        <div className="services-snow snow-3">
          <FaSnowflake />
        </div>

        <div className="services-snow snow-4">
          <FaSnowflake />
        </div>

        <div className="floating-paw paw-1">
          <FaPaw />
        </div>

        <div className="floating-paw paw-2">
          <FaPaw />
        </div>


        <div className="services-hero-container">

          {/* HERO CONTENT */}

          <div className="services-hero-content">

            <div className="services-badge">
              <FaPaw />
              <span>WINTER PET CARE SERVICES</span>
            </div>

            <h1>
              Thoughtful care for
              <br />
              <span>every little paw.</span>
            </h1>

            <p>
              From cozy grooming sessions to complete winter care,
              discover trusted services designed to keep your furry
              companions warm, safe, healthy and happy.
            </p>

            <div className="services-hero-actions">

              <a
                href="#all-services"
                className="services-primary-btn"
              >
                Explore Services

                <span>
                  <FaArrowRight />
                </span>
              </a>

              <Link
                to="/"
                className="services-secondary-btn"
              >
                Back to Home
              </Link>

            </div>


            {/* Trust */}

            <div className="services-trust">

              <div className="trust-item">
                <FaShieldAlt />

                <div>
                  <strong>Trusted Care</strong>
                  <span>Pet-first services</span>
                </div>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <FaHeart />

                <div>
                  <strong>20+ Services</strong>
                  <span>For every winter need</span>
                </div>
              </div>

            </div>

          </div>


          {/* =====================================
              HERO VISUAL
          ===================================== */}

          <div className="services-hero-visual">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="hero-pet-card">

              {featuredService && (
                <img
                  src={featuredService.image}
                  alt={featuredService.serviceName}
                  className="hero-service-image"
                />
              )}

              <div className="hero-image-overlay"></div>


              {/* Rating */}

              <div className="hero-floating-card rating-card">

                <FaStar />

                <div>
                  <strong>
                    {featuredService?.rating || "5.0"}
                  </strong>

                  <span>
                    Premium rated service
                  </span>
                </div>

              </div>


              {/* Care */}

              <div className="hero-floating-card care-card">

                <FaPaw />

                <div>
                  <strong>
                    Complete Care
                  </strong>

                  <span>
                    Made for winter
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          STATS
      ===================================== */}

      <section className="services-stats">

        <div className="services-stats-container">

          <div className="service-stat">

            <div className="stat-icon">
              <FaPaw />
            </div>

            <div>
              <strong>20+</strong>
              <span>Winter Services</span>
            </div>

          </div>


          <div className="stat-line"></div>


          <div className="service-stat">

            <div className="stat-icon">
              <FaHeart />
            </div>

            <div>
              <strong>16</strong>
              <span>Care Categories</span>
            </div>

          </div>


          <div className="stat-line"></div>


          <div className="service-stat">

            <div className="stat-icon">
              <FaShieldAlt />
            </div>

            <div>
              <strong>5.0</strong>
              <span>Top Rated Care</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          ALL SERVICES
      ===================================== */}

      <section
        className="all-services-section"
        id="all-services"
      >

        <div className="all-services-container">


          {/* SECTION HEADING */}

          <div className="services-section-heading">

            <div>

              <span className="section-mini-title">
                <FaSnowflake />
                EXPLORE OUR SERVICES
              </span>

              <h2>
                Everything your pet needs,
                <span> this winter.</span>
              </h2>

              <p>
                Carefully selected services to support your pet's
                comfort, health and happiness throughout the cold season.
              </p>

            </div>


            <div className="service-count">

              <strong>
                {filteredServices.length}
              </strong>

              <span>
                services available
              </span>

            </div>

          </div>


          {/* =====================================
              SEARCH
          ===================================== */}

          <div className="services-controls">

            <div className="service-search">

              <FaSearch />

              <input
                type="text"
                placeholder="Search grooming, health, clothing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}

            </div>


            {/* =====================================
                CATEGORY FILTER
            ===================================== */}

            <div className="service-categories">

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-btn active"
                      : "category-btn"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

          </div>


          {/* =====================================
              SERVICE CARDS
          ===================================== */}

          {filteredServices.length > 0 ? (

            <div className="services-grid">

              {filteredServices.map((service) => (

                <div
                  className="service-card-wrapper"
                  key={service.serviceId}
                >
                  <ServiceCard service={service} />
                </div>

              ))}

            </div>

          ) : (

            <div className="no-services">

              <div className="no-services-icon">
                <FaPaw />
              </div>

              <h3>
                No service found
              </h3>

              <p>
                Try searching for another service or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                View All Services
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================
          PREMIUM CTA
      ===================================== */}

      <section className="services-cta">

        <div className="cta-snow cta-snow-one">
          ❄
        </div>

        <div className="cta-snow cta-snow-two">
          ✦
        </div>

        <div className="cta-snow cta-snow-three">
          ❄
        </div>


        <div className="services-cta-content">

          <div className="cta-icon">
            <FaPaw />
          </div>

          <span>
            KEEP THOSE TAILS WAGGING
          </span>

          <h2>
            Give your best friend
            <br />
            a <strong>cozier winter.</strong>
          </h2>

          <p>
            Explore WinterPaws services and find the right care
            for every cold-weather need.
          </p>

          <a
            href="#all-services"
            className="cta-button"
          >
            Explore Services
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Services;