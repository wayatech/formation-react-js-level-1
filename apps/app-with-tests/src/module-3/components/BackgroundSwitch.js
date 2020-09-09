import React from "react";
import PropTypes from "prop-types";

const BackgroundSwitch = ({ onClick }) => (
  <>
    <button type="button" onClick={() => onClick("green")}>
      Green
    </button>
    <button type="button" onClick={() => onClick("red")}>
      Red
    </button>
  </>
);

BackgroundSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackgroundSwitch;
