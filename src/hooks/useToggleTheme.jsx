import { useEffect } from "react";
import { useState } from "react";

const useToogleTheme = () => {
  const [state, setState] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const changeTheme = () => {
    setState(state === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList = state;
  }, [state]);

  return {
    state,
    changeTheme,
  };
};

export default useToogleTheme;
