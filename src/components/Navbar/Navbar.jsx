import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-full shadow-2xl border-b-2 border-white ">
      <div className="navbar max-w-6xl mx-auto flex flex-row justify-center md:justify-start">
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Al-Quran Digital
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
