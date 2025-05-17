function Skills() {
  let skillsArray = [
    {
      technology: "Javascript",
      experience: "3yrs",
      icon: (
        <i
          className="fa-brands fa-js"
          style={{ color: "#f7df1e", fontSize: "24px" }}
        ></i>
      ),
    },
    {
      technology: "React.js",
      experience: "2.5yrs",
      icon: (
        <i
          className="fa-brands fa-react"
          style={{ color: "#61dafb", fontSize: "24px" }}
        ></i>
      ),
    },
    {
      technology: "HTML",
      experience: "3yrs",
      icon: (
        <i
          className="fa-brands fa-html5"
          style={{ color: "#e44d26", fontSize: "24px" }}
        ></i>
      ),
    },
    {
      technology: "CSS",
      experience: "3yrs",
      icon: (
        <i
          className="fa-brands fa-css3-alt"
          style={{ color: "#264de4", fontSize: "24px" }}
        ></i>
      ),
    },

    {
      technology: "jQuery",
      experience: "2yrs",
      icon: (
        <i
          className="fa-solid fa-code"
          style={{ color: "#0769ad", fontSize: "24px" }}
        ></i>
      ),
    },
    {
      technology: "TypeScript",
      experience: "3yrs",
      icon: (
        <i
          className="fa-solid fa-code"
          style={{ color: "#3178c6", fontSize: "24px" }}
        ></i>
      ),
    },

    {
      technology: "Node.js",
      experience: "1yr",
      icon: (
        <i
          className="fa-brands fa-node-js"
          style={{ color: "#83cd29", fontSize: "24px" }}
        ></i>
      ),
    },

    {
      technology: "MongoDB",
      experience: "1yr",
      icon: (
        <i
          className="fa-solid fa-database"
          style={{ color: "#47a248", fontSize: "24px" }}
        ></i>
      ),
    },
    {
      technology: "Express.js",
      experience: "1yr",
      icon: (
        <i
          className="fa-solid fa-code"
          style={{ color: "#000000", fontSize: "24px" }}
        ></i>
      ),
    },
  ];

  return (
    <section id="skills" className="container-fluid py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {skillsArray.map((skill, i) => (
          <div className="col-md-3 col-6 mb-3 text-center" key={i}>
            <div className="skill-card">
              <>{skill?.icon}</>
              <h5>{skill?.technology}</h5>
              <p>{skill?.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
