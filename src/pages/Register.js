import React from "react";

function Register() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
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
        <button type="submit">Button</button>
      </form>
    </div>
  );
}

export default Register;
