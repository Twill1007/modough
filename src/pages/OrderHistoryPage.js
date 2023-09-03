import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TempNavBar from "../components/Layout/TempNavBar";
import classes from "./OrderHistoryPage.module.css";
import ErrorModal from "../components/UI/ErrorModal";

function OrderHistory() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderHistoryItems, setOrderHistoryItems] = useState("");
  const navigate = useNavigate();

  fetch("/orderHistory")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network  response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      //This is where I will handle and process the data from the backend.
      setOrderHistoryItems(data);
    })
    .catch((error) => {
      console.error("There was a problem with teh fetch operation:", error);
    });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const redirectToLogin = () => {
    navigate("/auth?mode=login");
  };

  return (
    <Fragment>
      <TempNavBar />
      {showModal && (
        <ErrorModal
          message="Please login to see the content on this page."
          onRedirect={redirectToLogin}
        />
      )}
      {isLoggedIn && (
        <div>
          <h1 className={classes.header}>List of previous orders</h1>
          {/* Render order history items */}
          <div className={classes.listItems}>
            {orderHistoryItems.map((item) => (
              <div key={item._id}>{/* Render each item here */}</div>
            ))}
          </div>
          <div className={classes.listItems}>List of Dates</div>
          <div className={classes.flexContainer}>
            <div className={classes.contentA}>Content A</div>
            <div className={classes.contentB}>content B</div>
            <div className={classes.contentC}>content B</div>
            <div className={classes.contentD}>content B</div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default OrderHistory;
