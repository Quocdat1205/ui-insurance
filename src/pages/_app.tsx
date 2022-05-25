import type { AppProps } from "next/app";
import { ChakraProviders } from "@provier/charka/ChakraProvider";
import { WalletProvider } from "@provier/web3/WalletProvider";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Layout from "@component/shared/Layout";
import { ContractProvider } from "@provier/contract/ContractProvider";

function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContractProvider>
        <ChakraProviders>
          <WalletProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletProvider>
        </ChakraProviders>
      </ContractProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
