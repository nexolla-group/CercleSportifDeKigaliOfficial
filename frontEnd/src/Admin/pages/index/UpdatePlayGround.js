import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdatePlayGround = ({ item }) => {
  const [getCategory, setGetCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWZhNTM1M2I5Y2I1Y2E4ZDI5ZmVjOCIsImlhdCI6MTY2MzAxODMwMCwiZXhwIjoxNjY1NjEwMzAwfQ.JPNK5aj4SIzXC-jEefXcyhrDjo9BM6tx1PXDNQEkbyc";
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
    setIsLoading(true);
    if (photo) {
      const photo1 = new FormData();
      photo1.append("file", photo);
      const photo1Res = await axios.post(
        "http://localhost:2004/api/uploads",
        photo1
      );
      if (photo1Res || photo) {
        const image1 = photo1Res.data;
        if (photo2) {
          const photo2Data = new FormData();
          photo2Data.append("file", photo2);
          const photo2Res = await axios.post(
            "http://localhost:2004/api/uploads",
            photo2Data
          );
          if (photo2Res || photo2) {
            const image2 = photo2Res.data;
            if (photo3) {
              const photo3Data = new FormData();
              photo3Data.append("file", photo3);
              const photo3Res = await axios.post(
                "http://localhost:2004/api/uploads",
                photo3Data
              );
              if (photo3Res || photo3) {
                const image3 = photo3Res.data;
                const data = {
                  token: token,
                  name: name,
                  description: description,
                  price: price,
                  category: category,
                  photo: image1,
                  photo2: image2,
                  photo3: image3,
                };
                await axios
                  .put(`http://localhost:2004/api/playGround/${item._id}`, data)
                  .then((res) => {
                    setIsLoading(false);
                    console.log(`Data Update Successfully!!\n${res}`);
                  })
                  .catch((e) => {
                    setIsLoading(false);
                    console.log(e);
                  });
              }
            }
          }
        }
      }
    }
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
                      onChange={(e) => setPhoto(e.target.files[0])}
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
                      onChange={(e) => setPhoto2(e.target.files[0])}
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
                      onChange={(e) => setPhoto3(e.target.files[0])}
                    />
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
