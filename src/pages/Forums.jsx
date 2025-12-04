import InnerNavbar from "../components/innerNavbar";
import { Link } from "react-router-dom";
import Innerfooter from "../components/Innerfooter";
import "../pages css/forums.css";

const forums = () => {
  return (
    <div>
    <InnerNavbar />
      {/* <!-- Hero Section --> */}
    <section class="hero">
        <h1>Community Forums</h1>
        <p>Join discussions, ask questions, share updates, and connect with other community members.</p>
    </section>

    {/* <!-- Forums Section --> */}
    <section class="forums-container">

        <div class="forum-card">
            <h2><i class="fa-solid fa-bullhorn"></i> Announcements</h2>
            <p>Official updates, important news, and community notices.</p>
            <a href="#" class="forum-btn">View Discussions</a>
        </div>

        <div class="forum-card">
            <h2><i class="fa-solid fa-handshake-angle"></i> Volunteering</h2>
            <p>Connect with volunteer groups and join community service activities.</p>
            <a href="#" class="forum-btn">View Discussions</a>
        </div>

        <div class="forum-card">
            <h2><i class="fa-solid fa-comments"></i> General Discussions</h2>
            <p>Talk about ideas, suggestions, or anything happening in your community.</p>
            <a href="#" class="forum-btn">View Discussions</a>
        </div>

        <div class="forum-card">
            <h2><i class="fa-solid fa-lightbulb"></i> Ideas & Suggestions</h2>
            <p>Share your thoughts on how to improve the community.</p>
            <a href="#" class="forum-btn">View Discussions</a>
        </div>

    </section>
    <Innerfooter />
    </div>
  )
}

export default forums
