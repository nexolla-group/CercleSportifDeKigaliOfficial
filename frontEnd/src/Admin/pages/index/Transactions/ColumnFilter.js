import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <>
      <div className="row mb-5">
        <div className="col">
          <input
            className="form-control-sm fs-5 text-black fw-bold"
            placeholder="Search everything"
            value={filterValue || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ColumnFilter;
