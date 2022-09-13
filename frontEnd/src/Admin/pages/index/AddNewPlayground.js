import React, { useState, useEffect } from "react";
import Axios from "axios";
import AlarmAddRoundedIcon from "@mui/icons-material/AlarmAddRounded";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const AddNewPlayGround = () => {
  const [name, setName] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [fetchPlayground, setFetchPlayground] = useState([]);
  const [playground, setPlayground] = useState("");
  const [getHours, setGetHours] = useState([]);
  console.log(photo);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjA4NWRkNDk5MzdkN2JlYTY0MjRjYyIsImlhdCI6MTY2MzA3OTM3OSwiZXhwIjoxNjY1NjcxMzc5fQ.L8o8jC-SwgwSQC-rurYrIPEEchs0TfYYST6o21Vd3hs";
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
      photo,
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
    if (!playground && !startTime && !endTime) {
      console.log("Please add both Time and select Playground!");
    } else if (playground == "") {
      console.log("please select playground");
    } else if (!startTime) {
      console.log("please add starting Time");
    } else {
      await Axios.post("http://localhost:2004/api/time", {
        token,
        playground,
        startTime,
        endTime,
      })
        .then((res) => {
          setStartTime("");
          setEndTime("");
          fetchHours();
          console.log("Hour saved!" + res);
        })
        .catch((e) => console.log(e));
    }
  };
  const deleteHour = async (id) => {
    try {
      await Axios.delete(
        `http://localhost:2004/api/time/${id}?&&token=${token}`
      );
      setGetHours(getHours.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(image);
    };
  }
  const handleChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    // previewFiles(file);
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
                    // value={photo}
                    className="form-control"
                    onChange={(e) => handleChange(e)}
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
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    // onChange={(e) => setPhoto2(e.target.value)}
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
                    // onChange={(e) => setPhoto3(e.target.value)}
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
                <p className="fs-3"> Pick Available Hours</p>
                <div className="row mb-2">
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
                <div className="row">
                  <div className="col">
                    <div class="input-group">
                      <select
                        value={playground}
                        onChange={(e) => setPlayground(e.target.value)}
                        className="form-select form-select-lg mb-3"
                      >
                        <option className="text-dark" selected>
                          {fetchPlayground.length < 1
                            ? "Add playground first"
                            : "Select Playground"}
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
                    <div className="col  col-12">
                      <button
                        onClick={handleSaveHour}
                        className="btn rounded shadow-sm text-light bg-black fs-6 w-100 g-5"
                      >
                        Add Hour
                        <span>
                          <AlarmAddRoundedIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <img src={image} />
                {/* display selected hours */}
                <div class="row m-2 h-50 overflow-auto">
                  <div class="col col-12 mb-2 ">
                    {getHours.map((item, index) => (
                      <>
                        {item.playground === playground ? (
                          <div className="card border-outline-primary m-2 shadow-sm">
                            <div key={index} className="card-header">
                              <div className="row">
                                <div className="col col-9 text-start text-black fw-bold pe-auto77y">
                                  {`${item.startTime}-${item.endTime}`}
                                </div>
                                <div className="col col-3 text-end">
                                  <DeleteOutlineIcon
                                    onClick={() => deleteHour(item._id)}
                                    style={{ color: "red", cursor: "pointer" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))}
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
                  className="btn btn-dark text-light"
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
