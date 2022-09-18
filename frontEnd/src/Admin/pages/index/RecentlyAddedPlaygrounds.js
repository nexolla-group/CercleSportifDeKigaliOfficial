import React, { useState, useEffect } from "react";
import Axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ViewUpdatePlayground from "./ViewUpdatePlayground";
import ViewMoreAboutPlayground from "./ViewMoreAboutPlayground";

const RecentlyAddedPlaygrounds = ({ token }) => {
  const [playgrounds, setPlaygrounds] = useState([]);

  const api = `http://localhost:2004/api/playground/`;
  const fetchPlayground = () => {
    Axios.get(api)
      .then((res) => {
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        console.log("problem getting playgrounds", err);
      });
  };
  useEffect(() => {
    fetchPlayground();
  }, [api]);
  const handleDelete = async (id) => {
    try {
      await Axios.delete(
        `http://localhost:2004/api/playGround/${id}?&&token=${token}`
      );
      setPlaygrounds(playgrounds.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  let display;
  if (playgrounds) {
    // console.log(playgrounds);
    display = playgrounds.map((item, index) => {
      return (
        <div key={index} className="row mb-2">
          <div className="col col-4 text-start">
            <img
              style={{ borderRadius: 4, height: "100px" }}
              src={item.photo}
              className="img-fluid rounded-lg"
            />
          </div>
          <div
            style={{
              border: "1px solid #F5F4F4",
              borderRadius: 4,
            }}
            className="col col-6 text-start"
          >
            <div
              style={{ backgroundColor: "whitesmoke", paddingTop: "1rem" }}
              className="row"
            >
              <div className="col col-6 text-start">
                {" "}
                <h6 className="card-title fw-bold">{item.name}</h6>
              </div>
              <div className="col col-6 text-end">
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
            <p className="card-text text-truncate">{item.description}</p>
            <ViewMoreAboutPlayground item={item} />
          </div>
          <div style={{ cursor: "pointer" }} className="col col-1 p-2 text-end">
            <p className="fs-5 text-success">
              <ViewUpdatePlayground />
            </p>
          </div>
          <div style={{ cursor: "pointer" }} className="col col-1 p-2 text-end">
            <DeleteOutlineOutlinedIcon onClick={() => handleDelete(item._id)} />
          </div>
        </div>
      );
    });
  } else {
    display = "";
  }
  return (
    <>
      {playgrounds.length > 0 ? (
        <>
          {playgrounds.map((item, index) => (
            <div key={index} className="row mb-2">
              <div className="col col-4 text-start">
                <img
                  style={{ borderRadius: 4, height: "100px" }}
                  src={item.photo.url}
                  className="img-fluid rounded-lg"
                />
              </div>
              <div
                style={{
                  border: "1px solid #F5F4F4",
                  borderRadius: 4,
                }}
                className="col col-6 text-start"
              >
                <div
                  style={{
                    backgroundColor: "whitesmoke",
                    paddingTop: "1rem",
                  }}
                  className="row"
                >
                  <div className="col col-6 text-start">
                    {" "}
                    <h6 className="card-title fw-bold">{item.name}</h6>
                  </div>
                  <div className="col col-6 text-end">
                    {(() => {
                      if (item.isAvailable) {
                        return (
                          <div
                            className={`   fw-bold card-title text-success `}
                          >
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
                <p className="card-text text-truncate">{item.description}</p>
                <ViewMoreAboutPlayground item={item} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="col col-1 p-2 text-end"
              >
                <p className="fs-5 text-success">
                  <ViewUpdatePlayground playground={item} />
                </p>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="col col-1 p-2 text-end"
              >
                <DeleteOutlineOutlinedIcon
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete playground?"
                      )
                    ) {
                      handleDelete(item._id);
                    }
                  }}
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>No playground found!</>
      )}
    </>
  );
};

export default RecentlyAddedPlaygrounds;
