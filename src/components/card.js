import PropTypes from "prop-types";
import React from "react";

const Card = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
