import React, { useState } from "react";
import "./NavbarStyles.css";
import ScrollSpy from "react-scrollspy-navigation";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-12 navbar-wrappper d-flex align-items-center justify-content-space-between">
          <div className="col-6 mx-3">Nara Gouri Shanker</div>
          <div className={"col-6"} id="navbarNavAltMarkup">
            <ScrollSpy activeClass="nav-active">
              <div className="navbar-nav d-flex flex-row align-items-center gap-3">
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
                <a
                  className="nav-link disabled"
                  href="#contact"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </div>
            </ScrollSpy>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
