import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    _focus: {
      boxShadow: "none",
    },
    cursor: "pointer",
  },
  sizes: {
    sm: {
      padding: "0px 12px",
      borderRadius: "8px",
      height: "42px",
      fontSize: "14px",
      lineHeight: "20px",
    },
    md: {
      padding: "0px 16px",
      borderRadius: "6px",
      height: "58px",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      border: "none",
    },
    outline: {
      color: "blue.700",
      bg: "white",
      border: "1px solid",
      borderColor: "blue.500",
      _hover: { bg: "white" },
    },
    outlineSolid: {
      color: "blue.700",
      bg: "white",
      border: "2px solid",
      borderColor: "blue.500",
      _hover: { bg: "white" },
    },
  },
};
