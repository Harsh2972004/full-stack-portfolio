import "./navbar.css";
import logo from "../../assets/images/logo-light.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Navbar = ({ ref }) => {
  const hoverRef = useRef();
  const hoverEffect = () => {
    useGSAP(() => {
      gsap.to(".navbar-part2 a", {
        scale: 1.2,
        backgroundColor: "red",
      });
    });
  };

  return (
    <nav ref={ref} className="navbar">
      <div className="navbar-part1">
        <h2>
          Harsh.<span>dev</span>
        </h2>
      </div>
      <div className="navbar-part2">
        <a onMouseOver={hoverEffect} ref={hoverRef} href="#about">
          About
        </a>
        <a onMouseOver={hoverEffect} ref={hoverRef} href="#projects">
          Projects
        </a>
        <a onMouseOver={hoverEffect} ref={hoverRef} href="#contact">
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
