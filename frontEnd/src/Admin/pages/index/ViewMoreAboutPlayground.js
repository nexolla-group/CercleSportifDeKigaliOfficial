import React from "react";
import UpdatePlayGround from "./UpdatePlayGround";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";

const ViewMoreAboutPlayground = ({ item }) => {
  console.log(item);
  return (
    <>
      {/* !-- Button trigger modal -- */}
      <p data-bs-toggle="modal" data-bs-target={`#modal${item._id}`}>
        <span style={{ cursor: "pointer" }}>
          <ReadMoreOutlinedIcon />
        </span>
      </p>

      {/* -- Modal -- */}
      <div
        className="modal fade"
        id={`modal${item._id}`}
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
                {item.name}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-col-6">{item.description}</div>
                <div className="col col-6">
                  {" "}
                  {(() => {
                    if (item.isAvailable) {
                      return (
                        <div className={`   fw-bold card-title text-success `}>
                          Available
                        </div>
                      );
                    } else {
                      return (
                        <div className={`   fw-bold card-title text-danger `}>
                          Booked
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
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

export default ViewMoreAboutPlayground;
