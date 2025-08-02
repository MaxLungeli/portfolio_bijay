import "./navbar.css";
import { NavData } from "../../data"; // Assuming NavData is an array of objects like { id: 1, href: "/", body: "Home" }
import { Link } from "react-router-dom"; // Good practice to use Link for internal navigation

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Renamed for clarity

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header_main">
        <div className="title">
          <h2>
            {/* Using Link for internal navigation is preferred */}
            <a to="#" className="title_link">
              Bijay
            </a>
          </h2>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "line line1 open" : "line line1"}></div>
          <div className={menuOpen ? "line line2 open" : "line line2"}></div>
          <div className={menuOpen ? "line line3 open" : "line line3"}></div>
        </div>

        <nav className={`nav ${menuOpen ? "nav_open" : ""}`}>
          <div className="nav_items">
            <ul className="nav_list">
              {NavData.map((data) => {
                return (
                  <li className="nav_li" key={data.id} onClick={toggleMenu}>
                    {" "}
                    {/* apply Link in future*/}
                    <a href={data.path} className="nav_link">
                      {data.body}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div>
            <button className="btn nav_button">book online</button>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
