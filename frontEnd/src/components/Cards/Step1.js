import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

const Step1 = ({
  availableHours,
  selectedHours,
  handleHours,
  playgrounds,
  setPlaygrounds,
  setNextScreen,
  setDate,
  date,
  totalPrice,
}) => {
  const { price } = playgrounds;
  const { id } = useParams();

  const api = `http://localhost:2004/api/playground/${id}`;

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
  function CheckD(e) {
    var current = new Date(document.getElementById("task_date").value);
    var today = new Date();
    if (current.getDate() < today.getDate()) {
      alert("You Can't Assign Task For Expired Date");
      setDate("");
    } else {
      return setDate(e.target.value);
    }
  }

  // const minDate = year + "-" + month + "-" + day;
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
              id="task_date"
              value={date}
              className="input-group"
              onChange={(e) => {
                CheckD(e);
              }}
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
            <div className="row m-2">
              {availableHours.map((item, index) => (
                <div key={index} className="col-6 col-sm-3 mb-2">
                  <button
                    onClick={() => handleHours(item)}
                    style={{ width: "100%" }}
                    className={`btn btn-outline-secondary text-dark ${
                      selectedHours.find(
                        (x) =>
                          x.startTime == item.startTime &&
                          x.endTime == x.endTime
                      )
                        ? "bg-success"
                        : ""
                    }`}
                  >
                    {`${item.startTime}-${item.endTime}`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h5 fs-5>Price: </h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">{totalPrice}</div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h5 fs-5>Amount to pay </h5>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">{totalPrice * selectedHours.length}</div>
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
                  console.log(date);
                  if (selectedHours.length > 0 && date !== "") {
                    setNextScreen(true);
                  } else {
                    toast("Please select date and hours you want to book ", {
                      type: "warning",
                      position: "bottom-right",
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                    });
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
