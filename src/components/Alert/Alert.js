import React from "react";
import PropTypes from "react-proptypes";
import style from "./style.css";

const AlertComponent = ({ message = "this is an alert" }) => (
  <div className="alert">
    <span>{message}</span>
  </div>
);

AlertComponent.propTypes = {
  message: PropTypes.string,
};

export default AlertComponent;
