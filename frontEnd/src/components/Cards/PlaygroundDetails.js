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

  let { name, description, photo, price, isAvailable } = playgrounds;
  let api = `http://localhost:2004/api/playground/${id}`;
  useEffect(() => {
    Axios.get(api)
      .then((res) => {
        // console.log(res.data);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
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
        <div className="product-imgs">
          <div className="img-display">
            <div style={{ display: "flex" }} className="img-showcase">
              <img src={photo} />
              <img
                src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/20170830193019-77471-43.jpg"
                alt="shoe image"
              />
              <img
                src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/soccer-2-1553724-37.jpg"
                alt="shoe image"
              />
              <img
                src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/football-1442407-38.jpg"
                alt="shoe image"
              />
            </div>
          </div>
          <div onClick={selectImage} className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img src={photo} alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img
                  src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/20170830193019-77471-43.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/soccer-2-1553724-37.jpg" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src="https://trials.vevs.website/web-demo/playground-website/1/app/web/upload/medium/football-1442407-38.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundDetails;