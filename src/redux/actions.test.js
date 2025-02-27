import { putList, loadList, putHero, loadHero } from "./actions";
import { LOAD_LIST, PUT_LIST, LOAD_HERO, PUT_HERO } from "./actions";
import { mockApiResponse, mockHero } from "../mocks/mockServerData";

test("putList creates a correct action", () => {
  expect(putList(mockApiResponse)).toEqual({
    type: PUT_LIST,
    characters: mockApiResponse.results,
    pages: mockApiResponse.info.pages,
    nextPage: mockApiResponse.info.next
  });
});

test("loadList creates a correct action", () => {
  const page = "https://rickandmortyapi.com/api/character?page=1";
  const expectedAction = {
    type: LOAD_LIST,
    payload: { page }
  };

  expect(loadList(page)).toEqual(expectedAction);
});

test("putHero creates a correct action", () => {
  expect(putHero(mockHero)).toEqual({
    type: PUT_HERO,
    hero: mockHero
  });
});

test("loadHero creates a correct action", () => {
  const id = 1;
  const expectedAction = {
    type: LOAD_HERO,
    payload: { id }
  };

  expect(loadHero(id)).toEqual(expectedAction);
});
