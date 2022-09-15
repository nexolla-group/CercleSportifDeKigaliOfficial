import React from "react";
import CheckoutModal from "../checkout/CheckoutModal";

const MakeBooking = ({ setNextScreen }) => {
  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          backgroundColor: "#fff",
        }}
        className="container-fluid mt-2 p-2"
      >
        <form style={{ padding: "2rem" }} class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Telephone number ex: 0780000000"
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address ex:1234 KN Street"
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of your organizartion"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Amount to pay"
              required
            />
          </div>

          <div className="col-12">
            <textarea
              class="form-control"
              placeholder="Write short notes about playground being booked"
              id="floatingTextarea"
            ></textarea>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid" required>
                <option selected>Payment method</option>
                <option value="1">PayPal</option>
              </select>
            </div>
          </div>
        </form>
        <div className="container-fluid p5">
          <div className="row mt-3">
            <div className="col col-4 text-start">
              <button
                onClick={() => setNextScreen(false)}
                style={{ padding: 5, width: "90px", borderRadius: "30px" }}
                className="btn btn-outline-primary fs-6"
              >
                Back
              </button>
            </div>
            <div className="col col-4"></div>
            <div className="col col-4 text-end">
              <CheckoutModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeBooking;
