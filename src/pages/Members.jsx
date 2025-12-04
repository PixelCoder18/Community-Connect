import React from 'react'
import InnerNavbar from "../components/innerNavbar";
import { Link } from "react-router-dom";
import Innerfooter from "../components/Innerfooter";
import "../pages css/members.css";

const members = () => {
  return (
    <>
    {/* // <!-- Hero Section --> */}
    <InnerNavbar />
    <section class="hero">
        <h1>Our Community Members</h1>
        <p>Meet the amazing people who make our community vibrant and active.</p>
    </section>

    {/* // <!-- Members Grid --> */}
    <section class="members-container">

        <div class="member-card">
            <img src="https://i.pravatar.cc/200?img=12" alt="Member"/>
            <h3>Daniel wellington</h3>
            <p class="role">Volunteer</p>
            <p>Enthusiastic about community service and environment initiatives.</p>
        </div>

        <div class="member-card">
            <img src="https://i.pravatar.cc/200?img=25" alt="Member"/>
            <h3>Abby Radcliffe </h3>
            <p class="role">Event Organizer</p>
            <p>Organizes community meetups, workshops, and fun events.</p>
        </div>

        <div class="member-card">
            <img src="https://i.pravatar.cc/200?img=36" alt="Member"/>
            <h3>Sam</h3>
            <p class="role">Tech Support</p>
            <p>Helps maintain community systems and online platforms.</p>
        </div>

        <div class="member-card">
            <img src="https://i.pravatar.cc/200?img=52" alt="Member"/>
            <h3>Mark </h3>
            <p class="role">Core Member</p>
            <p>Active participant in events, discussions, and planning.</p>
        </div>
    </section>
    <Innerfooter />
</>
  )
}

export default members
