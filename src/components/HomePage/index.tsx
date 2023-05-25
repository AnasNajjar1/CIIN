import { Flex } from "@chakra-ui/react";
import React from "react";
import HomePageFirstSection from "../HomePageFirstSection";
import HomePageSecondSection from "../HomePageSecondSection";
import HomePageThirdSection from "../HomePageThirdSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Flex direction="column" p="90px 0 150px 0">
        {/* First Section */}
        <HomePageFirstSection />
        {/* Second Section */}
        <HomePageSecondSection />
        {/* Third Section */}
        <HomePageThirdSection />
      </Flex>
    </>
  );
};
export default HomePage;
