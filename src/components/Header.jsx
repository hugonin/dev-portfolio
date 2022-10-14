import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo_JHDK_.svg";
import MonCV from "../assets/JHDK_CV.pdf"
import { Outlet, Link, NavLink } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1C1E22] text-gray-100">
      <div>
        <Link to="/">
          <img src={Logo} alt="site-logo" style={{ width: "75px" }} />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#85BFD1" : "" };
            }}
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#85BFD1" : "" };
            }}
            to="/about"
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#85BFD1" : "" };
            }}
            to="/skills"
          >
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#85BFD1" : "" };
            }}
            to="/projects"
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "#85BFD1" : "" };
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Outlet />
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#171718] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#85BFD1]">
          <Link onClick={handleClick} to="/">
            Accueil
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#85BFD1]">
          {" "}
          <Link onClick={handleClick} to="/about">
            A propos
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#85BFD1]">
          {" "}
          <Link onClick={handleClick} to="/skills">
            Compétences
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#85BFD1]">
          {" "}
          <Link onClick={handleClick} to="/projects">
            Projets
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#85BFD1]">
          {" "}
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jhdoumbekingue/" target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/hugonin" target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: jeanhugues.doumbe@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={MonCV} target="_blank" rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
