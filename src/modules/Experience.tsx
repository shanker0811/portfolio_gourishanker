import Lottie from "lottie-react";
import expereinceanimation from "../assets/lootiefiles/Webdeveloper.json";

function Experience() {
  let experiencearray = [
    {
      organization: "Inductive Quotient Private Limited",
      timePeriod: "Dec-2022 to present",
      totalExperience: "2.5 years",
      roles: [
        {
          role: "UI/UX Developer -1",
          timeSpan: "Aug-2024 to present",
          responsibilities: [
            "Collaborated with design teams to improve usability and accessibility.",
            "Translated Figma designs into responsive, production-ready React components.",
            "Optimized UI performance and conducted cross-browser testing.",
          ],
        },
        {
          role: "Associate Front-end Developer",
          timeSpan: "Aug-2023 to Aug-2024",
          responsibilities: [
            "Built reusable components using React and Bootstrap.",
            "Integrated REST APIs and handled state management using Redux.",
            "Improved application load time by optimizing JS/CSS bundles.",
          ],
        },
        {
          role: "Trainee UI Developer",
          timeSpan: "Dec-2022 to Aug-2023",
          responsibilities: [
            "Assisted in developing static pages using HTML, CSS, and JavaScript.",
            "Worked on minor bug fixes and small enhancements in UI.",
            "Gained familiarity with version control using Git and GitLab.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="container-fluid py-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="row">
        <div className="col-md-6  col-12  col-xl-6 col-lg-6 experience-details">
          {experiencearray.map((exp, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-sm mb-3">
              <h5 className="text-primary fw-bold">{exp.organization}</h5>
              <p className="mb-1 text-muted">
                {exp.timePeriod} - ({exp?.totalExperience})
              </p>
              <ul className="mb-0">
                {exp.roles.map((role, idx) => (
                  <li key={idx} className="mb-2">
                    <strong>{role.role}</strong> &mdash;{" "}
                    <span className="text-muted">{role.timeSpan}</span>
                    <ul className="mt-1">
                      {role.responsibilities.map((task, i) => (
                        <li key={i} className="text-secondary">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-md-6  col-12  col-xl-6 col-lg-6">
          <Lottie
            animationData={expereinceanimation}
            loop={true}
            className="animationCard"
          ></Lottie>
        </div>
      </div>
    </section>
  );
}

export default Experience;
