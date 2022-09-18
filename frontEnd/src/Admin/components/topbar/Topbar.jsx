import React from "react";
import styles from "./topbar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import TopBarADmin from "../../pages/index/TopBarADmin";

export default function Topbar() {
  return (
    <>
      {" "}
      {/* <div className={`${styles.topbar}`}>
        <div className={styles.topbarWrapper}>
          <div className={styles.topLeft}>
            <span className={styles.logo}>Admin-pannel</span>
          </div>

          <div className={styles.topRight}>
            <div className={styles.topbarIconContainer}>
              <NotificationsNone />
              <span className={styles.topIconBadge}>2</span>
            </div>

            <div className={styles.topbarIconContainer}>
              <Settings />
            </div>
            <img
              src="https://w7.pngwing.com/pngs/636/819/png-transparent-computer-icons-privacy-policy-admin-icon-copyright-rim-share-icon.png"
              alt=""
              className={styles.topAvatar}
            />
          </div>
        </div>
      </div> */}
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
            />
          </div>
        </div>
      </nav>
    </>
  );
}
