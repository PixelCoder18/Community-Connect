import { Link } from "react-router-dom";
import "../pages css/innerNavbar.css";

function InnerNavbar() {
  return (
    // <!-- NAVBAR -->
    <header class="navbar">
        <div class="logo">
            <i class="fa-solid fa-users"></i> Community Connect
        </div>

        <ul class="nav-links">
            <li><Link to="/home"><i class="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to="/forums"><i class="fa-solid fa-comments"></i> Forums</Link></li>
            <li><Link to="/events"><i class="fa-solid fa-calendar"></i> Events</Link></li>
            <li><Link to="/members"><i class="fa-solid fa-user-group"></i> Members</Link></li>
            <li><Link to="/about"><i class="fa-solid fa-circle-info"></i> About</Link></li>
        </ul>

        <div class="nav-buttons">
            <a href="login.html" class="login-btn"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
            <a href="signup.html" class="signup-btn"><i class="fa-solid fa-user-plus"></i> Sign Up</a>
        </div>
    </header>
  );
}

export default InnerNavbar;
