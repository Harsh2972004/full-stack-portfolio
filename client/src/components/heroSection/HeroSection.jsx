import "./heroSection.css";
const HeroSection = ({ ref }) => {
  return (
    <section className="hero-section">
      <div ref={ref} className="hero-heading">
        <h3>-Hello, I'm Harsh</h3>
        <h1>
          Full Stack <span>Web Developer</span>
        </h1>
        <p>
          A passionate web developer on a journey to build impactful digital
          experiences. Turning Ideas into interactive, user-freindly websites.
        </p>
        <div className="cta">
          <button className="contact-button">Get In Touch</button>
          <button className="project-button">View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
