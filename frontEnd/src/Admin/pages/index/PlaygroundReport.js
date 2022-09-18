import React from "react";

const PlaygroundReport = () => {
  return (
    <>
      <div
        style={{ paddding: "2rem" }}
        className="container-fluid bg-white text-black"
      >
        <div className="row">
          <div className="col col4">
            <h4 className="text-start fs-5">
              <u>Booked Playgrounds Report:</u>
            </h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-4">
            <h4 className="fs-5">
              <u>Search</u>
            </h4>
          </div>
          <div className="col col-4"></div>
          <div className="col col-4 text-start">
            <h4 className="fs-5">
              <u>Filter:</u>
            </h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-6">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search"
            />
          </div>
          <div className="col col-2"></div>
          <div className="col col-4">
            <div className="input-group mb-3">
              <select
                className="form-select text-center"
                id="inputGroupSelect01"
              >
                <option selected>All</option>
                <option value="1">Expired bookings</option>
                <option value="2">Ongoing sessions</option>
                <option value="3">Most booked Playgrounds</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <table className="table table-hover table-bordered shadow-sm">
              <thead>
                <tr className="bg-light text-black">
                  <th scope="col">Playground</th>
                  <th scope="col">Booked-date</th>
                  <th scope="col">Booked Hours</th>
                  <th scope="col">Total Hours</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Client Phone</th>
                  <th scope="col">Client Address</th>
                  <th scope="col">Expired</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Football</th>
                  <td>1/09/2022</td>
                  <td>08:00 - 09:00</td>
                  <td>1</td>
                  <td>5000 Rwf</td>
                  <td>John BIZIMANA</td>
                  <td>+250 784 754 665</td>
                  <td>Kigali,Gatsata</td>
                  <td> No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-6 text-start fw-bold">Total Amount</div>
          <div className="col col3 text-start fw-bold">5000</div>
          <div className="col col-3 text-center">
            <button onClick={window.print} className="btn btn-dark">
              Print Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaygroundReport;
