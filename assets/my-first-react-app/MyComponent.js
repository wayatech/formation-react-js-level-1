import React from "react";

class MyComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.title}</div>
        <div>{this.props.text}</div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
