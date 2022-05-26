export type Web3State = {
  ConnectWallet: Function;
  DisconnectWallet: Function;
  active: boolean;
  account: string | null | undefined;
}