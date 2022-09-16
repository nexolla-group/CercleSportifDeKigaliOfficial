import React, { useState, useEffect } from "react";
import HeaderWhenLoggedIn from "../components/Header/HeaderWhenLoggedIn";
import MakeBooking from "../components/makeBooking/MakeBooking";

const Booking = ({
  setEmail,
  setPassword,
  setNextScreen,
  selectedHours,
  date,
  totalOfFrancs,
  tax,
  totalCost,
  playgroundName,
}) => {
  return (
    <>
      {/* <HeaderWhenLoggedIn /> */}

      <>
        <div style={{ padding: "2rem" }} className="container-fluid fs-5">
          <h2 className="text-start fs-3">Make Booking</h2>
          <div>
            <MakeBooking
              setNextScreen={setNextScreen}
              selectedHours={selectedHours}
              date={date}
              totalOfFrancs={totalOfFrancs}
              tax={tax}
              totalCost={totalCost}
              playgroundName={playgroundName}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Booking;
