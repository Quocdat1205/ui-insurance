import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { fillBuyInsurance } from "@utils/constant";
import { BuyInsurance, getCurrentPriceEth } from "src/contract/Insurance";
import { useWallet } from "@hook/useWallet";

const ModalBuyInsurance = ({ isOpen, onClose }: any) => {
  const { account } = useWallet();
  const [infoInsurance, setInfoInsurance] = useState<any>({
    walletAddress: account,
  });

  const handleBuyInsurance = async () => {
    await BuyInsurance(infoInsurance);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Buy Insurance</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Text>Current price ETH: {current_price_eth}</Text> */}
          {fillBuyInsurance.map((value) => {
            return (
              <FormControl marginTop="0.5rem" key={value.id}>
                <FormLabel htmlFor={value.name}>{value.label}</FormLabel>
                <Input
                  name={value.name}
                  id={value.name}
                  placeholder={`Input ${value.name}`}
                  type={value.type}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInfoInsurance({
                      ...infoInsurance,
                      [e.target.name]: e.target.value,
                    })
                  }
                  disabled={value.id === 1}
                  defaultValue={value.id === 1 ? `${account}` : ""}
                />
              </FormControl>
            );
          })}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={() => handleBuyInsurance()}>
            Buy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBuyInsurance;
