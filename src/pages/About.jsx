import InnerNavbar from "../components/innerNavbar";
import { Link } from "react-router-dom";
import Innerfooter from "../components/Innerfooter";
import "../pages css/about.css"; 

function About() {
  return (
    <>
      <InnerNavbar/>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>About Community Connect</h1>
        <p>
          Learn more about our mission, our values, and how we bring people
          together.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Community Connect is a platform built to unite individuals,
          neighborhoods, and organizations. We provide a space for people to
          come together, share experiences, exchange ideas, and participate in
          local events.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to strengthen communities by enabling meaningful
          connections. Whether you want to join discussions, attend events,
          volunteer, or simply meet new people, Community Connect helps you stay
          involved and informed.
        </p>

        <h2>What We Offer</h2>
        <ul className="features">
          <li>
            <i className="fa-solid fa-comments"></i> Community Forums to share
            ideas & ask questions
          </li>
          <li>
            <i className="fa-solid fa-calendar-check"></i> Local Events and
            Activities
          </li>
          <li>
            <i className="fa-solid fa-users"></i> Member Profiles & Networking
          </li>
          <li>
            <i className="fa-solid fa-handshake-angle"></i> Volunteer
            Opportunities
          </li>
          <li>
            <i className="fa-solid fa-bell"></i> Real-time Updates &
            Announcements
          </li>
        </ul>
      </section>

      <Innerfooter/>
    </>
  );
}

export default About;
