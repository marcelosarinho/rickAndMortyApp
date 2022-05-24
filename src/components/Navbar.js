import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-div">
        <div className="nav-icon">
          <Link to="/" className="nav-item">
            <img src="https://files.thumbsupuk.com/thumbsup/assets_new_2017/category_logos/12_07_2019_07_41_31_amrickmortylogo.png"
              alt="rick-morty-logo" className="nav-logo"></img>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/characters" className="link-item">
            <h2>Personagens</h2>
          </Link>
        </div>
        <span className="separator">|</span>
        <div className="nav-item">
          <Link to="/locations" className="link-item">
            <h2>Localizações</h2>
          </Link>
        </div>
        <span className="separator">|</span>
        <div className="nav-item">
          <Link to="/episodes" className="link-item">
            <h2>Episódios</h2>
          </Link>
        </div>
        <span className="separator">|</span>
        <div className="nav-item">
          <a href="https://rickandmortyapi.com/" className="link-item">
            <h2>The Rick and Morty API</h2>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;