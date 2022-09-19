import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import { getToken, logOut } from "../../helpers";
import Axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const [token, setToken] = useState(null);
  const [firstName, sestFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userProfiles = () => {
    const fname = localStorage.getItem("firstname");
    const lname = localStorage.getItem("lastname");
    sestFirstName(fname);
    setLastName(lname);
    console.log("Hello:", firstName, lastName);
  };

  const validation = async () => {
    const T = await getToken();
    setToken(T);
  };
  useEffect(() => {
    validation();
  }, []);
  return (
    <>
      {" "}
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

            <i className="fas fa-bars open fw-bold text-light"></i>
            <i className="fas fa-times close fw-bold text-light"></i>
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
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link text-light">
                  Contuct Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/register" className=" p-2">
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
            className="text-light"
          >
            {token !== null ? (
              <>
                <AccountCircleIcon
                  onClick={userProfiles}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="fs-1"
                />
                <LogoutIcon
                  onClick={() => {
                    const sure = window.confirm(
                      "are you sure you want to log out?"
                    );
                    if (sure) {
                      logOut();
                    }
                  }}
                  className="fs-1 m-2"
                />
              </>
            ) : (
              <>
                <NavLink
                  style={{ padding: "1px 45px" }}
                  to="/register"
                  className="bg-warning fs-5 "
                >
                  <p className="fs-6 text-center text-light fw-bold ">
                    Sign up or Login
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Profiles
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4 className="fs-6">First name: </h4>
            </div>
            <div className="modal-footer">
              <button
                onClick={logOut}
                type="button"
                className="btn btn-danger btn-sm"
                data-bs-dismiss="modal"
              >
                Logout
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
