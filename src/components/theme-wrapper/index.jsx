import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
import getColorScheme from "../../utils/getColorScheme";

const ThemeWrapper = ({ children }) => {
  const { scheme } = useColorScheme();
  const theme = createTheme(getColorScheme(scheme));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
