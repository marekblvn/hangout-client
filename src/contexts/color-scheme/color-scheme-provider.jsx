import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import ColorSchemeContext from "./color-scheme-context";

const ColorSchemeProvider = ({ children }) => {
  const userPrefersDarkScheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [scheme, setScheme] = useState("light");
  useEffect(() => {
    if (userPrefersDarkScheme) {
      setScheme("dark");
    }
  }, []);
  const toggleColorScheme = () => {
    if (scheme === "light") {
      setScheme("dark");
    } else {
      setScheme("light");
    }
  };
  return (
    <ColorSchemeContext.Provider value={{ scheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
