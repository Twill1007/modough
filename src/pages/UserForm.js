import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/actions";

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

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addItemToCart(item));
  };

  const cartItems = (
    <ul>{/* Map over the cart items and display them here */}</ul>
  );

  return (
    <form onSubmit={handleSubmit} className="user-form">
      {/* ... (Rest of the form fields) */}
      <button type="submit">Submit</button>
      <Link to="/">
        <button>Go back to Main Page</button>
      </Link>
    </form>
  );
};

export default UserForm;
