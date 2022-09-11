import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdatePlayGround = ({ item }) => {
  const [getCategory, setGetCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI5NzBmM2QyNDY3M2JlMGJjNWNkYiIsImlhdCI6MTY2Mjc4NzU4MSwiZXhwIjoxNjY1Mzc5NTgxfQ.c2dFzkb-B2Smb2QOtAnlx2FQ-Cmdl2nl57Z-6qZaeV4";
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/groundCategory")
      .then((res) => {
        setGetCategory(res.data.data);
      })
      .catch((e) => console.log(e));

    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setCategory(item.category);
  }, []);
  const saveUpdates = async (e) => {
    e.preventDefault();
    const data = { token: token };
    if (name !== "") {
      data.name = name;
    }
    await axios
      .put(`http://localhost:2004/api/playGround/${item._id}`, data)
      .then((res) => {
        console.log(`Data Update Successfully!!\n${res}`);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="modal-body">
        <div class="card">
          <div class="card-body">
            <div className="container">
              <div className="row">
                <div className="col col-7">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      placeholder="Update Name of Playground"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="update Description of playground"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder={`Default price ${item.price}`}
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
                      Update playground category
                    </option>
                    {getCategory.map((cat, i) => (
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
                    <input type="file" className="form-control" />
                    <label
                      className="input-group-text text-light bg-dark"
                      for="inputGroupFile02"
                    >
                      Playground Image2
                    </label>
                  </div>

                  <div className="input-group mb-3">
                    <input type="file" class="form-control" />
                    <label
                      class="input-group-text text-light bg-dark"
                      for="inputGroupFile02"
                    >
                      Playground Image3
                    </label>
                  </div>
                </div>
                <div className="col -col-5">
                  <p className="fs-4 text-primary text-start">
                    Pick Available Hours
                  </p>
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
                  <p className="fs-4 text-primary text-start">
                    Pick Unavailable Hours
                  </p>
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
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" className="btn btn-primary" onClick={saveUpdates}>
          Update
        </button>
      </div>
    </>
  );
};

export default UpdatePlayGround;
