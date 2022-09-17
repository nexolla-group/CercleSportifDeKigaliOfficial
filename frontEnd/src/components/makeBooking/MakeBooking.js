import React, { useState } from "react";
import CheckoutModal from "../checkout/CheckoutModal";

const MakeBooking = ({
  setNextScreen,
  selectedHours,
  date,
  totalOfFrancs,
  tax,
  totalCost,
  id,
  name,
}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [organization, setOrganization] = useState("");
  const [amount, setAmount] = useState(`${totalCost} Rwf`);
  const [shortNote, setShortNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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
              value={firstname}
              class="form-control"
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              value={lastname}
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="email"
              value={email}
              class="form-control"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              value={telephone}
              className="form-control"
              placeholder="Telephone number ex: 250780000000"
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              value={address}
              className="form-control"
              placeholder="Enter your address ex:1234 KN Street"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of your organizartion"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Amount to pay"
              value={amount}
              required
            />
          </div>

          <div className="col-12">
            <textarea
              class="form-control"
              placeholder="Write short notes about playground being booked"
              id="floatingTextarea"
              value={shortNote}
              onChange={(e) => setShortNote(e.target.value)}
            ></textarea>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option selected>Payment method</option>
                <option value="paypal">PayPal</option>
                <option value="momo">Momo</option>
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
              <CheckoutModal
                firstname={firstname}
                lastname={lastname}
                email={email}
                address={address}
                amount={amount}
                telephone={telephone}
                city={city}
                paymentMethod={paymentMethod}
                organization={organization}
                shortNote={shortNote}
                selectedHours={selectedHours}
                date={date}
                totalOfFrancs={totalOfFrancs}
                tax={tax}
                totalCost={totalCost}
                id={id}
                name={name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeBooking;
