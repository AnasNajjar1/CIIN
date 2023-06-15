import { Box, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";

type UserProfileCardProps = {
  children: any;
  footer?: boolean;
  childrenFooter?: any;
  paddingFooter?: any;
};

const UserProfileCard = ({
  children,
  footer = false,
  childrenFooter = null,
  paddingFooter = null,
}: UserProfileCardProps) => {
  return (
    <>
      <Box pt={4}>
        <Card>
          <CardBody>
            <Stack alignItems="center">{children}</Stack>
          </CardBody>
          {footer && (
            <CardFooter p={paddingFooter}>{childrenFooter}</CardFooter>
          )}
        </Card>
      </Box>
    </>
  );
};
export default UserProfileCard;
