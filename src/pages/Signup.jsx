import React from 'react'
import "../pages css/signup.css";

const signup = () => {
  return (
    <div>
        <h2>Create Your Account</h2>
        <p>Join the community and stay connected!</p>
        <form action="#">
            <input type="text" placeholder="Full Name" required/>
            <input type="email" placeholder="Email Address" required/>
            <input type="password" placeholder="Create Password" required/>
            <input type="password" placeholder="Confirm Password" required/>

            <button type="submit" class="btn">Sign Up</button>
        </form>

        <p class="login-link">
         Already have an account? <a href="login.html">Login</a>
        </p>
    </div>
  )
}

export default signup
