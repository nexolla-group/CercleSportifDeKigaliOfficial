import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./cardDetails.css";
import PlaygroundDetails from "./PlaygroundDetails";
import BookPlayground from "./BookPlayground";
import Header from "../Header/Header";
import BlackFooter from "../Footer/BlackFooter";

const CardDetails = () => {
  let { id } = useParams();
  console.log(id);
  let [playgrounds, setPlaygrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { name, description, photo, price, isAvailable } = playgrounds;
  let api = `http://localhost:2004/api/playGround/${id}`;

  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        setIsLoading(false);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        isLoading(true);
        console.log(err);
      });
  }, [api]);
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ backgroundColor: "whitesmoke", padding: "1rem" }}
      >
        <div
          className="row"
          style={{
            margin: "0px -1px",
            paddingLeft: "0px",
          }}
        >
          {isLoading ? (
            <>
              <div className="container">
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col col-xs-12 col-lg-6 col-sm-12 col-md-12">
                <PlaygroundDetails />
              </div>
            </>
          )}

          <div
            className="col col-xs-12 col-lg-6 col-sm-12 col-md-12 p-3"
            style={{ backgroundColor: "#fff", padding: "2rem" }}
          >
            <div className="row">
              <div className="col col-6">
                {" "}
                <h3 className="fs-5 text-start text-black">
                  <u>
                    <b>{name}</b>:
                  </u>
                </h3>
              </div>
              <div className="col col-6 text-end">
                <>
                  {" "}
                  {(() => {
                    if (isAvailable) {
                      return (
                        <div className={` fs-6 badge bg-success `}>
                          Available
                        </div>
                      );
                    } else {
                      return (
                        <div className={` fs-6 badge bg-danger `}>
                          Not available
                        </div>
                      );
                    }
                  })()}
                </>
              </div>
            </div>
            {description}
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "whitesmoke" }}>
          <div className="col">
            <BookPlayground />
          </div>
        </div>
      </div>
      <div
        style={{
          bottom: 0,
        }}
        className="footerContent"
      >
        <BlackFooter />
      </div>
    </>
  );
};

export default CardDetails;
