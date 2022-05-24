import React from "react";
import { walletContext } from "@provier/web3/WalletProvider";

export const useWallet = () => {
  const context = React.useContext(walletContext);

  if (!context) {
    throw Error("Wallet context notfound!");
  }

  return context;
};
