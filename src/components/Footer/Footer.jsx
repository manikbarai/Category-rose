import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaw,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* Floating snow */}
      <div className="footer-snow snow-one">❄</div>
      <div className="footer-snow snow-two">❄</div>
      <div className="footer-snow snow-three">✦</div>
      <div className="footer-snow snow-four">❄</div>
      <div className="footer-snow snow-five">✦</div>

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand footer-item">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              <FaPaw />
            </div>

            <div>
              <h2>Paw & Cozy</h2>
              <span>Warm hearts, happy paws.</span>
            </div>
          </div>

          <p className="footer-description">
            Cozy winter essentials and adorable outfits made
            to keep your furry friends warm, stylish and happy.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="Youtube">
              <FaYoutube />
            </a>

          </div>

        </div>


        {/* Explore */}
        <div className="footer-column footer-item">

          <h3>Explore</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop">Winter Collection</a></li>
            <li><a href="/pets">Our Pets</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact footer-item">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>

            <p>
              123 Cozy Street,
              <br />
              Winter Town
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <FaPhoneAlt />
            </span>

            <p>+880 1234-567890</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <p>hello@pawandcozy.com</p>
          </div>

        </div>


        {/* Newsletter */}
        <div className="footer-column newsletter footer-item">

          <h3>Stay Cozy</h3>

          <p>
            Get the latest pet fashion,
            winter tips and special offers.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button type="submit">
              <FaArrowRight />
            </button>

          </form>

          <small>
            We respect your privacy. No spam.
          </small>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Paw & Cozy. All rights reserved.
          </p>

          <div className="legal-links">
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms & Conditions
            </a>

            <a href="/cookies">
              Cookie Policy
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;