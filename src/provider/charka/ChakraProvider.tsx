import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/utils/theme";
import { Props } from "@types/common.type";

export const ChakraProviders = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
