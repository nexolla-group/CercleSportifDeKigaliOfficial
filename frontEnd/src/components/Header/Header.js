import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";

const logOut = () => {
  localStorage.clear();
  window.location = "register";
};
const Header = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const T = localStorage.getItem("token");
    setToken(T);
  }, [token]);

  return (
    <nav
      style={{ height: 250, padding: 50 }}
      className={`${styles.navubar} navbar navbar-expand-lg bg-light`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>

          <i class="fas fa-bars open fw-bold text-light"></i>
          <i class="fas fa-times close fw-bold text-light"></i>
        </button>
        <div
          className="collapse d-inline navbar-collapse justify-content-left "
          id="navbarTogglerDemo03"
        >
          <ul
            style={{ marginTop: 200, marginLeft: 150 }}
            className="navbar-nav fs-5 "
          >
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/"
                className="nav-link text-light"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link text-light">
                Playgrounds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link text-light">
                Sport Centers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link text-light">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link text-light">
                Contuct Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link text-light">
                Booking
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/register" class=" p-2">
          <h3
            style={{
              color: "#fff",
              cursor: "pointer",

              position: "absolute",
              top: 20,
              right: 220,
              textDecoration: "none",
            }}
            className="fs-5 text-light "
          ></h3>
        </NavLink>
        <div
          style={{
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: 10,
            right: 50,
            padding: "5px 0",
          }}
          class="text-light"
        >
          {token !== null && (
            <>
              {token !== "" && token !== undefined ? (
                <>
                  <small onClick={logOut}>Log out</small>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    style={{ padding: "1px 45px" }}
                    to="/register"
                    className="btn btn-warning fs-5"
                  >
                    <u className="text-light">Create Account</u>
                    Login
                  </NavLink>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
