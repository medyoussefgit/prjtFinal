import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

function Buttonc() {
  return (
    <Link to="signup">
      <button className="btn">Sign Up</button>
    </Link>
  );
}

export default Buttonc;