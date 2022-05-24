import type { NextPage } from "next";
import { useWallet } from "@hook/useWallet";
import { Box, Button, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { DisconnectWallet, account } = useWallet();

  return (
    <Box w="100%" textAlign="center" margin="auto">
      <Button onClick={() => DisconnectWallet()} color="black">
        Disconnect Wallet
      </Button>
      <Text>{account}</Text>
    </Box>
  );
};

export default Home;
