import axios from "axios";
import { useState } from "react";
import styles from "./test1.module.css";

const PlaygroundTest = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI0ZjNlNjY2NDhmZDBiOWZmMThhMSIsImlhdCI6MTY2MTg3ODczNywiZXhwIjoxNjY0NDcwNzM3fQ.GGqbGvGdH3KPiBD5TEtkhSxK6yOCC6TjzjiCwSbtvxg";

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  console.log(`${name} \n ${category}\n ${description}\n ${price}`);
  const savePlayground = () => {
    axios.post("http://localhost:2004/api/playGround", {
      name,
      category,
      description,
      price,
    });
  };
  return (
    <div className={styles.right}>
      <h1>Register</h1>
      <form>
        <div className={styles.formInput}>
          <label>name</label>
          <input
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label>category</label>
          <input
            name="category"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label>description</label>
          <input
            name="description"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label>price</label>
          <input
            name="price"
            placeholder="enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" onClick={savePlayground} className={styles.btn}>
          Save
        </button>
      </form>
    </div>
  );
};
export default PlaygroundTest;
