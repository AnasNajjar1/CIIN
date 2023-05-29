import { Box, Icon } from "@chakra-ui/react";

type CardIconProps = {
  icon: any;
  color?: string;
};

const CardIcon = ({ icon, color = "white" }: CardIconProps) => {
  return (
    <Box
      p="6px 8px"
      borderRadius={8}
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1), 0px 4px 48px rgba(163, 163, 163, 0.1)"
      backgroundColor="white"
      width="32px"
      height="32px"
    >
      <Icon as={icon} color={color} />
    </Box>
  );
};
export default CardIcon;
