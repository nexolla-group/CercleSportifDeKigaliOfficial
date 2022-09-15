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
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const getAdminAuthentication = async () => {
    const token = await localStorage.getItem("token");
    const role = await localStorage.getItem("userRole");
    setUserRole(role);
    console.log("Admin token:", token);
    console.log("User role:", role);
    if (userRole === "admin") {
      setToken(token);

      window.location = "/admin";
    } else {
      window.location = "/register";
    }
  };
  useEffect(() => {
    getAdminAuthentication();
  }, [token]);

  return (
    <>
      <div
        style={{ padding: "2rem", backgroundColor: "whitesmoke" }}
        className="container-fluid"
      >
        <Topbar />
        {/* <TopBarADmin /> */}
        <MainAdmin />
        <div className="row">
          <div className="col col-lg-4 col-sm-12 col-xs-12 mt-2">
            <Reviews />
          </div>
          <div className="col col-lg-8 mt-2 col-sm-12 col-xs-12">
            <AddNewPlayGround />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Accordions />
          </div>
        </div>
      </div>
    </>
  );
}
