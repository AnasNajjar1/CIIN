import { Card, CardBody, Stack, Box, Text } from "@chakra-ui/react";
import {
  cardFirstTextStyle,
  cardSecondTextStyle,
  cardThirdTextStyle,
} from "../../pages/Home/HomePageSecondSection/styles";

type HomePageCardProps = {
  firstBoxPaddingTop: number;
  secondBoxPaddingTop: number;
  thirdBoxPaddingBottom: number;
  firstText: any;
  secondText: any;
  thirdText: any;
};

const HomePageCard = ({
  firstBoxPaddingTop,
  secondBoxPaddingTop,
  thirdBoxPaddingBottom,
  firstText,
  secondText,
  thirdText,
}: HomePageCardProps) => {
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
