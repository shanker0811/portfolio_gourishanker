import Lottie from "lottie-react";
import animationData from "../assets/lootiefiles/developeranimaton.json";
import graduationimge from "../assets/graduation.png";
import sscImage from "../assets/school.jpg";
import intermediateImg from "../assets/intermediate.jpg";

// Sample education data
const educationArray = [
  {
    level: "Graduation",
    institute: "Andhra University College Of Engineering",
    duration: "Jun-2017 to Apr-2021",
    percentage: "6.9 CGPA",
    stream: "Civil Engineering",
    image: graduationimge,
  },
  {
    level: "Intermediate",
    institute: "St Mary's Junior College",
    duration: "Jun-2015 to Apr-2017",
    stream: "MPC",
    percentage: "82%",
    image: intermediateImg,
  },
  {
    level: "SSC",
    institute: "Sree Sree Sremanarayan High School",
    duration: "Apr-2014 to Apr-2015",
    percentage: "8.5 CGPA",
    image: sscImage,
  },
];

function Hero() {
  return (
    <section className="hero text-center py-5 container-fluid" id="intro">
      {/* Animation */}
      <div>
        <Lottie
          animationData={animationData}
          loop={true}
          className="animationCard mb-3"
        />

        {/* Name & Title */}
        <h1 className="mb-2">Nara Gouri Shanker</h1>
        <p className="lead">Full Stack Developer | 2.5 Years Experience</p>

        {/* Education Cards */}
        <div className="row education-details-wrappper justify-content-center my-4">
          {educationArray.map((edu, index) => (
            <div
              className="col-sm-12 card-details col-md-6 col-lg-4 mb-4"
              key={index}
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="row align-items-center">
                    {/* Left image */}
                    <div className="col-4 text-center">
                      <img
                        src={edu.image}
                        alt={edu.level}
                        className="img-fluid rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>

                    {/* Right text */}
                    <div className="col-8 text-start">
                      <h6 className="mb-1">{edu.level}</h6>
                      <p className="mb-1 small">
                        {edu.institute} {edu?.stream && `(${edu?.stream})`}
                      </p>
                      <p className="mb-1 small">{edu.duration}</p>
                      <p className="mb-0 small">{edu.percentage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Projects Button */}
        <a href="#projects" className="btn btn-light mt-3">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
