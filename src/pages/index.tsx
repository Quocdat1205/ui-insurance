import type { NextPage } from "next";
import { useWallet } from "@hook/useWallet";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useContract } from "@hook/useContract";
import InfoBuyer from "@component/home/InfoBuyer";
import ModalBuyInsurance from "@component/home/ModalBuyInsurance";
import { useWeb3React } from "@web3-react/core";

const Home: NextPage = () => {
  const { DisconnectWallet, account } = useWallet();
  const { infoBuyer } = useContract();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deactivate } = useWeb3React();

  return (
    <Box
      w="100%"
      textAlign="center"
      margin="auto"
      position="absolute"
      left="50%"
      top="50%"
      transform="translateX(-50%) translateY(-50%)"
    >
      <Box className="general">
        <Button onClick={() => deactivate()} color="black" bg="red.100">
          Disconnect Wallet
        </Button>
        <Text>{account}</Text>
      </Box>
      <Box className="info-buyer" marginTop="1rem">
        {infoBuyer ? (
          <InfoBuyer />
        ) : (
          <Button color="black" bg="blue.100" onClick={onOpen}>
            Buy insurance now!!!
          </Button>
        )}
        <ModalBuyInsurance isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};

export default Home;
