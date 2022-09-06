import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo_JHDK_.svg";

function Footer() {
  return (
    <footer className="py-16 bg-[#1C1E22]">
      <div className="flex flex-col lg:flex-row items-center px-4 justify-between mx-auto max-w-screen-xl">
        <div className="flex items-center ">
          <LinkScroll to="hero" smooth={true} className="cursor-pointer">
            <img src={Logo} alt="site-logo" style={{ width: "75px" }} />
          </LinkScroll>
        </div>
        <ul className="flex flex-col lg:flex-row items-center text-sm font-semibold text-gray-300 py-12 lg:py-0">
          <Link
            to="/projet1"
            className="mx-7 hover:text-[#85BFD1] mb-2 lg:mb-0"
          >
            PROJET1
          </Link>
          <Link
            to="/projet2"
            className="mx-7 hover:text-[#85BFD1] mb-2 lg:mb-0"
          >
            PROJET2
          </Link>
          <Link
            to="/projet3"
            className="mx-7 hover:text-[#85BFD1] mb-2 lg:mb-0"
          >
            PROJET3
          </Link>
        </ul>
        <div className="flex text-gray-500">
          <Link to="/twitter.com" className="hover:text-[#85BFD1]">
            <FaTwitter className="mx-4 fill-current" />
          </Link>
          <Link to="/github.com" className="hover:text-[#85BFD1]">
            <FaGithub className="mx-4 fill-current" />
          </Link>
          <Link to="/linkedin.com" className="hover:text-[#85BFD1]">
            <FaLinkedin className="mx-4 fill-current" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 text-xs text-gray-400">
        <span>
          &copy;{new Date().getFullYear()} Jean-Hugues Doumbe Kingue Portfolio
        </span>
      </div>
    </footer>
  );
}

export default Footer;
