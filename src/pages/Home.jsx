import React from 'react'
import '../assets/Home.css'; 
import logo from "../assets/madabum.png"
import pp from "../assets/pp.png"

function Home() {
  return (

    <div className="background">
      <div className="nav">
        <img className="logo" src={logo} alt="Profile Picture" />
        <div className="nav-links">
          <span className="nav-item">About</span>
          <span className="nav-item">FAQ</span>
          <a href="login.html" style={{ textDecoration: "none" }}>
            <span className="nav-item">Login</span>
          </a>
        </div>
        <img className="pp" src={pp} alt="Profile Picture" />
      </div>
      <div className="content">
        <div className="text">
          <h1 style={{ fontSize: "56px" }}>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Aenean vel ex ac leo <br />
            sodales semper. Donec ultrices mollis
          </p>
        </div>
        <button className="button-54" role="button">
          More Info
        </button>
      </div>
    </div>
  );
};



export default Home
