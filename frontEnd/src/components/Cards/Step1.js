import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Axios from "axios";

const Step1 = ({
  hours,
  handleHours,
  choices,
  playgrounds,
  setPlaygrounds,
  setNextScreen,
  setDate,
  date,
}) => {
  const { price } = playgrounds;
  const { id } = useParams();
  const api = `http://localhost:2004/api/v1/playground/${id}`;

  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        // console.log(res.data);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          borderTop: 0,
          backgroundColor: "whitesmoke",
        }}
        className="container-fluid mb-3"
      >
        <div
          style={{
            borderBottom: "1px solid blue",
            borderTop: "1px solid blue",
          }}
          className="row mt-2"
        >
          <div className="col text-center">
            <h2>Book Playground</h2>
          </div>
        </div>
        <div style={{ padding: 10 }} className="row">
          <div className="col col-4 text-left">
            <h4>Date</h4>
          </div>
          <div className="col col-8 text-right">
            <input
              name="date"
              type="date"
              value={date}
              className="input-group"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ padding: 10 }}>
          <div
            style={{ borderBottom: "1px solid grey" }}
            className="col col-8 text-left"
          >
            <h4>Avalable choices:</h4>
          </div>
        </div>
        <div className="row">
          <div
            style={{ fontWeight: "bold" }}
            className="container text-center text-dark"
          >
            <div class="row m-2">
              {choices.map((item, index) => (
                <div key={index} class="col-6 col-sm-3 mb-2">
                  <button
                    onClick={() => handleHours(item.hours)}
                    style={{ width: "100%" }}
                    className={`btn btn-outline-secondary text-dark ${
                      hours.find((x) => x == item.hours) ? "bg-success" : ""
                    }`}
                  >
                    {item.hours}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h5 fs-5>Price: </h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">{price * hours.length}</div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h5 fs-5></h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <button
                onClick={() => {
                  if (hours.length > 0) {
                    setNextScreen(true);
                  }
                }}
                style={{ width: "25%", padding: "2" }}
                className="btn btn-primary fs-5"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;