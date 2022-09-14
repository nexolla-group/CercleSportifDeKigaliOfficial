import axios from "axios";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Category() {
  const [getCategory, setGetCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjA4NWRkNDk5MzdkN2JlYTY0MjRjYyIsImlhdCI6MTY2MzA3NTk0MywiZXhwIjoxNjY1NjY3OTQzfQ.ldN0KOLNQ_6OPxR04XOug25Yp5ixhrjclkFCtrh_UxY";

  let linkApi = "http://localhost:2004/api/groundCategory";
  const fetchCategory = async () => {
    await axios
      .get(linkApi)
      .then((res) => {
        setGetCategory(res.data.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  // save new category
  const handleCreate = async (e) => {
    e.preventDefault();
    const data = {
      token,
      name,
      description,
    };
    try {
      const saveCat = await axios.post(
        "http://localhost:2004/api/groundCategory",
        data
      );
      if (saveCat) {
        setName("");
        setDescription("");
        fetchCategory();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:2004/api/groundCategory/${id}?&&token=${token}`
      );
      setGetCategory(getCategory.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div style={{ padding: "2rem" }} className="container-fluid">
        <div className="row">
          <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12  ">
            <div class="card bg-light bg-gradient rounded shadow-sm">
              <div class="card-header fw-bold ">
                Recently Added Playground Categories
              </div>
              <div style={{ height: "500px" }} class="card-body overflow-auto">
                {getCategory.map((cat, i) => (
                  <>
                    <div className="card border-outline-primary m-2 shadow-sm">
                      <div className="card-header" key={i}>
                        <div className="row">
                          <div className="col col-9 text-start text-black fw-bold">
                            {cat.name}
                          </div>
                          <div className="col col-3 text-end">
                            <DeleteOutlineIcon
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to delete playground category?"
                                  )
                                ) {
                                  handleDelete(cat._id);
                                }
                              }}
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
            <h5 className="fs-5 fw-bold ">Add playground category</h5>
            <hr />

            <form className="bg-light bg-gradient rounded shadow-sm">
              <input
                className="form-control"
                type="text"
                placeholder="Category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              {/* <input
                className="form-control"
                type="text"
                placeholder="Category Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              /> */}

              <button
                className="btn btn-outline-primary"
                onClick={handleCreate}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
