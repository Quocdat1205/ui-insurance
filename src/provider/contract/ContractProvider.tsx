import { createContext, useEffect, useState } from "react";
import { Props } from "@types/common.type";
import { ContractType, InfoBuyerType } from "@types/contract.type";
import { getInfoBuyer } from "src/contract/Insuranct";
import { useWeb3React } from "@web3-react/core";

const initValue: ContractType = {
  infoBuyer: {},
};

export const ContractContext = createContext(initValue);

export const ContractProvider = ({ children }: Props) => {
  const [infoBuyer, setInfoBuyer] = useState<InfoBuyerType>({
    walletAddress: "",
    expired: 0,
    deposit: 0,
    state: false,
  });
  const { account } = useWeb3React();

  const fetchInfoBuyer = async (address: string) => {
    const _ = await getInfoBuyer(address as string);
    console.log(_);
    
    setInfoBuyer(_);
  };

  useEffect(() => {
    fetchInfoBuyer(account as string);
  }, [account]);

  const value = {
    infoBuyer,
  };

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};
