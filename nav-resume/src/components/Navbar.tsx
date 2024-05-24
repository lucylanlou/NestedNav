import React, { useEffect, useState } from "react";

import NavbarItem from "./NavbarItem";
import VerticleNavbar from "./VerticleNavbar";

import { navigation, navigationRight } from "../constants";
import { logo } from "../assets";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={
        "xl:px-16 px-6 w-full flex items-center h-16 fixed top-0 z-20 bg-white bg-opacity-[20%] border-secondary border-opacity-[30%] border-b"
      }
    >
      <div className="w-full flex items-center max-w-7xl mx-auto h-full">
        <img
          src={logo}
          alt="logo"
          className="hidden lg:flex w-12 h-12 object-contain"
        />

        <div className="hidden lg:flex flex-row items-center justify-between w-full h-full">
          <ul className="list-none flex flex-row h-full items-center justify-center">
            {navigation.map((item) => (
              <NavbarItem key={item.id} content={item} />
            ))}
          </ul>

          <ul className="list-none flex flex-row h-full items-center justify-center">
            {navigationRight.map((item) => (
              <NavbarItem key={item.id} content={item} />
            ))}
          </ul>
        </div>

        <div className="lg:hidden flex flex-1 justify-start items-center">
          {/* Menu/Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setToggle(!toggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={toggle ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>

          {/* Navbar Dropdown */}
          {toggle && <VerticleNavbar />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
