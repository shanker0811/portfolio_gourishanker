import edcRefImg from "../assets/EDC.png";
import prabandhan from "../assets/prabandhan.jpg";
import sightInsight from "../assets/sightinsights.jpg";
import inductiveedc from "../assets/inductiveedc.png";
import schoolerp from "../assets/schoolerp.png";
const projects = [
  {
    title: "Electronic Data Capturing Tool",
    techStack: [
      "HTML",
      "SCSS",
      "React.js",
      "JavaScript",
      "Redux",
      "TypeScript",
      "MUI",
      "Prime React",
    ],
    image: edcRefImg,
    description:
      "A web-based application designed to collect, validate, and manage clinical trial data efficiently. Developed with modular React components and integrated state management using Redux.",
    role: "Front-end Developer",
    category: "professional",
  },
  {
    title: "Prabandhan",
    techStack: [
      "HTML",
      "SCSS",
      "React.js",
      "JavaScript",
      "Redux",
      "TypeScript",
      "MUI",
      "Prime React",
    ],
    image: prabandhan,
    description:
      "A document and process management system tailored for the pharmaceutical industry. It digitizes the traditionally Excel-based workflows by offering a structured platform to store and manage study registration documents, track the study flow, and monitor intermediate processes. It streamlines document handling, reduces manual errors, and improves regulatory compliance and data traceability.",
    role: "Front-end Developer",
    category: "professional",
  },
  {
    title: "Site In Sights",
    techStack: [
      "HTML",
      "SCSS",
      "React.js",
      "TypeScript",
      "Redux",
      "React Leaflet",
      "ECharts",
      "Google Charts",
      "MUI",
      "Prime React",
    ],
    image: sightInsight,
    description:
      "An interactive data dashboard to visualize research site data for pharmaceutical studies. Users apply filters to analyze and determine the best study sites. Integrated AI-driven suggestions with the Python backend for decision-making. Includes geospatial maps and dynamic visualizations.",
    role: "Front-end Developer",
    category: "professional",
  },
  {
    title: "Inductive EDC",
    techStack: ["HTML", "CSS", "jQuery", "JSP", "JavaScript"],
    description:
      "An older electronic data capturing system for managing clinical study data. Involved in maintaining the legacy codebase using JSP and jQuery, and improving UI consistency and usability.",
    role: "Front-end Developer",
    image: inductiveedc,
    category: "professional",
  },
  {
    title: "School ERP",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Mongodb",
      "MUI",
      "Prime React",
    ],
    image: schoolerp,
    description:
      "A full-stack ERP system under development to automate school operations like attendance, student records, staff coordination, and fee management. Built using React and Node.js.",
    role: "Full Stack Developer",
    category: "personal",
  },
];

function Projects() {
  return (
    <section id="projects" className="container-fluid py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card project-card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <img
                  src={project?.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <p className="card-text">{project.description}</p>
                <p className="text-muted mb-2">{project.role}</p>
                <div>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge bg-secondary me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
