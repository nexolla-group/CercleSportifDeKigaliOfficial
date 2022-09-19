import React, { useState, useEffect } from "react";
import styles from "./topbar.module.css";
import Axios from "axios";
import {
  NotificationsNone,
  Language,
  Settings,
  ClassSharp,
} from "@material-ui/icons";
import TopBarADmin from "../../pages/index/TopBarADmin";

export default function Topbar({ token, role }) {
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    Axios.post("http://localhost:2004/api/auth/login/", {
      password: password,
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
    });
  };
  return (
    <>
      <nav
        style={{
          backgroundColor: "whitesmoke",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        className="navbar navbar-expand-lg fixed-top"
      >
        <div className="container-fluid">
          <h3 className="navbar-brand fs-3 text-primary fw-bold" href="#">
            Admin Pannel
          </h3>
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
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0"></ul>
            <img
              src="https://w7.pngwing.com/pngs/636/819/png-transparent-computer-icons-privacy-policy-admin-icon-copyright-rim-share-icon.png"
              alt=""
              className={styles.topAvatar}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                style={{ color: "blue" }}
                class="modal-title fw-bold fs-6"
                id="exampleModalLabel"
              >
                Admin Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row ">
                <div className="col col-12">
                  <p className="fs-6 text-start">Change Password</p>
                </div>
                <div className="col col-12">
                  <input
                    type="password"
                    placeholder="Current password"
                    className="form-control"
                  />
                </div>
                <div className="col col-12 mt-4 ">
                  <input
                    type="password"
                    placeholder="New password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="modal-header">
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location = "register";
                }}
                type="button"
                className="btn btn-sm btn-danger"
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
}
