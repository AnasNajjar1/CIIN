import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  blue: {
    50: "#ECF2F8",
    100: "#BDD0E3",
    200: "#8EAECE",
    300: "#5E8CBA",
    400: "#2F6AA5",
    500: "#004890",
    600: "#023D78",
    700: "#063768",
    800: "#042B51",
    900: "#021D37",
  },
  gray: {
    50: "#FAFAFA",
    100: "#F1F1F1",
    200: "#DADADA",
    300: "#C9CAD0",
    400: "#ABACB9",
    500: "#949599",
    600: "#66666F",
    700: "#525058",
    800: "#35323E",
    900: "#1F1E24",
  },
};

const fonts = {
  heading: `Inter`,
  body: `Lato`,
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
  },
});
