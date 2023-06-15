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
      padding: { base: "0px 8px", md: "0px 10px", lg: "0px 12px" },
      borderRadius: "8px",
      height: { base: "24px", md: "30px", lg: "42px" },
      fontSize: { base: "10px", md: "14px" },
      lineHeight: { base: "16px", md: "20px" },
    },
    md: {
      padding: { base: "0px 10px", md: "0px 12px", lg: "0px 16px" },
      borderRadius: "6px",
      height: { base: "36px", md: "58px" },
      fontSize: { base: "12px", md: "16px" },
      lineHeight: { base: "18px", md: "24px" },
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
