import react from "react";
// import Lottie from "lottie-react";
// import HeaderSection from "./modules/home/HeaderSection";
import "./modules/globalStyles.css";

// function App() {
//   return (
//     <>
//       <div className="container-fluid gx-0">{/* <HeaderSection /> */}</div>
//     </>
//   );
// }

// export default App;
import Navbar from "./modules/NavBar";
import Hero from "./modules/Intro";
import Skills from "./modules/Skills";
import Experience from "./modules/Experience";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
// import Footer from "./modules/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
