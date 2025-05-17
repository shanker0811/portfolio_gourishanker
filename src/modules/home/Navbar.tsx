import "./NavbarStyles.css";
import ScrollSpy from "react-scrollspy-navigation";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-12 navbar-wrappper d-flex align-items-center justify-content-space-between">
          <div className="col-6 mx-3">Nara Gouri Shanker</div>
          <div className={"col-6"} id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex flex-row align-items-center gap-3">
              <ScrollSpy activeClass="nav-active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
                <a className="nav-link " href="#experience">
                  Experience
                </a>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </ScrollSpy>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
