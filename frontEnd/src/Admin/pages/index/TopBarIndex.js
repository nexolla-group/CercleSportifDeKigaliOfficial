import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="mb-3 inputfile-box">
              <input
                type="file"
                id="file"
                className="inputfile"
                onchange="uploadFile(this)"
              />
              <label for="file">
                <span id="file-name" className="file-box ">
                  Playground image3
                </span>
                <span className="file-button">
                  <i className="fa fa-upload" aria-hidden="true"></i>
                  Choose
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
