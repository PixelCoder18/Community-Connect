import React from "react";
// import "./Footer.css"; // optional if you are using external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* About Section */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              CommunityConnect is a platform for people to connect, share
              knowledge, and grow together in a supportive environment.
            </p>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/"><i className="fas fa-chevron-right"></i> Home</a>
              </li>

              <li>
                <a href="/forums"><i className="fas fa-chevron-right"></i> Forum</a>
              </li>

              <li>
                <a href="/events"><i className="fas fa-chevron-right"></i> Events</a>
              </li>

              <li>
                <a href="/members"><i className="fas fa-chevron-right"></i> Members</a>
              </li>

              <li>
                <a href="#"><i className="fas fa-chevron-right"></i> Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i> 123 Community St, City
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fas fa-phone"></i> (123) 456-7890
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fas fa-envelope"></i> info@communityconnect.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 CommunityConnect. All rights reserved. | Designed with{" "}
            <i className="fas fa-heart" style={{ color: "#e74c3c" }}></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
