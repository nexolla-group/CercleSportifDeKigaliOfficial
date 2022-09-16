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
  const getAdminAuth = async () => {
    const token = await localStorage.getItem("token");
    const role = await localStorage.getItem("userRole");
    const firstname = await localStorage.getItem("firstname");
    const lastname = await localStorage.getItem("lastname");
    const email = await localStorage.getItem("email");

    if (token && role === "admin") {
      setToken(token);
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
        <Topbar />
        {/* <TopBarADmin /> */}
        <MainAdmin token={token} />
        <div className="row">
          <div className="col col-lg-4 col-sm-12 col-xs-12 mt-2">
            <Reviews />
          </div>
          <div className="col col-lg-8 mt-2 col-sm-12 col-xs-12">
            <AddNewPlayGround token={token} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Accordions token={token} />
          </div>
        </div>
      </div>
    </>
  );
}
