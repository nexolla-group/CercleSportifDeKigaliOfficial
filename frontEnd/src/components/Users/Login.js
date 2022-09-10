import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";

const Login = ({ back1 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hundleSubmit = () => {
    Axios.post("http://localhost:2004/api/v1/auth/login/", {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log("login successfully");
        console.log(response);
        setEmail("");
        setPassword("");
        localStorage.setItem("token", response.data.token);

        toast("Loggen in successful!", {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location = "/Booking";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ left: "450px" }} className="form" id="form2">
      <h3>LOGIN</h3>
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="text"
        placeholder="Email"
        required
        value={email}
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="Password"
        required
        value={password}
      />
      <div class="btn-box">
        <button onClick={back1} type="button">
          Back
        </button>
        <button onClick={hundleSubmit} type="button">
          Login
        </button>
        <div class="forgotpassword">
          <a href=" ">forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
