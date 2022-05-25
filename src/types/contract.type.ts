export interface BuyInsuranceType {
  walletAddress?: string;
  deposit?: number;
  expired?: number;
  liquidation_price?: number;
}

export interface ContractType {
  infoBuyer: any;
}

export interface InfoBuyerType {
  walletAddress: string;
  expired: number;
  deposit: number;
  state: boolean;
}
