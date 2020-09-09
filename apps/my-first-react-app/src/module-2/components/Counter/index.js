import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div style={{ backgroundColor: this.props.bgColor }}>
        <p>
          <button
            onClick={() => {
              this.setState((state) => ({
                count: state.count + 1,
              }));
            }}
          >
            Increment
          </button>
        </p>
        <p>Counter : {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
