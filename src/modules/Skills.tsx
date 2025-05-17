function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {["JavaScript", "HTML", "CSS", "React"].map((skill, i) => (
          <div className="col-md-3 col-6 mb-3 text-center" key={i}>
            <div className="border rounded p-3 bg-white">
              <h5>{skill}</h5>
              <p>3+ Years</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
