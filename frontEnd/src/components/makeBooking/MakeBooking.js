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
        <form class="row g-3">
          <div class="col-md-6">
            <label for="first name" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" required />
          </div>
          <div className="col-md-6">
            <label for="Last name" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" required />
          </div>
          <div className="col-md-6">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-6">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 KN Street"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-12">
            <label for="floatingTextarea">Notes</label>
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
          <div className="row">
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
