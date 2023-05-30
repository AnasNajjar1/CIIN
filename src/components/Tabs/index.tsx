import React from "react";
import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
type TabsProps = Omit<React.ComponentProps<typeof TabsChakra>, "children">;
interface Item {
  title: string;
  component: React.ReactNode;
  props?: React.ComponentProps<typeof Tab>;
}
interface Props {
  tabs: TabsProps;
  items: Item[];
}
const Tabs = ({ tabs, items }: Props) => {
  return (
    <TabsChakra align="center" {...tabs}>
      <TabList>
        {items.map((item, index) => (
          <Tab
            color="gray.500"
            _selected={{
              color: "blue.500",
              fontWeight: "bold",
              borderBottom: "4px solid #5E8CBA",

            }}
            key={index}
            {...item.props}
          >
            {item.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels textAlign='left' pt='30px'>
        {items.map((item, index) => (
          <TabPanel p='0' key={index}>{item.component}</TabPanel>
        ))}
      </TabPanels>
    </TabsChakra>
  );
};

export default Tabs;
