// UserForm.js
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as submit it to a server or perform other actions
    console.log(formData);
    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="user-form">
        <label>
          First Name: <br></br>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:<br></br>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address: <br></br>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City: <br></br>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          State: <br></br>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ZIP: <br></br>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email: <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number: <br></br>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <button type="submit">Submit</button>

        <br></br>
        <Link to="/">
          <button>Go back to Main Page</button>
        </Link>
      </form>
    </Fragment>
  );
};

export default UserForm;
