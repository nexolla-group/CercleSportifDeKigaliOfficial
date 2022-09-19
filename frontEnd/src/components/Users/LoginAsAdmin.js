import React, { useEffect, useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";

const LoginAsAdmin = ({ back2 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Axios.post("http://localhost:2004/api/auth/login/", {
      email: email,
      password: password,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userRole", res.data.userRole);
        if (res.data.userRole === "admin") {
          toast("Login Successfull", {
            type: "success",
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.location = "/admin";
        } else {
          return;
        }
      })
      .catch((error) => {
        if (error.response.data.errors) {
          toast(error.response.data.errors, {
            type: "Worning",
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log(error);
      });
  };
  return (
    <>
      <div style={{ left: "-450px" }} className="form" id="form3">
        <h3>Admin Pannel</h3>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email"
          required
          value={email}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          required
          value={password}
        />
        <div class="btn-box">
          <button type="button" onClick={back2}>
            Back
          </button>
          <button onClick={handleSubmit} type="submit">
            Login
          </button>
          <div class="forgotpassword">
            <a href=" ">forgot password?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAsAdmin;
