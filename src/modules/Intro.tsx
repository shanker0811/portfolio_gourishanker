import Lottie from "lottie-react";
import animationData from "../assets/lootiefiles/developeranimaton.json";

function Hero() {
  return (
    <section className="hero">
      <Lottie
        animationData={animationData}
        loop={true}
        className="animationCard"
      />
      <h1>Gouri Shanker</h1>
      <p>Frontend Developer | 2.5+ Years Experience</p>
      <a href="#projects" className="btn btn-light mt-3">
        View Projects
      </a>
    </section>
  );
}

export default Hero;
