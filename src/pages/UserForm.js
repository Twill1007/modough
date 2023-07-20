// UserForm.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import CheckOutSummary from "../pages/CheckOutSummary";

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
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CheckOutSummary
          key={item.id}
          name={item.title}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        ZIP:
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
      <Link to="/">
        <button>Go back to Main Page</button>
      </Link>
    </form>
  );
};

export default UserForm;
