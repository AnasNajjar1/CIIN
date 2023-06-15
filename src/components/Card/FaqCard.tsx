import { Card, CardBody, Stack, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { cardBodyTextStyle, cardTitleStyle } from "../../pages/Faq/styles";
import { NavArrowDown, NavArrowUp } from "iconoir-react";

type FaqCardProps = {
  cardTitle: string;
  cardBodyText: string;
};

const FaqCard = ({ cardTitle, cardBodyText }: FaqCardProps) => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <Card>
        <CardBody>
          <Stack>
            <Flex align="center" justify="space-between">
              <Box>
                <Text sx={cardTitleStyle}>{cardTitle}</Text>
              </Box>
              <Box>
                <Icon
                  as={cardOpen ? NavArrowUp : NavArrowDown}
                  color="blue.500"
                  cursor="pointer"
                  onClick={() => setCardOpen(!cardOpen)}
                />
              </Box>
            </Flex>
            <Box pt={4} display={cardOpen ? "block" : "none"}>
              <Text sx={cardBodyTextStyle}>{cardBodyText}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
export default FaqCard;
