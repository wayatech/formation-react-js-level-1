import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
