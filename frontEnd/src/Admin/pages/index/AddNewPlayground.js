import React, { useState, useEffect } from "react";
import Axios from "axios";
const AddNewPlayGround = (fetchPlayground) => {
  const [name, setName] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI5NzBmM2QyNDY3M2JlMGJjNWNkYiIsImlhdCI6MTY2Mjc4NzU4MSwiZXhwIjoxNjY1Mzc5NTgxfQ.c2dFzkb-B2Smb2QOtAnlx2FQ-Cmdl2nl57Z-6qZaeV4";
  useEffect(() => {
    Axios.get("http://localhost:2004/api/groundCategory")
      .then((res) => {
        setGetcategory(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const savePlayground = () => {
    Axios.post("http://localhost:2004/api/playGround/", {
      token,
      name,
      category,
      description,
      price,
      image,
    })
      .then((response) => {
        setName("");
        setCategory("");
        setPrice("");
        setDescription("");
        fetchPlayground();
        console.log("data saved successfully", response);
      })
      .catch((error) => {
        console.log("problem of saving data", error);
      });
    console.log(name, description, category, price);
  };

  return (
    <>
      <div class="card">
        <div class="card-header">
          <b>Add New Playground</b>
        </div>
        <div class="card-body">
          <div className="container">
            <div className="row">
              <div className="col col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Playground Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Playground Description......"
                    rows="2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Default price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select form-select-lg mb-3"
                >
                  <option className="text-dark" selected>
                    Select playground category
                  </option>
                  {getcategory.map((cat, i) => (
                    <option value={cat._id} key={i}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                  <label
                    className="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image1
                  </label>
                </div>
                <div className="input-group mb-3">
                  <input
                    value={image}
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <label
                    className="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image2
                  </label>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  />
                  <label
                    class="input-group-text text-light bg-dark"
                    for="inputGroupFile02"
                  >
                    Playground Image3
                  </label>
                </div>
              </div>
              <div className="col col-lg-5 col-sm-12 col-xs-12 ">
                <p className="fs-4"> Pick Available Hours</p>
                <div className="row mb-3">
                  <div className="col">
                    <div class="input-group">
                      <span class="input-group-text">From</span>
                      <input
                        type="time"
                        aria-label="First name"
                        class="form-control"
                        placeholder="from"
                      />
                      <input
                        type="time"
                        aria-label="Last name"
                        class="form-control"
                        placeholder="to"
                      />
                      <span class="input-group-text">To</span>
                    </div>
                  </div>
                </div>
                <p className="fs-4"> Pick Unavailable Hours</p>
                <div className="row">
                  <div className="col">
                    <div class="input-group">
                      <span class="input-group-text">From</span>
                      <input
                        type="time"
                        aria-label="First name"
                        class="form-control"
                        placeholder="from"
                      />
                      <input
                        type="time"
                        aria-label="Last name"
                        class="form-control"
                        placeholder="to"
                      />
                      <span class="input-group-text">To</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12 text-start">
                <button className="btn text-light bg-dark">Cancel</button>
              </div>
              <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
                <button
                  onClick={savePlayground}
                  className="btn text-light bg-dark"
                >
                  Add Playground
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPlayGround;
