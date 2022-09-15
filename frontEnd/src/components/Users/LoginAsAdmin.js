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
        setEmail("");
        setPassword("");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.userRole);
        toast("Logged in successful!", {
          type: "success",
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (res.data.userRole === "admin") {
          window.location = "/admin";
        } else {
          window.location = "/register";
        }
      })
      .catch((error) => {
        toast("Invalid Admin Credentials", {
          type: "Worning",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("invalid credentials", error);
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
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          required
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
