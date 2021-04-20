import { useEffect, useState } from "react";
import { FIXED_WINDOW_HEIGHT, addBelowHalfPageListener } from "./utils";

const Refactored = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const cleanup = addBelowHalfPageListener(window, setShowGoTop);

    return cleanup;
  }, []);

  return (
    <div style={{ height: FIXED_WINDOW_HEIGHT }}>
      {showGoTop && (
        <button style={{ position: "fixed", top: "20px" }}>Go top</button>
      )}
    </div>
  );
};

export default Refactored;
