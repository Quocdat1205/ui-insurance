import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useContract } from "@hook/useContract";

const InfoBuyer = () => {
  const { infoBuyer } = useContract();

  return (
    <Box bg="gray" width="40%" margin="auto" padding="1rem">
      <Heading>Your Insurance</Heading>
      <Text>Address: {infoBuyer[0]}</Text>
      <Text>Amout: {infoBuyer[1]}</Text>
      <Text>Expired: {infoBuyer[2]}</Text>
      <Text>{`State: ${infoBuyer[3]}`}</Text>
    </Box>
  );
};

export default InfoBuyer;
