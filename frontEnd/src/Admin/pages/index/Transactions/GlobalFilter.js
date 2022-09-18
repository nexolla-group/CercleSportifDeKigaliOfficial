import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <div className="row mb-5">
        <div className="col col-md-4">
          <input
            className="form-control fs-5 text-black fw-bold"
            placeholder="Search Everything"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default GlobalFilter;
