// KEY -> 0x6f6C58Ba47892EF76fF9678895166E9E073917e8 <- eth
// BTC -> 1EBKdZ6rfUcDxR3uPfAsKcnPgaYm9zCUp2 <- address
import { ethers } from "ethers";
import ABI from "./abi.json";

export const contractAddress = "0x01B2795EC6E5ADD288e196fA437ADCB23438E9E7";

export const contractABI = ABI.abi;

// Grab ethereum object
export const getEthereumObject = () => window.ethereum;

export const signInMessageVerification = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      //   Message
      const message = `entered the site at: ${Date.now()}`;

      //
      let rawSig = await signer.signMessage(message);

      return rawSig;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEthereumAccount =  async() => {
  try {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
