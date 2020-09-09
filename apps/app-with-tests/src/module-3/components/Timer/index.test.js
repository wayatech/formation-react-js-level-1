import React from "react";
import renderer from "react-test-renderer";

import Timer from "./index";

test("Timer display correctly", () => {
  const component = renderer.create(<Timer bgColor="yellow" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
