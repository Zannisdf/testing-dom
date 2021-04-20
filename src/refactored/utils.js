// This is here only for demonstration purposes and should be moved to
// a constants.js file
export const FIXED_WINDOW_HEIGHT = 3000;

// Let the consumer pass the window object so we can use a mock in our
// test environment. This strategy can be applied to any dom element.
export const setIsBelowHalfPage = (windowObj, callback) => {
  const isBelowHalfPage = windowObj.scrollY > FIXED_WINDOW_HEIGHT / 2;

  callback(isBelowHalfPage);
};

export const addBelowHalfPageListener = (windowObj, callback) => {
  const handleScroll = () => setIsBelowHalfPage(windowObj, callback);

  windowObj.addEventListener("scroll", handleScroll);

  return () => windowObj.removeEventListener("scroll", handleScroll);
};
