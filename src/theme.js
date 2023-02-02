import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
          100: "#fafcfc",
          200: "#f6f9fa",
          300: "#f1f7f7",
          400: "#edf4f5",
          500: "#e8f1f2",
          600: "#bac1c2",
          700: "#8b9191",
          800: "#5d6061",
          900: "#2e3030"
},
      green: {
          100: "#f0fcf0",
          200: "#e1f9e0",
          300: "#d1f5d1",
          400: "#c2f2c1",
          500: "#b3efb2",
          600: "#8fbf8e",
          700: "#6b8f6b",
          800: "#486047",
          900: "#243024"
},
      greenAccent: {
          100: "#e4ece5",
          200: "#cad8cb",
          300: "#afc5b2",
          400: "#95b198",
          500: "#7a9e7e",
          600: "#627e65",
          700: "#495f4c",
          800: "#313f32",
          900: "#182019"
},
      indigo: {
          100: "#d6dbd8",
          200: "#adb6b1",
          300: "#83928a",
          400: "#5a6d63",
          500: "#31493c",
          600: "#273a30",
          700: "#1d2c24",
          800: "#141d18",
          900: "#0a0f0c"
},
      primary: {
          100: "#ccd1d3",
          200: "#99a3a7",
          300: "#66767b",
          400: "#33484f",
          500: "#001a23",
          600: "#00151c",
          700: "#001015",
          800: "#000a0e",
          900: "#000507"
},
      
    }
  : {
    grey: {
      100: "#2e3030", 
      200: "#5d6061",
      300: "#8b9191",
      400: "#bac1c2",
      500: "#e8f1f2",
      600: "#edf4f5",
      700: "#f1f7f7",
      800: "#f6f9fa",
      900: "#fafcfc"

},
  green: {
      100: "#243024",
      200: "#486047",
      300: "#6b8f6b",
      400: "#8fbf8e",
      500: "#b3efb2",
      600: "#c2f2c1",
      700: "#d1f5d1",
      800: "#e1f9e0",
      900: "#f0fcf0",
},
  greenAccent: {
      100: "#182019",
      200: "#313f32",
      300: "#495f4c",
      400: "#627e65",
      500: "#7a9e7e",
      600: "#95b198",
      700: "#afc5b2",
      800: "#cad8cb",
      900: "#e4ece5",
},
  indigo: {
      100: "#0a0f0c",
      200: "#141d18",
      300: "#1d2c24",
      400: "#273a30",
      500: "#31493c",
      600: "#5a6d63",
      700: "#83928a",
      800: "#adb6b1",
      900: "#d6dbd8",
},
  primary: {
      100: "#000507",
      200: "#000a0e",
      300: "#001015",
      400: "#00151c",
      500: "#001a23",
      600: "#33484f",
      700: "#66767b",
      800: "#99a3a7",
      900: "#ccd1d3",
},
  
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};