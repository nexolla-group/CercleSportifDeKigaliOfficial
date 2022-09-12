import React, { useState, useEffect } from "react";

const Categories = ({ playgrounds, setSearchResult }) => {
  const [category, setCategory] = useState(["All"]);

  useEffect(() => {
    const res = ["All"];
    for (let i = 0; i < playgrounds.length; i++) {
      console.log(i);
      if (res.indexOf(playgrounds[i].category) === -1) {
        res.push(playgrounds[i].category);
      }
    }
    setCategory(res);
  }, [playgrounds]);
  const handleFilter = (category) => {
    if (category == "All") {
      setSearchResult(playgrounds);
    } else {
      setSearchResult(playgrounds.filter((item) => item.category == category));
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
          Categories
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {category.map((item, index) => (
            <button
              onClick={() => handleFilter(item)}
              className="btn btn-primary"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
