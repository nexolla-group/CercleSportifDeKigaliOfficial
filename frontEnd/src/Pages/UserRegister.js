import React from "react";
import BlackFooter from "../components/Footer/BlackFooter";
import Header from "../components/Header/Header";
import Register from "../components/Users/Register";

const UserRegister = () => {
  return (
    <>
      <Header />
      <div>
        <Register />
      </div>
      <div
        style={{
          bottom: 0,
        }}
        className="footerContent"
      >
        <BlackFooter />
      </div>
    </>
  );
};

export default UserRegister;
