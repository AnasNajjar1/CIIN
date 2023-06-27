import { Flex, Text } from "@chakra-ui/react";
import {
  firstPartHeadingTextStyle,
  secondPartHeadingTextStyle,
} from "./styles";

type BreadcrumbProps = {
  title: string;
};

export const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <Flex align="center" display={title === "" ? "none" : "flex"}>
      <Text sx={firstPartHeadingTextStyle}>
        {title === "Edit publications" ? "Home / Publications /" : "Home /"}
      </Text>
      <Text sx={secondPartHeadingTextStyle} pl={1}>
        {title}
      </Text>
    </Flex>
  );
};

export default Breadcrumb;
