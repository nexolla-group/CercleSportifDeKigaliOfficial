import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{ padding: "1rem", backgroundColor: "#002D4D" }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col">
            <p style={{ color: "#F5C021" }} className="fs-6">
              Our work | Recreation Center{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-7 col-xm-12 col-md-12 col-sm-12">
            <h3 className="text-light text-start">
              Cercle Sportif de Kigali is A best sport centre in kigali With all
              facility
            </h3>
            <p className="text-light fs-5 text-start">
              Do you wish to spend time in happiness ? come and enjoy many games
              here, Like swimming, basket ball and so on. So if you want to
              enjoy, this is your place
            </p>
          </div>
          <div
            style={{ borderRadius: "4px" }}
            className="col col-xm-12 col-lg-5 col-sm-12 col-md-12 bg-black"
          >
            <div className="row">
              <div className="col col-12">
                {" "}
                <p
                  style={{ paddingTop: "5px" }}
                  className="text-light text-center fs-5 "
                >
                  Contact Cercle Sportif de Kigali
                </p>
              </div>
              <div style={{ padding: "1rem" }} className="col col-12 mb-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control mt-2"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control mt-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control mt-2"
                />

                <textarea
                  className="form-control mt-2 fs-6"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="type your message here"
                ></textarea>

                <button
                  style={{ width: "100%" }}
                  className="btn mt-2 btn-warning fs-5 text-black"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#002743", color: "#fff", padding: "1rem" }}
        className="container-fluid"
      >
        <div class="row  fs-5">
          <div class="col text-left">
            <h3>
              <u>Playgounds:</u>
            </h3>
            <ul style={{ color: "#fff" }}>
              <li>Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Swimming Pool</li>
              <li>....</li>
            </ul>
          </div>
          <div class="col order-5">
            {" "}
            <h3>
              <u>Contact Info:</u>
            </h3>
            <h4>Address</h4>
            <p className="fs-6">Cercle Sportif de Kigali - KK 2 Ave, Rugunga</p>
            <h4>Call Us</h4>
            <p className="fs-6">+250 788 507 951</p>
            <h4>Working days</h4>
            <p className="fs-6">all days</p>
          </div>
          <div
            style={{
              backgroundImage: "url(/images/poolhanze.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            class="col order-1 text-center"
          >
            <h1
              style={{
                fontSize: 35,
                marginTop: 80,
                color: "yellow",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Follow us on
            </h1>
            <h1
              style={{
                fontSize: 40,
                marginTop: 80,
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {" "}
              Facebook
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
