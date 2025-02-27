export const initialState = {
  characters: [],
  pages: null,
  hero: {},
  nextPage: "https://rickandmortyapi.com/api/character?page=1",
};

export const mockCharacters = [
  { id: 1, name: "Rick Sanchez" },
  { id: 2, name: "Morty Smith" },
];

export const mockHero = { id: 1, name: "Rick Sanchez", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", status: "Alive", gender: "Male", species: "Human" };

export const mockApiResponse = {
  results: mockCharacters,
  info: { pages: 2, next: "https://rickandmortyapi.com/api/character?page=2" },
};

export const mockApiErrorResponse = {
  results: [],
  info: { pages: 0, next: null },
};

export const mockFetch = (data, isError = false) => {
  return jest.fn(() =>
    Promise.resolve({
      ok: !isError,
      status: isError ? 500 : 200,
      json: () => Promise.resolve(data),
    })
  );
};

export const mockConsoleError = () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
};
