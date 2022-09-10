import React from "react";
import styles from "./topbar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import TopBarADmin from "../../pages/index/TopBarADmin";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
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
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.topAvatar}
          />
        </div>
      </div>
    </div>
  );
}
