import React from "react";

const TopBarADmin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-9">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-primary text-light"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="col col-3 "></div>
        </div>
      </div>
    </>
  );
};

export default TopBarADmin;
