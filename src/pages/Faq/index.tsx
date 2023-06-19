import { Flex, Box, Text } from "@chakra-ui/react";
import { titleTextStyle } from "./styles";
import FaqCard from "../../components/Card/FaqCard";

const Faq = () => {
  return (
    <>
      <Flex direction="column" p="20px 60px">
        {/* Upper Side */}
        <Flex direction="column">
          <Box pt={5}>
            <Text sx={titleTextStyle}>FAQ</Text>
          </Box>
          <Flex direction="column" pt={8} pb="80px">
            <Box>
              <FaqCard
                cardTitle="How often is the data updated?"
                cardBodyText="The data is updated from March 1st to Dec 30th of each
                        calendar year, through online forms, email submissions
                        and via phone campaigns. All the organizations have a
                        designated key account manager who is responsible for
                        updating contact information throughout the year. In
                        addition, we have our ears to the ground with an
                        extensive network through our magazines -Benefits Canada
                        and Avantage, who host 25 various events and conferences
                        put together for the plan sponsors community; on behalf
                        of the Canadian Investment Review brand."
              />
            </Box>
            <Box pt={6}>
              <FaqCard
                cardTitle="Why do plan sponsors update?"
                cardBodyText="We provide plan sponsors an overview of the market from
                the data collected through our network. A significant
                number of Canada’s largest plans contribute as they
                become part of the editorial content within Benefits
                Canada and Avantage. These included the “Top 100 Pension
                Plans” report that publishes annually in June. In
                addition, we maintain valuable relationships with many
                plans sponsors as they actively participate in several
                of our conferences."
              />
            </Box>
            <Box pt={6}>
              <FaqCard
                cardTitle="Can the database be used for proprietary research for
                licensing companies?"
                cardBodyText="We provide plan sponsors an overview of the market from
                the data collected through our network. A significant
                number of Canada’s largest plans contribute as they
                become part of the editorial content within Benefits
                Canada and Avantage. These included the “Top 100 Pension
                Plans” report that publishes annually in June. In
                addition, we maintain valuable relationships with many
                plans sponsors as they actively participate in several
                of our conferences."
              />
            </Box>
            <Box pt={6}>
              <FaqCard
                cardTitle="How long is the subscription period/span?"
                cardBodyText="We provide plan sponsors an overview of the market from
                the data collected through our network. A significant
                number of Canada’s largest plans contribute as they
                become part of the editorial content within Benefits
                Canada and Avantage. These included the “Top 100 Pension
                Plans” report that publishes annually in June. In
                addition, we maintain valuable relationships with many
                plans sponsors as they actively participate in several
                of our conferences."
              />
            </Box>
            <Box pt={6}>
              <FaqCard
                cardTitle="Can there be multiple users on one license?"
                cardBodyText="We provide plan sponsors an overview of the market from
                the data collected through our network. A significant
                number of Canada’s largest plans contribute as they
                become part of the editorial content within Benefits
                Canada and Avantage. These included the “Top 100 Pension
                Plans” report that publishes annually in June. In
                addition, we maintain valuable relationships with many
                plans sponsors as they actively participate in several
                of our conferences."
              />
            </Box>
            <Box pt={6}>
              <FaqCard
                cardTitle="Why can't I access the website? I've used it before."
                cardBodyText="We provide plan sponsors an overview of the market from
                the data collected through our network. A significant
                number of Canada’s largest plans contribute as they
                become part of the editorial content within Benefits
                Canada and Avantage. These included the “Top 100 Pension
                Plans” report that publishes annually in June. In
                addition, we maintain valuable relationships with many
                plans sponsors as they actively participate in several
                of our conferences."
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Faq;
