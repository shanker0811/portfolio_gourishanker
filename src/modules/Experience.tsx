function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-white p-4 rounded shadow-sm mb-3">
            <h5>Frontend Developer at XYZ Solutions</h5>
            <p className="mb-1 text-muted">Jan 2022 - Present</p>
            <p>
              Developed and maintained React applications with a focus on
              performance and UX.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h5>Web Developer Intern at ABC Tech</h5>
            <p className="mb-1 text-muted">Jun 2021 - Dec 2021</p>
            <p>
              Created dynamic pages and optimized existing ones using JavaScript
              and Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
