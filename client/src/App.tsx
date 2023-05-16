import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./themes";
import {CssBaseline } from "@mui/material";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline>
      
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
