import { Form, useActionData } from "react-router-dom";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import classes from "./AuthForm.module.css";

function AuthForm() {
  // const [isValidEmail, setIsValidEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const data = useActionData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let url = "/register"; //default URL for registration

      if (isLogin) {
        url = "/login";
      }
      setIsButtonDisabled(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;

        if (token) {
          localStorage.setItem("token", token);
        }
        //Registration Success
        navigate("/");
      } else {
        const errorResponseData = await response.json();
        console.log("Login Errors", errorResponseData.loginErrors);

        if (errorResponseData.errors && errorResponseData.errors.email) {
          const errorMessage = errorResponseData.errors.email;
          setError(errorMessage);
        } else if (
          errorResponseData.errors &&
          errorResponseData.errors.emailExists
        ) {
          const errorMessage = "Email already exists"; //Display the appropriate message
          setError(errorMessage);
        } else if (
          errorResponseData.errors &&
          errorResponseData.errors.password
        ) {
          const errorMessage = errorResponseData.errors.password;
          setError(errorMessage); //This is the password validation.
        }
        //I feel like this is where the error is.
        if (
          errorResponseData.loginErrors &&
          errorResponseData.loginErrors.userLogin
        ) {
          const errorMessage = errorResponseData.loginErrors.userLogin;
          setError(errorMessage);
        } else if (
          errorResponseData.loginErrors &&
          errorResponseData.loginErrors.userPassword
        ) {
          const errorMessage = errorResponseData.loginErrors.userPassword;
          setError(errorMessage);
        }
      }
    } catch (error) {}

    setIsButtonDisabled(false);
  };

  return (
    <>
      <Form
        method="post"
        className={classes.form}
        // action="/auth"
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
          {errors.emailExists && (
            <p className={classes.error}>{errors.emailExists.message}</p>
          )}
          {isLogin && errors.loginErrors && (
            <p className={classes.error}>{errors.loginErrors.message}</p>
          )}
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required.</span>}
          {error && <p className={classes.error}>{error}</p>}
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "register" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isButtonDisabled}>Save</button>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </Form>
    </>
  );
}

export default AuthForm;
