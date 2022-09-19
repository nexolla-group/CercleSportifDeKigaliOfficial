import React, { useState, useEffect } from "react";

const Categories = ({ categories, setSearchResult, playgrounds }) => {
  const [category, setCategory] = useState(["All"]);

  useEffect(() => {
    const res = ["All"];
    for (let i = 0; i < categories.length; i++) {
      console.log(i);
      if (res.indexOf(categories[i].name) === -1) {
        res.push(categories[i].name);
      }
    }
    setCategory(res);
  }, [categories]);

  const handleFilter = (category) => {
    if (category == "All") {
      setSearchResult(playgrounds);
    } else {
      setSearchResult(
        playgrounds.filter((item) => item.category._id == category._id)
      );
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
          {categories.map((item, index) => (
            <button
              onClick={() => handleFilter(item)}
              className="btn btn-primary"
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
