import { setIsBelowHalfPage, FIXED_WINDOW_HEIGHT } from "./utils";

// We only test this method for simplicity, but all methods in utils.js file
// should be tested.
describe("setIsBelowHalfPage(window, callback)", () => {
  it("invokes the callback with `true` when the scroll is below half page", () => {
    const callback = jest.fn();
    const windowObj = { scrollY: FIXED_WINDOW_HEIGHT };

    setIsBelowHalfPage(windowObj, callback);

    expect(callback).toHaveBeenCalledWith(true);
  });

  it("invokes the callback with `false` when the scroll is below half page", () => {
    const callback = jest.fn();
    const windowObj = { scrollY: 0 };

    setIsBelowHalfPage(windowObj, callback);

    expect(callback).toHaveBeenCalledWith(false);
  });
});
