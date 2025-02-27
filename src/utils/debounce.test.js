import { debounce } from "./Debounce";

jest.useFakeTimers();

test("debounce delays function execution", () => {
  const mockFunc = jest.fn();
  const debouncedFunc = debounce(mockFunc, 1000);

  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  expect(mockFunc).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1000);

  expect(mockFunc).toHaveBeenCalledTimes(1);
});

test("debounce resets timer on repeated calls", () => {
  const mockFunc = jest.fn();
  const debouncedFunc = debounce(mockFunc, 500);

  debouncedFunc();
  jest.advanceTimersByTime(200);
  debouncedFunc();
  jest.advanceTimersByTime(200);
  debouncedFunc();

  expect(mockFunc).not.toHaveBeenCalled();

  jest.advanceTimersByTime(500);

  expect(mockFunc).toHaveBeenCalledTimes(1);
});
