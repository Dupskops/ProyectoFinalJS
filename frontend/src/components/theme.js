import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          1000: "#1f2a37",
        },
        primary: {
          100: "#1f2a37", // Darker shades for primary background
          200: "#1e2938",
          300: "#1d2836",
          400: "#1a2634",
          500: "#1c3948", // Darker shade for primary
          600: "#2d485d",
          700: "#3f6072",
          800: "#4f7386",
          900: "#60839a",
        },
        greenAccent: {
          100: "#1d3529", // Darker green accents for dark mode
          200: "#2b4b3d",
          300: "#3b6150",
          400: "#4a785f",
          500: "#5d9870", // More muted green accent
          600: "#72b482",
          700: "#8acb97",
          800: "#a3e4ab",
          900: "#bcfdbd",
        },
      }
    : {
        grey: {
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#cfcfcf",
          400: "#bfbfbf",
          500: "#a3a3a3",
          600: "#858585",
          700: "#666666",
          800: "#474747",
          900: "#292929",
          1000: "#f0f0f0",
        },
        primary: {
          100: "#e0f4f9", // Lighter shades for primary background
          200: "#c1e9f3",
          300: "#a3ddec",
          400: "#84d1e5",
          500: "#66c4dd", // Brighter primary color
          600: "#53a1b4",
          700: "#407f8a",
          800: "#2d5c61",
          900: "#1a3a38",
        },
        greenAccent: {
          100: "#f0f8f4", // Lighter green accents for light mode
          200: "#dff1e9",
          300: "#cfebde",
          400: "#bfe3d2",
          500: "#afdbc7", // Bright green accent
          600: "#8fc7ab",
          700: "#70b28e",
          800: "#509d72",
          900: "#308755",
        },
      }),
});


// theme settings with new colors
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500], // Color principal en modo oscuro
            },
            secondary: {
              main: colors.greenAccent[500], // Color acento en modo oscuro
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[100], // Fondo en modo oscuro
            },
          }
        : {
            primary: {
              main: colors.primary[500], // Color principal en modo claro
            },
            secondary: {
              main: colors.greenAccent[500], // Color acento en modo claro
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[100], // Fondo en modo claro
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


