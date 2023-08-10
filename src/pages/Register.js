import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const formSubmitHandler = (e) => {
    e.preventDefault();

    //   fetch("/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(cartData),
    //   });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} action="/register" method="POST">
        <h3>Create User Account</h3>
        <label>First Name</label>
        <input type="text"></input> <br />
        <label>Last Name</label>
        <input type="text"></input> <br />
        <label>Street Address</label>
        <input type="text"></input>
        <br />
        <label>City</label>
        <input type="text"></input>
        <label>State</label>
        <input type="text"></input>
        <label>Zip Code</label>
        <input type="text"></input> <br />
        <label>Email</label>
        <input type="email"></input> <br />
        <label>Username</label>
        <input type="text"></input> <br />
        <label>Password</label>
        <input type="password"></input> <br />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Register;
