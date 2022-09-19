import React, { useState, useEffect } from "react";
import Status from "./category/Status";
import Categories from "./category/Categories.js";
import Axios from "axios";

const Filters = ({ setStatus, playgrounds, categories, setSearchResult }) => {
  let clear = () => {
    setStatus("");

    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center text-primary fw-bold fs-4 mb-2">
        Playground Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setSearchResult={setSearchResult} playgrounds={playgrounds} />
        <Categories
          categories={categories}
          setSearchResult={setSearchResult}
          playgrounds={playgrounds}
        />
      </div>
    </div>
  );
};

export default Filters;
