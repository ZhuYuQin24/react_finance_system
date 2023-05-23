import { Box, CssBaseline } from "@mui/material";
//自定义组件
import Navbar from "@/scenes/navbar";
import Content from "@/scenes/content";

//主题
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/themes";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box width="100%" height="100%" padding="0.5rem 1rem">
            {/* 头部导航栏 */}
            <Navbar />
            {/* 主内容 */}
            <Content />
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
