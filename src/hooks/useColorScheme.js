import { useContext } from "react";
import ColorSchemeContext from "../contexts/color-scheme/color-scheme-context";

const useColorScheme = () => {
  return useContext(ColorSchemeContext);
};

export default useColorScheme;