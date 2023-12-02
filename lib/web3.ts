// KEY -> 0x6f6C58Ba47892EF76fF9678895166E9E073917e8 <- eth
// BTC -> 1EBKdZ6rfUcDxR3uPfAsKcnPgaYm9zCUp2 <- address
import { ethers } from "ethers";
import ABI from "./abi.json";

export const contractAddress = "0x01B2795EC6E5ADD288e196fA437ADCB23438E9E7";

export const contractABI = ABI.abi;

// Grab ethereum object
export const getEthereumObject = () => window.ethereum;
