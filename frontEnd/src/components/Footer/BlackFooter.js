import React from "react";
import {
  Facebook,
  InsertInvitation,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
const BlackFooter = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          height: 70,
          padding: "30px",
        }}
        className="container-fluid footer text-left"
      >
        <div className="row">
          <div className="col-9">
            <p className="fs-6">
              © 2022 CercleSportifDeKigali. All Rights Reserved. Privacy Policy
              Address: KK 2 Ave, Kigali, Rwanda, Phone: +250 78-822-2479
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-2 fs-5">
            <Instagram />
            <LinkedIn />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackFooter;
