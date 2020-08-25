import React from "react";

import Timer from "./components/Timer";
import Title from "./components/Title";
import BackgroundSwitch from "./components/BackgroundSwitch";

class Module3 extends React.Component {
  state = { color: "white" };

  render() {
    return (
      <React.Fragment>
        <Title title="This is my timer" />
        <p>
          <BackgroundSwitch
            onClick={(color) => {
              this.setState({
                color: color,
              });
            }}
          />
        </p>
        <p>
          <Timer bgColor={this.state.color} />
        </p>
      </React.Fragment>
    );
  }
}

export default Module3;
