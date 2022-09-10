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
          <div className="col col-lg-5 col-sm-12 col-xs-12 mt-2">
            <Reviews />
          </div>
          <div className="col col-lg-7 col-sm-12 col-xs-12">
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
