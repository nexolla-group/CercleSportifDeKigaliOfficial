import React from "react";
import HeaderWhenLoggedIn from "../Header/HeaderWhenLoggedIn";
const Checkout = () => {
  return (
    <>
      <div className="row text-start">
        <div className="col col-12">
          <div class="card">
            <div class="card-header">Personal Details</div>
            <div class="card-body">
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">First name:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">First name:</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Email:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Phone:</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Addrees:</p>
                </div>
                <div className="colcol-12">
                  <p className="fs-6 fw-bold">City:</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Notes:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Payment method:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div class="card">
            <div class="card-header">Total</div>
            <div class="card-body">
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Playground:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Time:</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Date:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Price:</p>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">tax:</p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">Total Amount:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
