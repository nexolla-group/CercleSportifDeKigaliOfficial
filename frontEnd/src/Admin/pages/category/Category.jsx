import styles from "./category.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteForever } from "@material-ui/icons";

export default function Category() {
  const [getCategory, setGetCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI5NzBmM2QyNDY3M2JlMGJjNWNkYiIsImlhdCI6MTY2Mjc1Mjg4NiwiZXhwIjoxNjY1MzQ0ODg2fQ.73prhBNc1AodAKAw34tTqFSVc4JFBkLhNWj-jNPTARM";

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
    console.log(id);
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
      <div className={styles.container}>
        <div className={styles.topx}>
          <h2>Playground categories</h2>
        </div>
        <div className="categoryA my-5">
          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{ width: "40rem" }}
          >
            {getCategory.map((cat, i) => (
              <>
                <div
                  className="card border-primary my-2 mx-1"
                  style={{ width: "18rem" }}
                >
                  <div
                    className="card-header d-flex justify-content-between "
                    key={i}
                  >
                    {cat.name}
                    <DeleteForever
                      className="text-danger"
                      onClick={() => handleDelete(cat._id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="card-body py-2">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">
                      {cat.description
                        ? cat.description
                        : "No decription mentioned!"}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div>
            <span style={{ fontSize: "1rem", textDecoration: "underline" }}>
              <h5 style={{ fontSize: "20px", fontWeight: "700" }}>
                Add playground category
              </h5>
            </span>
            <form className="newCatForm">
              <div className="newCatItem">
                <label> Category name</label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="newCatItem">
                <label> Description</label>
                <input
                  type="text"
                  placeholder="Category Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button className="newCatButton" onClick={handleCreate}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
