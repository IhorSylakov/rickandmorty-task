import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

test("renders App without errors", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/A list of Rick and Morty's characters/i)).toBeInTheDocument();
});

test("navigates to About page on '/about'", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/About task/i)).toBeInTheDocument();
});

test("renders ErrorPage for unknown routes", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/random-page"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
