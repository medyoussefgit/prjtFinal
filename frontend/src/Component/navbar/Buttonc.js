import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/useraction";
import "./button.css";

function Buttonc() {
  const token = localStorage.getItem("token");
  const dispatch=useDispatch()
  return (
    token?
    <Link to="/login">
      <button className="btn" onClick={()=>dispatch(logout())}>logout</button>
    </Link>
      :
    
    <Link to="/login">
      <button className="btn">Connection</button>
    </Link>
  );
}

export default Buttonc;