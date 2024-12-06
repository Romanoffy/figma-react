import React from 'react'
import '../assets/Register.css'; 
import logo from "../assets/madabum.png"
import gugal from "../assets/gugel.png"
import muka from "../assets/face.png"

function Register() {
  return (
    <div className="bgi" >
      {/* Logo Link */}
      <a href="home.html">
        <img className="logo2" src={logo} alt="Profile Picture" />
      </a>

      {/* Background Decoration */}
      <div className="Rectangle16"></div>

      {/* Registration Form */}
      <div className="Rectangle17">
        <div className="Register2">
          Register
        </div>

        <div className="regist2">
          <input type="teks" placeholder="Username" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Redirect to Login */}
        <div className="account2">
          <p>
            Have an account?{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              <span>Go Here.</span>
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="icon">
          <a href="/">
            <img className="ggl2" src={gugal} alt="Google" />
          </a>
          <a href="/">
            <img className="fcbok2" src={muka} alt="Facebook" />
          </a>
        </div>

        {/* Submit Button */}
        <div className="signup">
          <button className="tonton2">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Register
