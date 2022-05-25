import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Props } from "@types/common.type";
import { useWallet } from "@hook/useWallet";
import ButtonConnectWallet from "./ButtonConnectWallet";

const Layout = ({ children }: Props) => {
  const { active } = useWallet();

  return (
    <Flex
      h="100vh"
      w="full"
      direction="column"
      overflow="hidden"
      color="whiteAlpha.900"
      bg="black"
    >
      {active ? (
        <Flex overflow="hidden" flex={1} overflowY="scroll" display="flex">
          <Box boxSizing="border-box" w="100%">
            <Box margin="auto">{children}</Box>
          </Box>
        </Flex>
      ) : (
        <Flex flex={1} w="full" justify="center">
          <ButtonConnectWallet />
        </Flex>
      )}
    </Flex>
  );
};

export default Layout;
