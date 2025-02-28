import React from 'react';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./index";

const menu = [
  { path: "/", title: "Home", isExact: true },
  { path: "/about", title: "About", isExact: false },
  { path: "/contacts", title: "Contacts", isExact: false },
];

test("renders all menu items", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  menu.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});

test("links in Header have correct href", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  menu.forEach((item) => {
    expect(screen.getByText(item.title)).toHaveAttribute("href", item.path);
  });
});

test("active link have class 'active'", () => {
  menu.forEach((item) => {
    const { unmount } = render(
      <MemoryRouter initialEntries={[item.path]}>
        <Header />
      </MemoryRouter>
    );

    const activeLink = screen.getByText(item.title);

    expect(activeLink).toHaveClass("active");

    unmount();
  });
});

test("clicking on a link changes the active route", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );

  const user = userEvent.setup();

  for (const item of menu) {
    const link = screen.getByText(item.title);
    await user.click(link);
    expect(link).toHaveClass("active");
  }
});
