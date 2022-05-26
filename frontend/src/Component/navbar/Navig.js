import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



import { navItems } from "./Navitems";
// import Button from "./Buttonc";
import Dropdown from "./Dropdown";
import Buttonc from "./Buttonc";

function Navig() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
         <img src="azalee.png" alt="logo" className="logo"/>
         
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Décorations") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Buttonc />
      </nav>
    </>
  );
}

export default Navig;