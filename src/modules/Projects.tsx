function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/600x400?text=Portfolio+Website"
              className="card-img-top"
              alt="Portfolio"
            />
            <div className="card-body">
              <h5 className="card-title">Personal Portfolio</h5>
              <p className="card-text">
                Responsive portfolio showcasing skills and projects.
              </p>
              <div>
                {["HTML", "CSS", "JavaScript", "Lottie"].map((tech, i) => (
                  <span key={i} className="badge bg-secondary me-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
