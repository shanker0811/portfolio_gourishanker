import pdf from "../assets/Gouri_Shanker_Fullstack_Dev.pdf";
import ScrollSpy from "react-scrollspy-navigation";
function Navbar() {
  return (
    <>
      <ScrollSpy activeClass="nav-active">
        <div className="side-nav d-md-flex  align-items-center">
          <a href="#skills" title="Skills">
            <i className="fa-solid fa-atom"></i>
          </a>
          <a href="#experience" title="Experience">
            <i className="fa-solid fa-briefcase"></i>
          </a>
          <a href="#projects" title="Projects">
            <i className="fa-solid fa-bars-progress"></i>
          </a>
          <a href="#contact" title="Contact">
            <i className="fa-solid fa-address-book"></i>
          </a>
        </div>
      </ScrollSpy>
      <div className="top-controls">
        <a
          className="btn btn-primary btn-sm d-flex align-items-center"
          href="https://www.linkedin.com/in/gourishanker-nara-a223281b6/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in mx-2"></i> LinkedIn
        </a>
        <a
          className="btn btn-primary btn-sm d-flex align-items-center"
          href="mailto:gourishanker697@example.com"
        >
          <i className="fa-solid fa-envelope mx-2"></i> Email
        </a>
        <a
          className="btn btn-secondary btn-sm d-flex align-items-center"
          href={pdf}
          download
        >
          <i className="fa-solid fa-download mx-2"></i> Resume
        </a>
      </div>
    </>
  );
}

export default Navbar;
