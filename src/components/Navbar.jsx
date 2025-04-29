import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-20 px-10 py-2 shadow-lg items-center">
      <div className="logo">
        <img
          className="w-10 h-10 object-center object-cover rounded-full "
          src="/gym-logo.jpg"
          alt=""
        />
      </div>
      <ul className="flex gap-5">
        <li className=" border-b-2 border-blue-500">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
