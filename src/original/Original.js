import { useEffect, useState } from "react";

const FIXED_WINDOW_HEIGHT = 3000;

const Original = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBelowHalfPage = window.scrollY > FIXED_WINDOW_HEIGHT / 2;

      setShowGoTop(isBelowHalfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: FIXED_WINDOW_HEIGHT }}>
      {showGoTop && (
        <button style={{ position: "fixed", top: "20px" }}>Go top</button>
      )}
    </div>
  );
};

export default Original;
