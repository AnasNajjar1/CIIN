import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Text } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
  propsAccordion?: React.ComponentProps<typeof ChakraAccordion>;
}
const Accordion = ({ children, title, propsAccordion }: Props) => {
  return (
    <ChakraAccordion
      allowToggle
      shadow="lg"
      borderRadius="8px"
      w="100%"
      bg="white"
      {...propsAccordion}
    >
      <AccordionItem border="none">
        <h2>
          <AccordionButton
            height="56px"
            _hover={{ bg: "white", borderRadius: "8px" }}
          >
            <Text textStyle="base" fontWeight="500" flex="1" textAlign="left">
              {title}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  );
};

export default Accordion;
