import React from "react";
import Category from "../category/Category";
import RegiteredUser from "../registeredUser/RegiteredUser";
// import PlaygroundReport from "./PlaygroundReport";
import BasicTable from "./Transactions/BasicTable";
import SortingTable from "./Transactions/SortingTable";
import FilteringTable from "./Transactions/FilteringTable";

const Accordions = ({ token }) => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-bold bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Category token={token} />
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed  fw-bold bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Booked Playgrounds Report:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* <PlaygroundReport /> */}
              {/* <BasicTable /> */}
              <SortingTable />
              {/* <FilteringTable /> */}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button fw-bold bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Registered users
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <RegiteredUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordions;
