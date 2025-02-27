import { testSaga } from "redux-saga-test-plan";
import { workerLoadList, workerLoadHero } from "./sagas";
import { putList, putHero } from "./actions";
import { fetchHeroesList, fetchHeroInfo } from "./sagas";
import { mockApiResponse, mockApiErrorResponse, mockHero, mockFetch, mockConsoleError } from "../mocks/mockServerData";

mockConsoleError();

global.fetch = mockFetch(mockApiResponse);

test("workerLoadList Saga - success", () => {
  testSaga(workerLoadList, { payload: { page: "https://rickandmortyapi.com/api/character?page=1" } })
    .next()
    .call(fetchHeroesList, "https://rickandmortyapi.com/api/character?page=1")
    .next(mockApiResponse)
    .put(putList(mockApiResponse))
    .next()
    .isDone();
});

test("workerLoadList Saga - handles API failure", () => {
  testSaga(workerLoadList, { payload: { page: "invalid-url" } })
    .next()
    .call(fetchHeroesList, "invalid-url")
    .throw(new Error("Network Error"))
    .next()
    .isDone();
});

test("fetchHeroesList returns data on success", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ id: 1, name: "Rick Sanchez" }],
          info: { pages: 2, next: "https://rickandmortyapi.com/api/character?page=2" }
        }),
    })
  );

  const data = await fetchHeroesList("https://rickandmortyapi.com/api/character?page=1");
  expect(data.results).toHaveLength(1);
  expect(data.info.pages).toBe(2);
});

test("fetchHeroesList returns fallback data on HTTP failure", async () => {
  global.fetch = mockFetch(mockApiErrorResponse, true);

  const data = await fetchHeroesList("https://rickandmortyapi.com/api/character?page=1");
  expect(data).toEqual(mockApiErrorResponse);
});

test("fetchHeroesList returns fallback data on network failure", async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error("Network Error")));

  const data = await fetchHeroesList("https://rickandmortyapi.com/api/character?page=1");
  expect(data).toEqual({ results: [], info: { pages: 0, next: null } });
});

test("workerLoadHero Saga - success", () => {
  testSaga(workerLoadHero, { payload: { id: 1 } })
    .next()
    .call(fetchHeroInfo, 1)
    .next(mockHero)
    .put(putHero(mockHero))
    .next()
    .isDone();
});

test("workerLoadHero Saga - handles API failure", () => {
  testSaga(workerLoadHero, { payload: { id: 9999 } })
    .next()
    .call(fetchHeroInfo, 9999)
    .throw(new Error("Character not found"))
    .next()
    .isDone();
});

global.fetch = jest.fn();

test("fetchHeroInfo returns hero data on success", async () => {
  const mockHero = { id: 1, name: "Rick Sanchez", status: "Alive", species: "Human" };
  (fetch).mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockHero),
  });

  const result = await fetchHeroInfo(1);

  expect(result).toEqual(mockHero);
});

test("fetchHeroInfo handles error and returns fallback data", async () => {
  (fetch).mockResolvedValue({
    ok: false,
    status: 500,
  });

  const result = await fetchHeroInfo(1);

  expect(result).toEqual({
    id: 1,
    name: "Unknown character",
    status: "Unknown",
    species: "Unknown",
  });
});

