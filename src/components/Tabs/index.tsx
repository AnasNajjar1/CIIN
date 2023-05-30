import React from "react";
import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
type TabsProps = Omit<React.ComponentProps<typeof TabsChakra>, "children">;
interface Props {
  tabs: TabsProps;
}
const Tabs = ({ tabs }: Props) => {
  return (
    <TabsChakra {...tabs}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </TabsChakra>
  );
};

export default Tabs;
