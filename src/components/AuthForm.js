import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    streetAddress: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        //Registration Success
      } else {
        //Handle Registration Error Here
      }
    } catch (error) {
      console.log("Error Registering User", error);
    }
  };

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  return (
    <>
      <Form
        method="post"
        className={classes.form}
        action="/auth"
        onSubmit={handleSubmit}
      >
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {/* this Object method goes through all of the errors on this object. */}
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        {!isLogin && (
          <>
            <p>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="streetAddress">Street Address</label>
              <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="city">City</label>
              <input id="city" type="text" name="city" required />
            </p>
          </>
        )}
        <p>
          <label htmlFor="email">
            Email {!isLogin && `(This will be your username)`}
          </label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>Save</button>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </Form>
    </>
  );
}

export default AuthForm;
