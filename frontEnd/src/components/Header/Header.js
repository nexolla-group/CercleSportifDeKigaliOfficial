import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import { getToken, logOut, GetUserDetails } from "../../helpers";
import Axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Header = () => {
  const [token, setToken] = useState(null);
  const [firstName, sestFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const validation = async () => {
    const T = await getToken();
    setToken(T);
  };
  const getProfile = async () => {
    const details = await GetUserDetails();
    sestFirstName(details[0]);
    setLastName(details[1]);
    setEmail(details[2]);
    setRole(details[3]);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(role);
  };
  useEffect(() => {
    validation();
    getProfile();
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
              {token !== null && role !== "admin" ? (
                <>
                  <li>
                    <NavLink to="bookingReport" className="nav-link text-light">
                      Booking
                    </NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
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
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                  className="fs-1"
                />
                <LogoutIcon
                  onClick={() => {
                    const sure = window.confirm(
                      "are you sure you want to Logout?"
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
                  className=" btn btn-sm  fs-5 "
                >
                  <p
                    className={`${styles.LoginOutlinedIcon} fs-5 text-center text-light fw-bold`}
                  >
                    Sign up or Login
                    <LoginOutlinedIcon
                      className={`${styles.LoginOutlinedIcon} fs-1`}
                    />
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="modal-header"
            >
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Profile Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-5">
              <p>First name:{firstName}</p>
              <p>Last name:{lastName}</p>
              <p>Email:{email}</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-dark"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                <CreateOutlinedIcon /> Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="modal-header"
            >
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Update Profile Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-5">
              <input
                type="text"
                placeholder={`Current Firstname: ${firstName}`}
                className="shadow-sm form-control mt-2"
              />
              <input
                type="text"
                placeholder={` Current Last name: ${lastName}`}
                className="shadow-sm form-control mt-2"
              />
              <input
                type="text"
                placeholder={`Current email: ${email}`}
                className="shadow-sm form-control mt-2"
              />
              <input
                type="password"
                placeholder="Enter Current password"
                className="shadow-sm form-control mt-2"
              />
              <input
                type="password"
                placeholder="Enter New password"
                className="shadow-sm form-control mt-2"
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-dark"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back
              </button>
              <button className="btn btn-dark btn-sm fs-5">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
