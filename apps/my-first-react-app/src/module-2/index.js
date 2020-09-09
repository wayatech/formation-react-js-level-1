import React from "react";

import Counter from "./components/Counter";
import Title from "./components/Title";
import BackgroundSwitch from "./components/BackgroundSwitch";

class Module2 extends React.Component {
  state = { color: "white" };

  render() {
    return (
      <React.Fragment>
        <Title title="This is my counter" />
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
          <Counter bgColor={this.state.color} />
        </p>
      </React.Fragment>
    );
  }
}

export default Module2;
