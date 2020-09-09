import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("App renders the timer", () => {
  const { getByText } = render(<App />);
  const timerTitle = getByText(/This is my timer/i);
  expect(timerTitle).toBeInTheDocument();
});
