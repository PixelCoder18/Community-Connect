import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import "/src/style.css";

function Home() {
  return (
    <>
      <MainNavbar />

      {/* ⚠️ Paste your index.html homepage body content here */}
      {/* Your hero section */}
      {/* Your features section */}
      {/* Your stats */}
      {/* Your events */}

    <section class="hero">
        <div class="containerhero-content">
            <h1 class="animate">Connecting People. Building Communities.</h1>
            <p class="animate delay-1">Be a part of our community where you can connect with like-minded individuals, exchange ideas, and join fun and inspiring events.</p>
            <button class="btn btn-primary animate delay-2"><i class="fas fa-arrow-right"></i> Join Our Community</button>
        </div>
    </section>
    
    {/* <!-- featers section --> */}
    <section class="features">
        <div class="container">
            <h2 class="section-title">Community Features</h2>
            <div class="features-grid">
                <div class="feature-card animate">
                    <div class="feature-icon">
                        <i class="fas fa-comments "></i>
                    </div>
                    <h3>Community Discussions</h3>
                    <p>Post questions, start discussions, and join ongoing conversations curated for our community.
Discover new ideas and contribute your knowledge.</p>
                </div>
                <div class="feature-card animate delay-1">
                    <div class="feature-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3>Community Events</h3>
                    <p>Stay updated with our upcoming community events, workshops, and meetups.
Explore what’s happening around you and be part of exciting sessions that bring people together to learn, share, and grow.</p>
                </div>
                <div class="feature-card animate delay-2">
                    <div class="feature-icon"><i class="fas fa-users"></i></div>
                    <h3>Community Connections</h3>
                    <p>Our community connections feature helps you expand your network and engage with others.
Collaborate, share insights, and make lasting relationships that go beyond the platform.</p>
                </div>
            </div>
            <div class="forum-preview animate delay-3">
                <div class="forum-header">
                   <h3><i class="fas fa-fire"></i>Trending Discussions</h3>
                   <a href="#"><i class="fas fa-arrow-right"></i> View All Forum</a>
                </div>
                <ul class="thread-list">
                    <li class="thread-items">
                        <div class="thread-icon">
                            <i class="fas fa-comment-dots"></i>
                        </div>
                        <div class="thread-content">
                            <div class="thread-title">Welcome to our Community! Introduce Yourself Here</div>
                            <div class="thread-meta">
                                <span>
                                    <i class="fas fa-user"></i> Admin</span>
                                <span>
                                    <i class="fas fa-comments"></i> 150 Replies
                                </span>
                                <span>
                                    <i class="fas fa-eye"></i> 1.4k views
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="thread-items">
                        <div class="thread-icon">
                            <i class="fas fa-comment-dots"></i>
                        </div>
                        <div class="thread-content">
                            <div class="thread-title">how to started with the web devlopment?</div>
                            <div class="thread-meta">
                                <span>
                                    <i class="fas fa-user"></i> EventOrganizer</span>
                                <span>
                                    <i class="fas fa-comments"></i> 85 Replies
                                </span>
                                <span>
                                    <i class="fas fa-eye"></i> 980 views
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="thread-items">
                        <div class="thread-icon">
                            <i class="fas fa-comment-dots"></i>
                        </div>
                        <div class="thread-content">
                            <div class="thread-title">Upcoming Community Meetup: What to Expect</div>
                            <div class="thread-meta">
                                <span>
                                    <i class="fas fa-user"></i> MeetupHost</span>
                                <span>
                                    <i class="fas fa-comments"></i> 60 Replies
                                </span>
                                <span>
                                    <i class="fas fa-eye"></i> 750 views
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
    {/* <!-- Stats Section --> */}
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">5,280+</div>
          <div class="stat-label">Community Members</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1,230+</div>
          <div class="stat-label">Discussions</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">86+</div>
          <div class="stat-label">Events Hosted</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- events section --> */}
    <section class="events">
        <div class="container">
            <h2 class="section-title">Upcoming Events</h2>
            <div class="events-grid">
                <div class="event-card">
                    <div class="event-date">October 15,2025</div>
                    <div class="event-content">
                        <h3 class="event-title">Community Meetup: Networking and Collaboration</h3>
                        <p class="event-desc">Join us for an evening of networking and collaboration with fellow community members. Share ideas, make connections, and explore potential partnerships.</p>
                        <a href="#" class="btn btn-outline">Learn More</a>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date">November 5,2025</div>
                    <div class="event-content">
                        <h3 class="event-title">Web Development Workshop</h3>
                        <p class="event-desc">A hands-on workshop designed to teach you the fundamentals of web development. Whether you're a beginner or looking to enhance your skills, this event is for you.</p>
                        <a href="#" class="btn btn-outline">Learn More</a>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date">December 12,2025</div>
                    <div class="event-content">
                        <h3 class="event-title">Holiday Social: Celebrate with the Community</h3>
                        <p class="event-desc">Celebrate the holiday season with your community! Enjoy food, drinks, and festive activities while connecting with fellow members in a relaxed setting.</p>
                        <a href="#" class="btn btn-outline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

      
      <Footer />
    </>
  );
}

export default Home;
