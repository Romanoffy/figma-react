import React from 'react'
import '../assets/Login.css'; 
import logo from "../assets/madabum.png"
import gugal from "../assets/gugel.png"
import muka from "../assets/face.png"


function Login() {
  return (
    <div className="body">
      <a href="/">
        <img className="logo" src={logo} alt="Profile Picture" />
      </a>

      <div className="Rectangle6"></div>
      <div className="Rectangle7">
        <div className="Login">
          Login
        </div>

        <div className="log">
          <input type="text" placeholder="Username/Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <div className="account">
          <p>
            Doesn't have an account?{" "}
            <a href="/Register" style={{ textDecoration: "none" }}>
              <span>Go Here.</span>
            </a>
          </p>
        </div>

        <div className="icon">
          <a href="/">
            <img className="ggl" src={gugal} alt="Google" />
          </a>
          <a href="/">
            <img className="fcbok" src={muka} alt="Facebook" />
          </a>
        </div>

        <div className="signup">
          <button className="tonton">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Login
