import TechStack from "../../components/techStack/TechStack";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-me">
        <div className="about-content">
          <h3>Hi i'm Harsh. Nice to meet you</h3>
          <p>
            I'm a passionate full-stack web developer skilled in the MEN/MERN
            stack, creating dynamic and user-friendly web experiences.
            Constantly Learning and improving, i enjoy turning ideas into
            functional, high-performance websites. I want to learn something new
            everyday.
          </p>
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default About;
