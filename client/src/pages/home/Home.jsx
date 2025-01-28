import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.from(".hero-heading h3", {
      opacity: 0,
      x: -300,
      duration: 0.8,
      delay: 1,
    });

    timeline.from(".hero-heading h1", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });

    timeline.from("#home", {
      backgroundColor: "black",
      color: "white",
      duration: 1,
    });

    timeline
      .add("homeStart")
      .from(
        ".navbar-part1, .navbar-part2 a",
        {
          opacity: 0,
          y: 10,
          stagger: 0.4,
          duration: 1,
        },
        "homeStart"
      )
      .from(
        ".hero-heading p",
        {
          opacity: 0,
          y: 10,
          duration: 1,
        },
        "homeStart"
      )
      .from(
        ".contact-button",
        {
          x: -300,
          duration: 0.8,
          opacity: 0,
        },
        "homeStart"
      )
      .from(
        ".project-button",
        {
          x: 300,
          duration: 0.8,
          opacity: 0,
        },
        "homeStart"
      );
  });

  return (
    <section id="home">
      <Navbar />
      <HeroSection />
    </section>
  );
};

export default Home;
