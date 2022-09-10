import React from "react";

const UpdatePlayGround = () => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <div className="container">
            <div className="row">
              <div className="col col-7">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Playground Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Playground Category"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Playground Description......"
                    rows="2"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Default price"
                  />
                </div>
                <select className="form-select form-select-lg mb-3">
                  <option className="text-dark" selected>
                    Select Playground Category
                  </option>
                  <option value="1"></option>
                </select>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                  <label
                    className="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image1
                  </label>
                </div>
                <div className="input-group mb-3">
                  <input className="form-control" id="inputGroupFile02" />
                  <label
                    className="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image2
                  </label>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  />
                  <label
                    class="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image3
                  </label>
                </div>
              </div>
              <div className="col -col-5">
                <p className="fs-4 text-primary text-start">
                  Pick Available Hours
                </p>
                <div className="row">
                  <div className="col">
                    <div class="input-group">
                      <span class="input-group-text">From</span>
                      <input
                        type="time"
                        aria-label="First name"
                        class="form-control"
                        placeholder="from"
                      />
                      <input
                        type="time"
                        aria-label="Last name"
                        class="form-control"
                        placeholder="to"
                      />
                      <span class="input-group-text">To</span>
                    </div>
                  </div>
                </div>
                <p className="fs-4 text-primary text-start">
                  Pick Unavailable Hours
                </p>
                <div className="row">
                  <div className="col">
                    <div class="input-group">
                      <span class="input-group-text">From</span>
                      <input
                        type="time"
                        aria-label="First name"
                        class="form-control"
                        placeholder="from"
                      />
                      <input
                        type="time"
                        aria-label="Last name"
                        class="form-control"
                        placeholder="to"
                      />
                      <span class="input-group-text">To</span>
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

export default UpdatePlayGround;
