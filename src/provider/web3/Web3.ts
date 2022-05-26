import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { INSURANCE_ABI } from "@utils/abi/insurance";

const initWeb3 = async () => {
  const web3 = new Web3(
    "https://kovan.infura.io/v3/f87b967bc65a41c0a1a25635493fa482"
  );

  const contract: any = new web3.eth.Contract(
    INSURANCE_ABI.abi as AbiItem[],
    "0x321452438A4D98221d324C059Ae19Bd88b30A272"
  );

  return { web3, contract };
};

export default initWeb3;
