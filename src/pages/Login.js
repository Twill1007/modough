import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Please Log In</h2>
      <label>Username</label>
      <input type="text" id="username" placeholder="Username"></input> <br />
      <label>Password</label>
      <input type="password" id="password" placeholder="password"></input>
      <br />
      <button>Login</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Login;
