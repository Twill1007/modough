import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
        onSubmit={handleSubmit(onSubmit)}
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
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span>This field is required.</span>}
            </p>
            <p>
              <label htmlFor="streetAddress">Street Address</label>
              <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                {...register("streetAddress", { required: true })}
              />
              {errors.streetAddress && <span>This field is required.</span>}
            </p>
            <p>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                {...register("city", { required: true })}
              />
              {errors.city && <span>This field is required.</span>}
            </p>
          </>
        )}
        <p>
          <label htmlFor="email">
            Email {!isLogin && `(This will be your username)`}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required.</span>}
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required.</span>}
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
