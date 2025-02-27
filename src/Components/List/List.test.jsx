import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import List from "./index";

const mockCharacters = [
  { id: 1, name: "Rick Sanchez" },
  { id: 2, name: "Morty Smith" },
  { id: 3, name: "Summer Smith" },
];

test("renders List component without errors", () => {
  render(<List characters={[]} />);

  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(list).toBeEmptyDOMElement();
});

test("renders list items correctly", () => {
  render(
    <MemoryRouter>
      <List characters={mockCharacters} />
    </MemoryRouter>
  );

  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(mockCharacters.length);

  mockCharacters.forEach((character) => {
    expect(screen.queryByText(character.name)).not.toBeNull();
  });
});
