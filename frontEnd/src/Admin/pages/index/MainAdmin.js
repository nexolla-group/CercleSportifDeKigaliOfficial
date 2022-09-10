import React from "react";
import RecentlyAddedPlaygrounds from "./RecentlyAddedPlaygrounds";
import Statistics from "./Statistics";

const MainAdmin = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="card">
            <div class="card-header">
              <b>Recently added Playgrounds</b>
            </div>
            <div
              style={{ height: "400px", overflow: "scroll" }}
              class="card-body"
            >
              <RecentlyAddedPlaygrounds />
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Statistics />
        </div>
      </div>
    </>
  );
};

export default MainAdmin;
