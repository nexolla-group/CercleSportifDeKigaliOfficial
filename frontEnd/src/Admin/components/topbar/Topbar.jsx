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
            src="https://w7.pngwing.com/pngs/636/819/png-transparent-computer-icons-privacy-policy-admin-icon-copyright-rim-share-icon.png"
            alt=""
            className={styles.topAvatar}
          />
        </div>
      </div>
    </div>
  );
}
