import { Flex, Image, Text } from "@chakra-ui/react";
import {
  posterFirstTextStyle,
  posterSecondTextStyle,
  posterStyle,
} from "../../pages/Publications/styles";

type PublicationProps = {
  image: any;
  imageAlternative: string;
  title: string;
  subTitle: string;
};

const Publication = ({
  image,
  imageAlternative,
  title,
  subTitle,
}: PublicationProps) => {
  return (
    <Flex align="center" direction="column">
      <Image sx={posterStyle} src={image} alt={imageAlternative} />
      <Text sx={posterFirstTextStyle} align="center" pt={4}>
        {title}
      </Text>
      <Text sx={posterSecondTextStyle} align="center" pt={1}>
        {subTitle}
      </Text>
    </Flex>
  );
};
export default Publication;
