import axois from "axios";
import styles from "./productList.module.css";
// import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductList() {
  const [playground, setPlayground] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI0ZjNlNjY2NDhmZDBiOWZmMThhMSIsImlhdCI6MTY2MTg3ODczNywiZXhwIjoxNjY0NDcwNzM3fQ.GGqbGvGdH3KPiBD5TEtkhSxK6yOCC6TjzjiCwSbtvxg";

  useEffect(() => {
    axios
      .get("http://localhost:2004/api/playGround")
      .then((res) => {
        setPlayground(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:2004/api/playGround/${id}?&&token=${token}`
      );
      setPlayground(playground.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      field: "Playground",
      headerName: "Playgrounds",
      width: 180,
      renderCell: (params) => {
        return (
          <div className={styles.productListUser}>
            <img className={styles.productListImg} src={params.row.photo} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return <>{params.row.category.name}</>;
      },
    },
    { field: "description", headerName: "Description", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "isAvailable",
      headerName: "Available",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/playground/" + params.row._id}>
              <button className={styles.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className={styles.productList}>
          <Link to="/newPlayground" className={styles.link}>
            Create
          </Link>
          {/* <DataGrid
            rows={playground}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(row) => row._id}
          /> */}
        </div>
      </div>
    </div>
  );
}
