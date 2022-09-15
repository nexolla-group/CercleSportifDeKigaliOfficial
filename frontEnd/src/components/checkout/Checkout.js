import React from "react";
const Checkout = ({
  firstname,
  lastname,
  email,
  telephone,
  amount,
  city,
  address,
  organization,
  shortNote,
  paymentMethod,
  selectedHours,
  date,
  totalOfFrancs,
  tax,
  totalCost,
}) => {
  return (
    <>
      <div className="row text-start">
        <div className="col col-12">
          <div class="card">
            <div class="card-header">Personal Details</div>
            <div class="card-body">
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    First name:<span className="fw-normal">{firstname}</span>
                  </p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    First name: <span className="fw-normal">{lastname}</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Email: <span className="fw-normal">{email}</span>
                  </p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Phone: <span className="fw-normal">{telephone}</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Address: <span className="fw-normal">{address}</span>
                  </p>
                </div>
                <div className="colcol-12">
                  <p className="fs-6 fw-bold">
                    City: <span className="fw-normal">{city}</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Notes: <span className="fw-normal">{shortNote}</span>
                  </p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Payment method:
                    <span className="fw-normal">{paymentMethod}</span>
                  </p>
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
                  <p className="fs-6 fw-bold">
                    Time: {`(${selectedHours.length} Hours)`}
                    {selectedHours.map((hours, i) => (
                      <span
                        className="fw-normal mx-1"
                        key={i}
                      >{`${hours.startTime}-${hours.endTime}`}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Date: <span className="fw-normal">{date.toString()}</span>
                  </p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Price: <span className="fw-normal">{amount}</span>
                  </p>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    tax: <span className="fw-normal">{tax}</span>
                  </p>
                </div>
                <div className="col col-12">
                  <p className="fs-6 fw-bold">
                    Total Amount: <span className="fw-normal">{totalCost}</span>
                  </p>
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
