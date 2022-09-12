import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./cardDetails.css";

const selectImage = () => {
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;
  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;

      document.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    });
  });
};
const PlaygroundDetails = () => {
  let { id } = useParams();
  let [playgrounds, setPlaygrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { name, description, photo, photo2, photo3, price, isAvailable } =
    playgrounds;
  let api = `http://localhost:2004/api/playground/${id}`;
  useEffect(() => {
    setIsLoading(true);
    Axios.get(api)
      .then((res) => {
        setIsLoading(false);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  }, [api]);
  return (
    <div className="card-wrapper">
      <div
        className="card"
        style={{
          backgroundColor: "whitesmoke",
          border: 0,
          padding: 1,
          margin: "0px",
        }}
      >
        {/* <!-- card left --> */}
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
            <div className="product-imgs">
              <div className="img-display">
                <div style={{ display: "flex" }} className="img-showcase">
                  <img className="img-thumbnail" src={photo} />
                  <img className={photo2} />
                  <img
                    className="img-thumbnail"
                    src={photo3}
                    alt="shoe image"
                  />
                </div>
              </div>
              <div onClick={selectImage} className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1">
                    <img
                      className="img-thumbnail"
                      src={photo}
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2">
                    <img
                      className="img-thumbnail"
                      src={photo2}
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3">
                    <img className="img-thumbnail" src={photo3} />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaygroundDetails;
