import styles from "./newPlayground.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import axios from "axios";
import { DriveEta } from "@material-ui/icons";
import Topbar from "../../components/topbar/Topbar";
import { useEffect } from "react";

const NewPlayground = () => {
  const [files, setFiles] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [category, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  console.log(files);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI0ZjNlNjY2NDhmZDBiOWZmMThhMSIsImlhdCI6MTY2MTg3ODczNywiZXhwIjoxNjY0NDcwNzM3fQ.GGqbGvGdH3KPiBD5TEtkhSxK6yOCC6TjzjiCwSbtvxg";

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:2004/api/groundCategory")
      .then((res) => {
        setLoading(false);
        // console.log(res.data.data);
        setGetCategory(res.data.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/iclaude/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newPlaygroun = {
        token,
        name,
        category,
        description,
        price,
        isAvailable,
      };
      setLoadings(true);
      const saveData = await axios.post(
        `http://localhost:2004/api/playGround`,

        newPlaygroun
      );

      if (saveData) {
        setLoadings(false);
        setName("");
        setDescription("");
        setPrice("");
        setIsAvailable("");
      }
    } catch (err) {
      setLoadings(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Topbar />
      <div className={styles.container}>
        {/* <Sidebar /> */}
        <div className={styles.new}>
          <div className={styles.newContainer}>
            <div className={styles.top}>
              <h1>Add New Playground</h1>
            </div>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <img
                  src={
                    files
                      ? URL.createObjectURL(files[0])
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={styles.right}>
                <form>
                  <div className={styles.formInput}>
                    <label htmlFor="file">
                      Image: <DriveEta className={styles.icon} />
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      value={files}
                      onChange={(e) => setFiles(e.target.value)}
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label>Description</label>
                    <input
                      type="text"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label>Price</label>
                    <input
                      type="text"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className={styles.formInput}>
                    <label>Available</label>
                    <select
                      value={isAvailable}
                      onChange={(e) => setIsAvailable(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                  <div className={styles.selectCategory}>
                    <label>Category</label>
                    <select
                      value={category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option>--select Category--</option>
                      {loading ? (
                        <option selected>loading...</option>
                      ) : (
                        getCategory.map((cat, i) => (
                          <option value={cat._id} key={i}>
                            {cat.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                  <button className="btn" onClick={handleSave}>
                    {loadings ? "Loading..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayground;
