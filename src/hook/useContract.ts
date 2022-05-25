import { useContext } from "react";
import { ContractContext } from "@provier/contract/ContractProvider";

export const useContract = () => {
  const context = useContext(ContractContext);

  if (!context) {
    throw Error("Contract context not found!");
  }

  return context;
};
