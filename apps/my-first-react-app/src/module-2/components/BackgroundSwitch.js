import React from "react";

function BackgroundSwitch(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.onClick("green")}>Green</button>
      <button onClick={() => props.onClick("red")}>Red</button>
    </React.Fragment>
  );
}

export default BackgroundSwitch;
