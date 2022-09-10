import React, { useState, useEffect } from "react";

const Status = ({ playgrounds, setSearchResult }) => {
  const [status, setStstus] = useState([]);

  useEffect(() => {
    const res = ["All"];
    for (let i = 0; i < playgrounds.length; i++) {
      console.log(i);
      if (res.indexOf(playgrounds[i].isAvailable) === -1) {
        res.push(playgrounds[i].isAvailable);
      }
    }
    setStstus(res);
  }, [playgrounds]);
  const handleFilter = (status) => {
    if (status == "All") {
      setSearchResult(playgrounds);
    } else {
      setSearchResult(playgrounds.filter((item) => item.isAvailable == status));
    }
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <button
              onClick={() => handleFilter(item)}
              className="btn btn-primary"
              key={index}
            >
              {item ? "Available" : "Not available"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
