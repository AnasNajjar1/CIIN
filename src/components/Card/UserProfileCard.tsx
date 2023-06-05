import { Box, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import React from "react";

type UserProfileCardProps = {
  children: any;
  footer?: boolean;
  childrenFooter?: any;
  paddingFooter?: any;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  children,
  footer = false,
  childrenFooter = null,
  paddingFooter = null,
}) => {
  return (
    <>
      <Box pt={4}>
        <Card>
          <CardBody>
            <Stack alignItems="center">{children}</Stack>
          </CardBody>
          {footer && <CardFooter p={paddingFooter}>{childrenFooter}</CardFooter>}
        </Card>
      </Box>
    </>
  );
};
export default UserProfileCard;
