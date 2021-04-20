import { render } from "@testing-library/react";
import * as utils from "./utils";
import Refactored from "./Refactored";

jest.mock("./utils", () => ({
  __esModule: true,
  FIXED_WINDOW_HEIGHT: 3000,
  setIsBelowHalfPage: jest.fn(),
  addBelowHalfPageListener: jest.fn(() => jest.fn()),
}));

describe("<Refactored />", () => {
  it("does not render `go top` button by default", () => {
    const { getByText } = render(<Refactored />);

    expect(() => getByText("Go top")).toThrow();
  });

  it("renders `go top` button when the scroll is below half page", () => {
    // We already tested our dom functions, here we only test its effects by
    // mocking their implementation.
    utils.addBelowHalfPageListener.mockImplementation(
      (_windowObj, callback) => {
        callback(true);
        return jest.fn();
      }
    );
    const { getByText } = render(<Refactored />);

    expect(getByText("Go top")).toBeInTheDocument();
  });
});
