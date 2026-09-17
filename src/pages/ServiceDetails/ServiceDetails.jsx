import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

import "./ServiceDetails.css";
import { AuthContext } from "../../context/AuthContext";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedService = data.find(
          (item) => String(item.serviceId) === String(serviceId)
        );

        setService(selectedService);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [serviceId]);

  useEffect(() => {
    setFormData({
      name: user?.displayName || "",
      email: user?.email || "",
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBookService = (e) => {
    e.preventDefault();

    toast.success("Service booked successfully! 🐾");

    setFormData({
      name: "",
      email: "",
    });
  };

  if (loading) {
    return (
      <div className="service-details-loading">
        <div className="details-loader"></div>

        <p>
          Preparing your cozy pet-care experience...
        </p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-not-found">

        <div className="not-found-paw">
          🐾
        </div>

        <h2>
          Service Not Found
        </h2>

        <p>
          Sorry, we couldn't find the service you're looking for.
        </p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>

      </div>
    );
  }

  return (
    <main className="service-details-page">

      {/* Decorative Elements */}

      <span className="details-snow snow-one">
        ❄
      </span>

      <span className="details-snow snow-two">
        ✦
      </span>

      <span className="details-snow snow-three">
        ❄
      </span>


      <div className="service-details-container">

        {/* ===============================
            Breadcrumb
        ================================ */}

        <div className="details-breadcrumb">

          <button onClick={() => navigate("/")}>
            Home
          </button>

          <span>→</span>

          <span>
            Service Details
          </span>

        </div>


        {/* ===============================
            SERVICE HERO
        ================================ */}

        <section className="service-hero">

          {/* Image */}

          <div className="service-image-wrapper">

            <img
              src={service.image}
              alt={service.serviceName}
              className="service-details-image"
            />

            <div className="service-image-overlay"></div>

            <span className="winter-service-badge">
              ❄ Winter Care
            </span>

          </div>


          {/* Content */}

          <div className="service-hero-content">

            <span className="service-category-label">
              {service.category}
            </span>

            <h1>
              {service.serviceName}
            </h1>

            <p className="service-main-description">
              {service.description}
            </p>


            {/* Quick Info */}

            <div className="service-quick-info">

              <div className="quick-info-card">

                <div className="quick-icon rating-icon">
                  ⭐
                </div>

                <div>
                  <span>
                    Rating
                  </span>

                  <strong>
                    {service.rating}
                  </strong>
                </div>

              </div>


              <div className="quick-info-card">

                <div className="quick-icon price-icon">
                  💰
                </div>

                <div>
                  <span>
                    Price
                  </span>

                  <strong>
                    ${service.price}
                  </strong>
                </div>

              </div>


              <div className="quick-info-card">

                <div className="quick-icon slot-icon">
                  🐾
                </div>

                <div>
                  <span>
                    Available
                  </span>

                  <strong>
                    {service.slotsAvailable} Slots
                  </strong>
                </div>

              </div>

            </div>


            {/* Provider */}

            <div className="provider-box">

              <div className="provider-avatar">
                🏠
              </div>

              <div className="provider-info">

                <span>
                  SERVICE PROVIDER
                </span>

                <strong>
                  {service.providerName}
                </strong>

                <small>
                  {service.providerEmail}
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* ===============================
            SERVICE INFORMATION
        ================================ */}

        <section className="service-information">

          <div className="details-section-heading">

            <span>
              SERVICE INFORMATION
            </span>

            <h2>
              Everything You Need to Know
            </h2>

            <p>
              Explore complete information about this
              winter pet-care service.
            </p>

          </div>


          <div className="service-data-grid">

            {/* Service ID */}

            <div className="service-data-card">

              <div className="data-card-icon">
                #️⃣
              </div>

              <div>
                <span>
                  Service ID
                </span>

                <strong>
                  #{service.serviceId}
                </strong>
              </div>

            </div>


            {/* Category */}

            <div className="service-data-card">

              <div className="data-card-icon">
                🏷️
              </div>

              <div>
                <span>
                  Category
                </span>

                <strong>
                  {service.category}
                </strong>
              </div>

            </div>


            {/* Provider */}

            <div className="service-data-card">

              <div className="data-card-icon">
                🏢
              </div>

              <div>
                <span>
                  Provider
                </span>

                <strong>
                  {service.providerName}
                </strong>
              </div>

            </div>


            {/* Provider Email */}

            <div className="service-data-card">

              <div className="data-card-icon">
                ✉️
              </div>

              <div>
                <span>
                  Provider Email
                </span>

                <strong className="break-text">
                  {service.providerEmail}
                </strong>
              </div>

            </div>


            {/* Price */}

            <div className="service-data-card">

              <div className="data-card-icon">
                💰
              </div>

              <div>
                <span>
                  Service Price
                </span>

                <strong>
                  ${service.price}
                </strong>
              </div>

            </div>


            {/* Rating */}

            <div className="service-data-card">

              <div className="data-card-icon">
                ⭐
              </div>

              <div>
                <span>
                  Customer Rating
                </span>

                <strong>
                  {service.rating} / 5
                </strong>
              </div>

            </div>


            {/* Slots */}

            <div className="service-data-card">

              <div className="data-card-icon">
                👥
              </div>

              <div>
                <span>
                  Available Slots
                </span>

                <strong>
                  {service.slotsAvailable}
                </strong>
              </div>

            </div>


            {/* Image */}

            <div className="service-data-card">

              <div className="data-card-icon">
                🖼️
              </div>

              <div>
                <span>
                  Service Image
                </span>

                <strong>
                  Available
                </strong>
              </div>

            </div>

          </div>


          {/* Description */}

          <div className="full-description-card">

            <div className="description-icon">
              📝
            </div>

            <div>

              <span>
                SERVICE DESCRIPTION
              </span>

              <p>
                {service.description}
              </p>

            </div>

          </div>

        </section>


        {/* ===============================
            BOOK SERVICE
        ================================ */}

        <section className="booking-section">

          {/* Left */}

          <div className="booking-content">

            <span className="booking-eyebrow">
              🐾 READY TO GET STARTED?
            </span>

            <h2>
              Give Your Pet
              <span> The Care They Deserve.</span>
            </h2>

            <p>
              Book this winter service and give your furry
              companion a warmer, healthier and happier season.
            </p>


            <div className="booking-benefits">

              <div>
                <span>✓</span>
                Easy & quick booking
              </div>

              <div>
                <span>✓</span>
                Trusted pet-care provider
              </div>

              <div>
                <span>✓</span>
                Winter-ready service
              </div>

            </div>

          </div>


          {/* Form */}

          <div className="booking-form-card">

            <div className="booking-form-header">

              <div className="booking-form-icon">
                🐾
              </div>

              <div>

                <h3>
                  Book Your Service
                </h3>

                <p>
                  Fill in your details to reserve.
                </p>

              </div>

            </div>


            <form onSubmit={handleBookService}>

              {/* Name */}

              <div className="booking-field">

                <label htmlFor="booking-name">
                  Full Name
                </label>

                <div className="booking-input">

                  <span>
                    👤
                  </span>

                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className="booking-field">

                <label htmlFor="booking-email">
                  Email Address
                </label>

                <div className="booking-input">

                  <span>
                    ✉
                  </span>

                  <input
                    id="booking-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              <button
                type="submit"
                className="book-now-button"
              >

                <span>
                  🐾
                </span>

                Book Now

                <span className="booking-arrow">
                  →
                </span>

              </button>

            </form>

          </div>

        </section>

      </div>

    </main>
  );
};

export default ServiceDetails;