import { mockFetch } from "./mockServerData";

test("mockFetch returns mocked response with json()", async () => {
  const mockData = { test: "success" };
  global.fetch = mockFetch(mockData);

  const response = await fetch("https://example.com");
  expect(response.ok).toBe(true);
  expect(response.status).toBe(200);

  const json = await response.json();
  expect(json).toEqual(mockData);
});

test("mockFetch returns error response", async () => {
  global.fetch = mockFetch({}, true);

  const response = await fetch("https://example.com");
  expect(response.ok).toBe(false);
  expect(response.status).toBe(500);
});
