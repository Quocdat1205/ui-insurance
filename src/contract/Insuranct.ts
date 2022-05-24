import { ethers, providers } from "ethers";
import { INSURANCE_ABI } from "@utils/abi/insurance";

export class Insurance {
  provider: providers.Web3Provider;

  constructor(provider: providers.Web3Provider) {
    this.provider = provider;
  }

  public getContract = (contractAddress: string) => {
    return new ethers.Contract(contractAddress, INSURANCE_ABI, this.provider);
  };

  async getAmountBuyer(contractAddress: string) {
    return await this.getContract(contractAddress).getTotalBuyers();
  }
}
