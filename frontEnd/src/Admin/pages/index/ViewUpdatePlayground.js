import React from "react";
import UpdatePlayGround from "./UpdatePlayGround";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const ViewUpdatePlayground = ({ playground }) => {
  // console.log(playground._id);

  return (
    <>
      {/* !-- Button trigger modal -- */}
      <p
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdrop${playground._id}`}
      >
        <ModeEditOutlineOutlinedIcon />
      </p>

      {/* -- Modal -- */}
      <div
        className="modal fade"
        id={`staticBackdrop${playground._id}`}
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

            <UpdatePlayGround item={playground} />

            {/* modal */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUpdatePlayground;
