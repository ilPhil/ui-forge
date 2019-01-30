import React from 'react';
import PropTypes from 'react-proptypes';

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div>
    <span>{message}</span>
  </div>
);

AlertComponent.propTypes = {
  message: PropTypes.string,
};

export default AlertComponent;