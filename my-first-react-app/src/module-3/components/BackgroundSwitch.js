import React from "react";

class BackgroundSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.onClick("green")}>Green</button>
        <button onClick={() => this.props.onClick("red")}>Red</button>
      </React.Fragment>
    );
  }
}

export default BackgroundSwitch;
