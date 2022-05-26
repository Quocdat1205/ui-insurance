import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/utils/theme";
import { Props } from "@type/common";

export const ChakraProviders = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
