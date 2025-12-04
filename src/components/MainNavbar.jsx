import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-users"></i>
          <span>Community Connect</span>
        </div>

        <nav>
          <ul>
            <li><Link to="/home"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/forums"><i className="fas fa-comments"></i> Forums</Link></li>
            <li><Link to="/events"><i className="fas fa-calendar-alt"></i> Events</Link></li>
            <li><Link to="/members"><i className="fas fa-users"></i> Members</Link></li>
            <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="btn btn-outline btn-primary">
            <i className="fas fa-sign-in-alt"></i>
            <Link to="/login">Login</Link>
          </button>

          <button className="btn btn-primary">
            <i className="fas fa-user-plus"></i>
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavbar;
