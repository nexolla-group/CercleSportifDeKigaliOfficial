// import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./userList.module.css";
export default function UserList() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGI0ZjNlNjY2NDhmZDBiOWZmMThhMSIsImlhdCI6MTY2MTg3ODczNywiZXhwIjoxNjY0NDcwNzM3fQ.GGqbGvGdH3KPiBD5TEtkhSxK6yOCC6TjzjiCwSbtvxg";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/users?token=" + token)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={styles.userListUser}>
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "firstname", headerName: "Firstname", width: 150 },
    { field: "lastname", headerName: "Lastname", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "createdAT",
      headerName: "Created At",
      width: 120,
    },
  ];

  return (
    <>
      {/* <Topbar /> */}
      <div className="container">
        <Sidebar />
        <div className={styles.userList}>
          <Link to="/newUser">
            <h1>Add User</h1>
          </Link>
          {/* <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(row) => row._id}
          /> */}
        </div>
      </div>
    </>
  );
}
