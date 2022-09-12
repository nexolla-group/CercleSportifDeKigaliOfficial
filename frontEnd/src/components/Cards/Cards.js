import React from "react";
import { Link } from "react-router-dom";
import styles from "./cards.module.scss";

const Cards = ({ playgrounds, page }) => {
  // console.log(playgrounds);
  let display;
  if (playgrounds) {
    display = playgrounds.map((item, index) => {
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${item._id}`}
          key={index}
          className="col-lg-6 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-contnt-center`}
          >
            <img
              src={item.photo2}
              alt=""
              className={`${styles.img} img-fluid`}
            />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className=" fs-5">{item.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (item.isAvailable) {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success `}
                >
                  Available
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger `}
                >
                  Not available
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No playground found!";
  }
  return <>{display}</>;
};

export default Cards;
