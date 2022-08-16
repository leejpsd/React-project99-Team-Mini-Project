import React from "react";
import "./css/login.css";

const Login = () => {
  return (
    <div class="login-box">
      <h2>𝐋𝐨𝐠𝐢𝐧</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
        <a className="btn" href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Signup
        </a>
      </form>
    </div>
  );
};

export default Login;
