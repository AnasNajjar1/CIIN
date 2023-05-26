import { Card, CardBody, Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  cardFirstTextStyle,
  cardSecondTextStyle,
  cardThirdTextStyle,
} from "../HomePageSecondSection/styles";

type HomePageCardProps = {
  firstBoxPaddingTop: number;
  secondBoxPaddingTop: number;
  thirdBoxPaddingBottom: number;
  firstText: any;
  secondText: any;
  thirdText: any;
};

const HomePageCard: React.FC<HomePageCardProps> = ({
  firstBoxPaddingTop,
  secondBoxPaddingTop,
  thirdBoxPaddingBottom,
  firstText,
  secondText,
  thirdText,
}) => {
  return (
    <>
      <Card>
        <CardBody>
          <Stack padding="10px" spacing={3} alignItems="center">
            <Box pt={firstBoxPaddingTop}>
              <Text sx={cardFirstTextStyle}>{firstText}</Text>
            </Box>
            <Box pt={secondBoxPaddingTop}>
              <Text sx={cardSecondTextStyle}>{secondText}</Text>
            </Box>
            <Box pb={thirdBoxPaddingBottom}>
              <Text sx={cardThirdTextStyle}>{thirdText}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
export default HomePageCard;
