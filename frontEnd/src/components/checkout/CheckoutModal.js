import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";

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
  id,
  name,
}) => {
  const [transactionId, setTransactionId] = useState("");

  const organizationId = "10fddf2a-0883-41c0-aa6d-74c98ec3b792";
  const description = "payment request with endpoints for playground";
  const callbackUrl = "http://myonlineprints.com/payments/callback";

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const result = await Axios.get(
        "https://www.uuidgenerator.net/api/version4"
      );
      if (result) {
        setTransactionId(result.data);
        const paymentResult = await Axios.post(
          "https://opay-api.oltranz.com/opay/paymentrequest",
          {
            telephoneNumber: telephone,
            amount: totalCost,
            organizationId: organizationId,
            description: description,
            callbackUrl: callbackUrl,
            transactionId: transactionId,
          }
        );
        if (paymentResult) {
          console.log(paymentResult);
          const data = {
            transactionId: transactionId,
            playGroundId: id,
            amount: totalCost,
            transactionStatus: paymentResult.data.status,
            paymentMethod: paymentMethod,
            transactionDescription: paymentResult.data.description,
            firstname: firstname,
            lastname: lastname,
            telephoneNumber: telephone,
            email: email,
            city: city,
          };

          const saveTransaction = await Axios.post(
            "http://localhost:2004/api/transaction",
            data
          );
          if (saveTransaction) {
            if (saveTransaction.data.success == "true") {
              toast(paymentResult.data.description, {
                type: "success",
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              toast(paymentResult.data.description, {
                type: "danger",
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          } else {
            console.log(`error: ${saveTransaction.data.response.dataerrors}`);
          }
        } else {
          console.log(paymentResult);
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      toast(
        `${error.response.data.errors[0].value} is ${error.response.data.errors[0].msg}`,
        {
          type: "warning",
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
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
                Details about {name}
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
                            Playground:
                            <span className="fw-normal">{name}</span>
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
