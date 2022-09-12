import React, { useState, useEffect } from "react";
import Axios from "axios";
const AddNewPlayGround = () => {
  const [name, setName] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [fetchPlayground, setFetchPlayground] = useState([]);
  const [playground, setPlayground] = useState("");
  const [getHours, setGetHours] = useState([]);
  console.log(startTime, endTime, playground);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWVmYjE2Mzc2YTY0ZDcyODVmNTU2NSIsImlhdCI6MTY2Mjk4MDc1MywiZXhwIjoxNjY1NTcyNzUzfQ.gymUlsaf43TMKSFm1qzyPUCpplAAUtw4ZMbTrOPyqmw";
  const fetchHours = () => {
    Axios.get("http://localhost:2004/api/time")
      .then((res) => setGetHours(res.data.data))
      .catch((error) => console.log(error));
  };
  // console.log(getHours);
  useEffect(() => {
    Axios.get("http://localhost:2004/api/groundCategory")
      .then((res) => {
        setGetcategory(res.data.data);
      })
      .catch((e) => console.log(e));
    Axios.get("http://localhost:2004/api/playGround")
      .then((response) => {
        setFetchPlayground(response.data.data);
      })
      .catch((err) => console.log(err));
    fetchHours();
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

        console.log("data saved successfully", response);
      })
      .catch((error) => {
        console.log("problem of saving data", error);
      });
  };
  const handleSaveHour = async () => {
    await Axios.post("http://localhost:2004/api/time", {
      token,
      playground,
      startTime,
      endTime,
    })
      .then((res) => {
        setStartTime("");
        setEndTime("");
        setPlayground("");
        fetchHours();
        console.log("Hour saved!!!!!!!!!" + res);
      })
      .catch((e) => console.log(e));
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
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="from"
                      />
                      <input
                        type="time"
                        aria-label="Last name"
                        class="form-control"
                        value={endTime}
                        placeholder="to"
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                      <span class="input-group-text">To</span>

                      {/* setect playground */}
                    </div>
                  </div>
                </div>
                {/* <p className="fs-4"> Pick Unavailable Hours</p>
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
                </div> */}
                <p className="fs-4"> Pick Playground</p>
                <div className="row">
                  <div className="col">
                    <div class="input-group">
                      <select
                        value={playground}
                        onChange={(e) => setPlayground(e.target.value)}
                        className="form-select form-select-lg mb-3"
                      >
                        <option className="text-dark" selected>
                          Select Playground
                        </option>
                        {fetchPlayground.map((playg, j) => (
                          <option value={playg._id} key={j}>
                            {playg.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <button style={{ width: "100%" }} onClick={handleSaveHour}>
                      {" "}
                      Add hour
                    </button>
                  </div>
                </div>
                {/* display selected hours */}
                <div class="row m-2">
                  {getHours.map((item, index) => (
                    <div key={index} class="col-6 col-sm-3 mb-2">
                      <button
                        className={`btn btn-outline-secondary text-dark mr-5 
                        `}
                      >
                        {item.startTime}
                      </button>
                    </div>
                  ))}
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
