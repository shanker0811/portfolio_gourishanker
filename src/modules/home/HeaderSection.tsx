import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/lootiefiles/developeranimaton.json";
import workingdevanima from "../../assets/lootiefiles/Webdeveloper.json";
import NavBar from "./Navbar";
import profile from "../../assets/profolioimage.png";

const HeaderSection = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="row introductioncontainer">
        <div className="col-xl-8 col-md-8 col-sm-8 col-12 greetsection">
          <span>
            Hi, I'm Gouri Shanker 👋 I'm a passionate Full Stack Developer with
            2.5+ years of experience building responsive web applications using
          </span>
          <br />
          <span>Welcome to my portfolio — let's build something awesome!</span>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4 col-12">
          <img src={profile} alt="profileimage" width={"250px"} />
        </div>
      </div>
      <div className="row sectionCard" id="about">
        <div className="col-6  col-12 col-sm-6 col-md-6">
          <p> The development world is waiting for you</p>
        </div>
        <div className="col-6 col-12 col-sm-6 col-md-6">
          <Lottie
            animationData={animationData}
            loop={true}
            className="animationCard"
          />
        </div>
      </div>
      <div className="row  sectionCard" id="experience">
        <div className="col-6 col-12 col-sm-6 col-md-6">
          <Lottie
            animationData={workingdevanima}
            loop={true}
            className="animationCard"
          />
        </div>
      </div>
    </>
  );
};
export default HeaderSection;
