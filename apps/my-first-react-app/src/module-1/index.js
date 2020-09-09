import React from "react";

import Counter from "./components/Counter";

function Module1() {
  return (
    <React.Fragment>
      <p>This is my counter</p>
      <p>
        <Counter />
      </p>
    </React.Fragment>
  );
}

export default Module1;
