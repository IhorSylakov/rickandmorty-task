import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { mockHero } from "../../mocks/mockServerData";
import ListItem from "./index";

test("StyledLink applies correct background color based on gender", () => {
  const { rerender } = render(
    <MemoryRouter>
      <ListItem hero={{ ...mockHero, gender: "Male" }} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link")).toHaveStyle("background-color: lightblue");

  rerender(
    <MemoryRouter>
      <ListItem hero={{ ...mockHero, gender: "Female" }} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link")).toHaveStyle("background-color: pink");

  rerender(
    <MemoryRouter>
      <ListItem hero={{ ...mockHero, gender: "Unknown" }} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link")).toHaveStyle("background-color: lightyellow");
});
