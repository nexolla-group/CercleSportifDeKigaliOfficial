import React, { useState } from "react";
import Axios from "axios";
import Login from "./Login";
import "./register.css";
import { toast } from "react-toastify";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const next1 = () => {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var progress = document.getElementById("progress");

    form1.style.left = "-450px";
    form2.style.left = "40px";
    form2.style.color = "white";
    form3.style.left = "-450px";
    progress.style.width = "240px";
  };
  const next2 = () => {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var progress = document.getElementById("progress");
    form2.style.left = "-450px";
    form3.style.left = "40px";
    form1.style.left = "-450px";
    progress.style.width = "360px";
  };
  const back1 = () => {
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var progress = document.getElementById("progress");
    form1.style.left = "40px";
    form2.style.left = "450px";
    form3.style.left = "450px";
    progress.style.width = "120px";
  };
  const back2 = () => {
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var progress = document.getElementById("progress");
    form2.style.left = "40px";
    form3.style.left = "-450px";
    progress.style.width = "240px";
  };
  const handleSubmit = () => {
    Axios.post("http://localhost:2004/api/auth/register", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    })
      .then((response) => {
        toast("Signed up successful!", {
          type: "success",
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        localStorage.setItem("token", response.data.token);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        toast("Already have an account!", {
          type: "danger",
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <body className="pic">
      <div className="containerr">
        <div className="form" id="form1">
          <h3 className="fs-6">
            <u>CREATE ACCOUNT AS NEW CLIENT</u>
          </h3>

          <input
            type="text"
            placeholder="First Name"
            required
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            onChange={(event) => {
              setlastName(event.target.value);
            }}
            value={lastName}
          />
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          {/* <input type="password" placeholder="Confirm password" required /> */}
          <div class="btn-box">
            <button onClick={handleSubmit} type="button">
              Sign Up
            </button>
          </div>
        </div>
        <Login back1={back1} />
        <div style={{ left: "-450px" }} className="form" id="form3">
          <h3>Admin Pannel</h3>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div class="btn-box">
            <button type="submit">Login</button>
            <button type="button" onClick={back2}>
              Back
            </button>
          </div>
        </div>

        <div class="step-row">
          <div id="progress"></div>
          <div class="step-col" onClick={back1}>
            <small>Signup</small>
          </div>
          <div onClick={next1} class="step-col">
            <small>Login</small>
          </div>
          <div onClick={next2} class="step-col">
            <small>Admin</small>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Register;
