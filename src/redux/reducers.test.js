import reducer from "./reducers";
import { PUT_HERO, PUT_LIST, LOAD_HERO } from "./actions";
import { initialState, mockCharacters, mockHero } from "../mocks/mockServerData";

test("should return initial state", () => {
  expect(reducer(undefined, { type: "@@INIT" })).toEqual({ data: initialState });
});

test("should handle PUT_LIST", () => {
  expect(
    reducer({ data: initialState }, { type: PUT_LIST, characters: mockCharacters, pages: 2, nextPage: "page2" })
  ).toEqual({
    data: {
      ...initialState,
      characters: mockCharacters,
      pages: 2,
      nextPage: "page2"
    }
  });
});

test("should handle LOAD_HERO", () => {
  const action = { type: LOAD_HERO };

  const expectedState = {
    ...initialState,
    hero: {},
  };

  expect(reducer({ data: initialState }, action)).toEqual({ data: expectedState });
});

test("should handle PUT_HERO", () => {
  expect(reducer({ data: initialState }, { type: PUT_HERO, hero: mockHero })).toEqual({
    data: { ...initialState, hero: mockHero }
  });
});
