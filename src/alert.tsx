import { AlertProps, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { alertAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle((props: AlertProps) => {
  const { status } = props;

  const successBase = status === "success" && {
    container: {
      background: "#F3FCF7",
      color: "#0E3E25",
    },
  };

  const warningBase = status === "warning" && {
    container: {
      background: "#FDF8F2",
      color: "#59360D",
    },
  };

  const errorBase = status === "error" && {
    container: {
      background: "#FCF3F3",
      color: "#6C191C",
    },
  };

  return {
    ...successBase,
    ...warningBase,
    ...errorBase,
  };
});

export const alertTheme = defineMultiStyleConfig({ baseStyle });
