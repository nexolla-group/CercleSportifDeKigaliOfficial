import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBarADmin from "./TopBarADmin";
import MainAdmin from "./MainAdmin";
import Reviews from "./Reviews";
import AddNewPlayGround from "./AddNewPlayground";
import Topbar from "../../components/topbar/Topbar";
import Accordions from "./Accordions";

export default function Index() {
  const dropDown = () => {
    let navigation = document.querySelector(".navigation");

    navigation.classList.toggle("active");
  };

  // const adminToken = localStorage.getItem("token");
  const [token, setToken] = useState(null);
  const [role, setRole] = useState();
  const getAdminAuth = async () => {
    const token = await localStorage.getItem("token");
    const role = await localStorage.getItem("userRole");
    const firstname = await localStorage.getItem("firstname");
    const lastname = await localStorage.getItem("lastname");
    const email = await localStorage.getItem("email");

    if (token && role === "admin") {
      setToken(token);
      setRole(role);
    } else {
      window.location = "register";
    }
  };
  useEffect(() => {
    getAdminAuth();
  }, [token]);
  return (
    <>
      <div
        style={{ padding: "2rem", backgroundColor: "whitesmoke" }}
        className="container-fluid"
      >
        <Topbar token={token} role={role} />
        {/* <TopBarADmin /> */}
        <MainAdmin token={token} />
        <div className="row mt-3">
          <div className="col">
            <Accordions token={token} />
          </div>
        </div>
      </div>
    </>
  );
}
