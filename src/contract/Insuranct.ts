import InitWeb3 from "@provier/web3/Web3";
import { BuyInsuranceType } from "@types/contract.type";

export const getTotalBuyer = async (): Promise<number> => {
  const _ = await (await InitWeb3()).contract;

  const totalBuyer = await _.methods.getTotalbuyers().call();

  return totalBuyer;
};

export const getInfoBuyer = async (walletAddress: string): Promise<any> => {
  try {
    const _ = await (await InitWeb3()).contract;

    const infoBuyer = await _.methods.getInfoBuyer(walletAddress).call();

    return infoBuyer;
  } catch (error) {
    return false;
  }
};

export const BuyInsurance = async (props: BuyInsuranceType): Promise<any> => {
  try {
    const { walletAddress, deposit, expired, liquidation_price } = props;
    const _ = await (await InitWeb3()).contract;

    const timestamp = new Date(expired as unknown as string).getTime();

    const result = await _.methods
      .buyInsurance(`${walletAddress}`, deposit, timestamp, liquidation_price)
      .send();

    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentPriceEth = async () => {
  try {
    const _ = await (await InitWeb3()).contract;

    const current_price = await _.methods.getLatestPrice().call();
    console.log(current_price);
    
    return current_price;
  } catch (error) {
    console.error("ERROR", error);
  }
};
