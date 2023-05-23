import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/themes";

function Theme() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
   
      <ThemeProvider theme={theme}></ThemeProvider>
  
  );
}

export default Theme;
