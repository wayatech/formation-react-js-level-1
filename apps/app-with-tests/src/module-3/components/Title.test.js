import React from "react";
import renderer from "react-test-renderer";

import Title from "./Title";

test("Title display is consistent", () => {
  const component = renderer.create(<Title title="This is my title" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
