import React from "react";
import {Box, Card, CardBody, Flex, Text} from "@chakra-ui/react";
import CardIcon from "../CardIcon";


type DashboardCardProps = {
    icon: any;
    title: string;
    children: React.ReactNode
};

const DashboardCard = ({ icon, title,children }: DashboardCardProps) => {
    return (
       <Box>
           <Flex pb={3}>
               <CardIcon icon={icon} />
               <Text fontWeight={700} color="blue.800" pt={1} pl={2}>
                   {title}
               </Text>
           </Flex>
           <Card>
               <CardBody>
                   {children}
               </CardBody>
           </Card>
       </Box>
    );
};
export default DashboardCard;