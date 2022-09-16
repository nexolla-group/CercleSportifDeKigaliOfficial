import React, { useState } from "react";
import Axios from "axios";

const CheckoutModal = ({
  firstname,
  lastname,
  email,
  telephone,
  amount,
  city,
  address,

  shortNote,
  paymentMethod,
  selectedHours,
  date,

  tax,
  totalCost,
  playgroundName,
}) => {
  const [transactionId, setTransactionId] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.get(
        "https://www.uuidgenerator.net/api/version4"
      );
      if (result) {
        console.log(result.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Preview
      </button>

      {/* Modal */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div
              style={{ backgroundColor: "whitesmoke" }}
              class="modal-header  text-black"
            >
              <h5 class="modal-title" id="staticBackdropLabel">
                Details about {playgroundName}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row text-start">
                <div className="col col-12">
                  <div class="card shadow-sm rounded">
                    <div class="card-header">Personal Details</div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col col-12">
                          <p className="fs-6 fw-bold">
                            First name:
                            <span className="fw-normal">{firstname}</span>
                          </p>
                        </div>
                        <div className="col col-12">
                          <p className="fs-6 fw-bold">
                            Last name:{" "}
                            <span className="fw-normal">{lastname}</span>
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
                            Phone:{" "}
                            <span className="fw-normal">{telephone}</span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col col-12">
                          <p className="fs-6 fw-bold">
                            Address:{" "}
                            <span className="fw-normal">{address}</span>
                          </p>
                        </div>
                        <div className="colcol-12">
                          <p className="fs-6 fw-bold">
                            City: <span className="fw-normal">{city}</span>
                          </p>
                        </div>
                      </div>
                      <div className="row mt-1">
                        <div className="col col-12">
                          <p className="fs-6 fw-bold">
                            Notes:{" "}
                            <span className="fw-normal">{shortNote}</span>
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
                  <div class="card shadow-sm rounded">
                    <div class="card-header">Total</div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col col-12">
                          <p className="fs-6 fw-bold">
                            Playground: {playgroundName}
                          </p>
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
                            Date:{" "}
                            <span className="fw-normal">{date.toString()}</span>
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
                            Total Amount:{" "}
                            <span className="fw-normal">{totalCost}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handlePayment}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
