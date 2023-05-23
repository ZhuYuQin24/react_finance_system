export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  red: {
    100: "#ffe0dc",
    200: "#ffc1b9",
    300: "#ffa296",
    400: "#ff8373",
    500: "#ff6450",
    600: "#cc5040",
    700: "#993c30",
    800: "#662820",
    900: "#331410",
  },
  blue: {
    100: "#d9eafa",
    200: "#b3d4f5",
    300: "#8ebfef",
    400: "#68a9ea",
    500: "#4294e5",
    600: "#3576b7",
    700: "#285989",
    800: "#1a3b5c",
    900: "#0d1e2e",
  },
  green: {
    100: "#ddf2de",
    200: "#bbe4be",
    300: "#9ad79d",
    400: "#78c97d",
    500: "#56bc5c",
    600: "#45964a",
    700: "#347137",
    800: "#224b25",
    900: "#112612",
  },
  orange: {
    100: "#ffeadb",
    200: "#fed4b7",
    300: "#febf92",
    400: "#fda96e",
    500: "#fd944a",
    600: "#ca763b",
    700: "#98592c",
    800: "#653b1e",
    900: "#331e0f",
  },
  primary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#12efc8",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// UI主题设置
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.blue[500],
      light: tokens.blue[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.green[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    blue: {
      ...tokens.blue,
      main: tokens.blue[500],
    },
    green: {
      ...tokens.green,
      main: tokens.green[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
