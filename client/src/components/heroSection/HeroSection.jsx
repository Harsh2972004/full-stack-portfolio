import "./heroSection.css";
import gsap from "gsap";

const HeroSection = () => {
  const mouseEnter = (e) => {
    console.log(e.target);
    gsap.to(e.target, {
      scale: 1.08,
      duration: 0.2,
    });
  };

  const mouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.2,
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-heading">
        <h3>-Hello, I'm Harsh</h3>
        <h1>
          Full Stack <span>Web Developer</span>
        </h1>
        <p>
          A passionate web developer on a journey to build impactful digital
          experiences. Turning Ideas into interactive, user-freindly websites.
        </p>
        <div className="cta">
          <button
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="contact-button"
          >
            Get In Touch
          </button>
          <button
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="project-button"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
