import { Publish } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { playgroundData } from "../../dummyData/userData";
import styles from "./playground.module.css";

export default function Playground() {
  const [playground, setPlayground] = useState([]);
  const [playgroundCat, setPlaygroundCat] = useState([]);
  console.log(playgroundCat);
  let { playgroundId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/groundCategory")
      .then((res) => setPlaygroundCat(res.data.data))
      .catch((e) => console.log(e));
    axios
      .get(`http://localhost:2004/api/playGround/${playgroundId}`)
      .then((res) => {
        setPlayground(res.data.data);
      });
  }, [playgroundId]);

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className={styles.product}>
          <div className={styles.productTitleContainer}>
            <h1 className={styles.productTitle}>Playground</h1>
            <Link to="/newPlayground">
              <button className={styles.productAddButton}>Create</button>
            </Link>
          </div>
          <div className={styles.productTop}>
            <div className={styles.productTopLeft}>
              <Chart
                data={playgroundData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className={styles.productTopRight}>
              <div className={styles.productInfoTop}>
                <img
                  src="https://images.pexels.com/photos/186239/pexels-photo-186239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className={styles.productInfoImg}
                />
                <span className={styles.productName}>{playground.name}</span>
              </div>
              <div className={styles.productInfoBottom}>
                <div className={styles.productInfoItem}>
                  <span className={styles.productInfoKey}>sales:</span>
                  <span className={styles.productInfoValue}>5123</span>
                </div>
                <div className={styles.productInfoItem}>
                  <span className={styles.productInfoKey}>Available:</span>
                  <span className={styles.productInfoValue}>yes</span>
                </div>
              </div>
              <div className={styles.productBottom}>
                <form className={styles.productForm}>
                  <div className={styles.productFormLeft}>
                    <label>Playground Name</label>
                    <input type="text" placeholder={playground.name} />
                    <label>Category</label>
                    <select onchange={(e) => setPlaygroundCat(e.target.value)}>
                      <option>--category--</option>
                      {playgroundCat.map((cat, i) => (
                        <option key={i}>{cat.name}</option>
                      ))}
                    </select>
                    <label>Description</label>
                    <input type="text" placeholder={playground.description} />
                    <label>Price</label>
                    <input type="text" placeholder={playground.price} />
                  </div>
                  <div className={styles.productFormRight}>
                    <div className={styles.productUpload}>
                      <img
                        src={playground.photo}
                        alt=""
                        className={styles.productUploadImg}
                      />
                      <label for="file">
                        <Publish />
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                      />
                    </div>
                    <button className={styles.productButton}>Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
