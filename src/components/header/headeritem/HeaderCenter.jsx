import React from "react";
import { Link } from "react-router-dom";

function HeaderCenter() {
  return (
    <div>
      <nav className="flex gap-5 font-medium">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signUp">Sign Up</Link>
      </nav>
    </div>
  );
}

export default HeaderCenter;
