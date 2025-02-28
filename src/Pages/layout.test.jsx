import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./layout";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div data-testid="outlet">Mocked Outlet</div>,
}));

test("renders Layout with Header and Outlet", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  expect(screen.getByRole("banner")).toBeInTheDocument();
  
  expect(screen.getByRole("main")).toBeInTheDocument();

  expect(screen.getByTestId("outlet")).toHaveTextContent("Mocked Outlet");
});
