import { Form, useActionData } from "react-router-dom";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
        //Registration Success
      } else {
        //Handle Registration Error Here
      }
    } catch (error) {
      console.log("Error Registering User", error);
    }
    setIsButtonDisabled(false);
    // return redirect("/");
    navigate("/");
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
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
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
