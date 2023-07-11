import { useContext } from "react";
import ColorSchemeContext from "../contexts/color-scheme/color-scheme-context";

export const useColorScheme = () => {
  const colorSchemeContext = useContext(ColorSchemeContext);
  return colorSchemeContext;
};
