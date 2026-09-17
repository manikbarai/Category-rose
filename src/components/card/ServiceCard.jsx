import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const {
    serviceName,
    rating,
    price,
    image,
    category,
  } = service;

  return (
    <div className="service-card group">
      {/* Image */}
      <div className="service-image-wrapper">
        <img
          src={image}
          alt={serviceName}
          className="service-image"
        />

        {/* Category Badge */}
        <span className="service-category">
          {category}
        </span>

        {/* Rating */}
        <div className="service-rating">
          <FaStar />
          <span>{rating}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="service-content">
        <h3 className="service-title">
          {serviceName}
        </h3>

        {/* Price */}
        <div className="service-bottom">
          <div>
            <p className="price-label">Starting from</p>
            <p className="service-price">
              ${price}
            </p>
          </div>

          <button className="details-btn">
            View Details
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;