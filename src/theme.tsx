import { extendTheme } from "@chakra-ui/react";

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
};

export const theme = extendTheme({ colors });

