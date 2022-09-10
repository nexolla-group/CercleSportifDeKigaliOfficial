import React from "react";
import { ProgressBar } from "react-bootstrap";
const Statistics = () => {
  return (
    <>
      {" "}
      <div class="card">
        <div class="card-header">
          <b>Statistics</b>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col col-12 text-start">
              <div style={{ backgroundColor: "#F5F4F4" }} className="container">
                <div className="stats py-3 px-4">
                  <div className="py-2">
                    <div className="progressBar">
                      <h5>Booked playgrounds</h5>
                      <ProgressBar now={50} className="bg-dark ppp" />
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="progressBar">
                      <h5>Playground Ratings</h5>
                      <ProgressBar
                        variant="warning"
                        className="bg-dark ppp"
                        now={35}
                      />
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="progressBar">
                      <h5>Registred clients</h5>
                      <ProgressBar
                        variant="info "
                        className="bg-dark ppp"
                        now={70}
                      />
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="progressBar">
                      <h5>Reviews</h5>
                      <ProgressBar className="bg-dark ppp" now={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
