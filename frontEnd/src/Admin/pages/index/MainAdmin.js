import React from "react";
import AddNewPlayGround from "./AddNewPlayground";
import RecentlyAddedPlaygrounds from "./RecentlyAddedPlaygrounds";
import Statistics from "./Statistics";

const MainAdmin = ({ token }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col col-lg-5 col-md-6 col-sm-12 col-xs-12">
          <div class="card">
            <div class="card-header">
              <b>Recently added Playgrounds</b>
            </div>
            <div
              style={{ height: "400px", overflow: "scroll" }}
              class="card-body"
            >
              <RecentlyAddedPlaygrounds token={token} />
            </div>
          </div>
        </div>
        <div className="col col-lg-7 col-md-6 col-sm-12 col-xs-12">
          <AddNewPlayGround token={token} />
        </div>
      </div>
    </>
  );
};

export default MainAdmin;
