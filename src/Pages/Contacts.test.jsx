import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from "./Contacts";

test("renders Contacts page without errors", () => {
  render(<Contacts />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("You can get in touch with me:");
});
