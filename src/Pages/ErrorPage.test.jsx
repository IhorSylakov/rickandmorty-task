import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

test("renders ErrorPage page without errors", () => {
  render(<ErrorPage />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404");
});
