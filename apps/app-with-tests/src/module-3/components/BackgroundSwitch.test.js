import React from "react";
import renderer from "react-test-renderer";

import BackgroundSwitch from "./BackgroundSwitch";

test("BackgroundSwitch change color to green and red", () => {
  let value;
  const component = renderer.create(
    <BackgroundSwitch onClick={(val) => (value = val)} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the click
  const buttons = component.root.findAllByType("button");
  buttons[0].props.onClick();
  expect(value).toBe("green");

  buttons[1].props.onClick();
  expect(value).toBe("red");
});
