import React, { useState, useEffect } from "react";
import HeaderWhenLoggedIn from "../components/Header/HeaderWhenLoggedIn";
import MakeBooking from "../components/makeBooking/MakeBooking";

const Booking = ({ setEmail, setPassword, setNextScreen }) => {
  return (
    <>
      {/* <HeaderWhenLoggedIn /> */}

      <>
        <div style={{ padding: "2rem" }} className="container-fluid fs-5">
          <h2 className="text-start fs-3">Make Booking</h2>
          <div>
            <MakeBooking setNextScreen={setNextScreen} />
          </div>
        </div>
      </>
    </>
  );
};

export default Booking;
