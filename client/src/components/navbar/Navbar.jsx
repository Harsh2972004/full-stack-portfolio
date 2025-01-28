import "./navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const mouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.08,
    });
  };

  const mouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-part1">
        <h2>
          Harsh.<span>dev</span>
        </h2>
      </div>
      <div className="navbar-part2">
        <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#about">
          About
        </a>
        <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#projects">
          Projects
        </a>
        <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href="#contact">
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
