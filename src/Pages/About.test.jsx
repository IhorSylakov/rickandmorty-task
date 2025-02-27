import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders About page without errors", () => {
  render(<About />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About task");
});
