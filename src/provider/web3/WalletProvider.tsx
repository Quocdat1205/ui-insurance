import { createContext, useEffect } from "react";
import { Props } from "@type/common";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./chainID";
import { useToast } from "@chakra-ui/react";
import { Web3State } from "@type/web3";

const initValue: Web3State = {
  ConnectWallet: () => {},
  DisconnectWallet: () => {},
  active: false,
  account: "",
};

export const walletContext = createContext(initValue);

export const WalletProvider = ({ children }: Props) => {
  const toast = useToast();
  const { active, account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    ConnectWallet();
  }, [active]);

  const ConnectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
      toast({
        status: "error",
        title: "Please install Metamask Extension!",
      });
    }
  };

  const DisconnectWallet = async () => {
    const test = await deactivate();
  };

  const value = {
    ConnectWallet,
    DisconnectWallet,
    active,
    account,
  };

  return (
    <walletContext.Provider value={value}>{children}</walletContext.Provider>
  );
};
