import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
import styles from "./navbar.module.scss";
const Navbar = () => {
  var navBar= document.getElementById("navBar");
  var menu= document.getElementById("menu");
  
  window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
      navBar.classList.add("sticky");
    }else{
      navBar.classList.remove("sticky");
    }
  }
  return (
    <>
      <nav id="navBar" className="navbar navbar-expand-lg">
        <input type="checkbox" id="check" />
        <label
          style={{
            color: "#fff",
            fontSize: "35px",
            lineHeight: "80px",
            padding: "0 100px",
            fontWeight: "bold"
          }}
        >
          CercleSportif
        </label>
        <ul id="menu">
          <div className={styles.navLink}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Login</li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
