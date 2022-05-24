import React from "react";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useWallet } from "@hook/useWallet";

const ButtonConnectWallet = () => {
  const { ConnectWallet } = useWallet();

  return (
    <Box position="absolute" top="50%" left="50%" w="100%">
      <Button
        bg="linear-gradient(to bottom, #FF6795 0%, #FF710B 84.37%)"
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        padding="0.5rem 2rem"
        onClick={() => ConnectWallet()}
        color="black"
        transform="translateX(-50%)"
      >
        Connect Wallet 1
      </Button>
    </Box>
  );
};

export default ButtonConnectWallet;
