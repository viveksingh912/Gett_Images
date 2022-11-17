import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import useEffect from 'react'
import SplashContext from "../contextapi/spcontext";
import { useRef } from "react";
function NavBar(props) {
  const ref = useRef(null);
  const context = useContext(SplashContext);
  const { changeData } = context;
  const handleClick = (e) => {
    e.preventDefault();
    let text = ref.current.value;
    toString(text);
    ref.current.value="";
    changeData(text);
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            IMAGER
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-1"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1 " to="/cars">
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1 " to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-1 " to="/birds">
                  Birds
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="search to get an image"
                ref={ref}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                onClick={handleClick}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
