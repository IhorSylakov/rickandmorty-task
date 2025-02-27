import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import store from "../redux/store";
import { mockHero } from "../mocks/mockServerData";
import { loadHero, putHero } from "../redux/actions";
import Character from "./Character";

test("renders Character page with real store", async () => {
  store.dispatch(putHero(mockHero));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/character/1"]}>
        <Routes>
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  expect(await screen.findByText(mockHero.name)).toBeInTheDocument();
  expect(await screen.findByText(mockHero.status)).toBeInTheDocument();
  expect(await screen.findByText(mockHero.gender)).toBeInTheDocument();
  expect(await screen.findByText(mockHero.species)).toBeInTheDocument();
  expect(await screen.findByRole("img")).toHaveAttribute("src", mockHero.image);
});

test("dispatches loadHero action on mount with real store", () => {
  jest.spyOn(store, "dispatch");

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/character/1"]}>
        <Routes>
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  expect(store.dispatch).toHaveBeenCalledWith(loadHero(1));
});
