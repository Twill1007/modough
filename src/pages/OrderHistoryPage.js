import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TempNavBar from "../components/Layout/TempNavBar";
import classes from "./OrderHistoryPage.module.css";
import ErrorModal from "../components/UI/ErrorModal";

function OrderHistory() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
