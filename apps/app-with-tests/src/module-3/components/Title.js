import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => <p style={{ fontWeight: "bold" }}>{title}</p>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
