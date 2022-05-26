import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export type BuyInsuranceType = {
  walletAddress: string;
  deposit: number;
  timestamp: Date;
  liquidation_price: number;
};
