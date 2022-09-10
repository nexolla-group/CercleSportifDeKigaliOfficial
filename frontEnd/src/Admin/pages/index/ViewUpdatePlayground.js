import React from "react";
import UpdatePlayGround from "./UpdatePlayGround";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const ViewUpdatePlayground = () => {
  return (
    <>
      {/* !-- Button trigger modal -- */}
      <p data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <ModeEditOutlineOutlinedIcon />
      </p>

      {/* -- Modal -- */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary" id="staticBackdropLabel">
                Update Playground
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <UpdatePlayGround />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUpdatePlayground;
