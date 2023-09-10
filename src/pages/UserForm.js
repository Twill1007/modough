// UserForm.js
import React, { useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../store/cart-context";

import "./UserForm.css";

const UserForm = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  const checkoutHandler = () => {
    // Prevent multiple clicks during checkout process
    if (!isCheckoutLoading) {
      setIsCheckoutLoading(true);
      setIsCheckoutCompleted(true);

      const cartData = cartCtx.items.map((item) => ({
        userId: localStorage.getItem("token"),
        title: item.title,
        price: item.price,
        amount: item.amount,
        totalAmount: totalAmount,
      }));

      console.log(cartData);
      // Send cart data to the server
      fetch("/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Cart data insertion failed");
          }
          navigate("/");
          cartCtx.clearCart();
        })
        .catch((error) => {
          console.error("Error inserting cart data:", error);
          // Handle the error, e.g., show an error message to the user
        })
        .finally(() => {
          setIsCheckoutLoading(false);
        });
    }
  };

  // useEffect(() => {
  //   setIsCheckoutCompleted(false);
  // }, [props.onClose]);

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

    // Reset the form
    setFormData({
      phoneNumber: "",
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="user-form">
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

        <br></br>
        <Link to="/">
          <button>Go back to Main Page</button>
        </Link>
        {hasItems && (
          <Link to="/summary">
            <button onClick={checkoutHandler} disabled={isCheckoutLoading}>
              {isCheckoutLoading ? "Checking out..." : "Submit Order"}
            </button>
            {isCheckoutCompleted && <p>Checkout successful!</p>}
          </Link>
        )}
      </form>
    </Fragment>
  );
};

export default UserForm;
