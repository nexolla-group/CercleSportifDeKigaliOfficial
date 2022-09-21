import React from "react";
import Header from "../Header/Header";

const BookingReport = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }} className="container-fluid">
        <div className="contatiner">
          <div className="card shadow-sm rounded">
            <div
              style={{ backgroundColor: "whitesmoke" }}
              className="card-header fw-bold fs-6"
            >
              <div className="row text-black">
                <div className="col col-6 text-start">
                  <h4 className="fs-6 fw-bold">Booking Details</h4>
                </div>
                <div className="col col-6 text-end">
                  <h4 className="fs-6 fw-bold">Remaining Hours</h4>
                </div>
              </div>
            </div>

            <div className="card-body">All about booked playground</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingReport;
