import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import Home from "./Home";
import { loadList } from "../redux/actions";
import { mockCharacters } from "../mocks/mockServerData";

jest.mock("../Components/List", () => (props) => <div data-testid="list">{JSON.stringify(props.characters)}</div>);

jest.useFakeTimers();

test("renders Home page without errors", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/A list of Rick and Morty's characters/i)).toBeInTheDocument();
});

test("dispatches loadList action on mount", () => {
  const dispatchSpy = jest.spyOn(store, "dispatch");

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  expect(dispatchSpy).toHaveBeenCalledWith(loadList("https://rickandmortyapi.com/api/character?page=1"));
});

test("dispatches loadList action on scroll", async () => {
  const dispatchSpy = jest.spyOn(store, "dispatch");

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  window.innerHeight = 800;
  document.documentElement.scrollTop = 1000;

  jest.spyOn(document.documentElement, "offsetHeight", "get").mockReturnValue(1800);

  window.dispatchEvent(new Event("scroll"));
  jest.advanceTimersByTime(200);

  expect(dispatchSpy).toHaveBeenCalledWith(loadList("https://rickandmortyapi.com/api/character?page=1"));
});

test("renders List component with characters", () => {
  store.getState().data.characters = mockCharacters;

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId("list")).toHaveTextContent(JSON.stringify(mockCharacters));
});
