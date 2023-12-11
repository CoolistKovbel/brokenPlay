// KEY -> 0x6f6C58Ba47892EF76fF9678895166E9E073917e8 <- eth
// BTC -> 1EBKdZ6rfUcDxR3uPfAsKcnPgaYm9zCUp2 <- address
require("dotenv").config();

import { BigNumber, ethers } from "ethers";
import ABI from "./abi.json";
import { toast } from "react-toastify";
export const contractAddress = "0xAF9bf209e95A35406d6ccc9597c6285B2d9238E4";

export const contractABI = ABI.abi;

// Grab ethereum object
export const getEthereumObject = () => {
  return window.ethereum;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

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
    console.log(error);
    return null;
  }
};

export async function getUserNFTProfileImage() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const account = await getEthereumAccount();
    console.log(signer, account);

    let tokenId = await contract.ownerToToken(account);

    let randomTokenMetaData = await contract.tokenURI(tokenId);

    if (randomTokenMetaData.startsWith("ipfs://")) {
      randomTokenMetaData = `https://scarlet-husky-loon-439.mypinata.cloud/ipfs/${
        randomTokenMetaData.split("ipfs://")[1]
      }`;
    }

    const tokenMetaday = await fetch(randomTokenMetaData).then((res) =>
      res.json()
    );

    if (tokenMetaday) {
      return tokenMetaday.image || tokenMetaday;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function grabAllAnnouncements() {
  try {
    const contract = contractBB();

    const x = await contract.getAllMessages();

    return x;
  } catch (error) {
    console.log(error);
  }
}

// Check if user owns a nft
export async function userBoughtNFT(address: string) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const res = await contract.ownerToToken(address);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

// CLient functions
export async function sendMessage(x: any) {
  console.log("sending message");

  try {
    const contract = contractBB();

    const res = await contract.createMessage(x, {
      value: ethers.utils.parseEther((0.012).toString()),
      gasLimit: 500000,
    });

    console.log("mining tx:", res.hash);
    await res.wait();
    console.log(res.hash, "completed");
    return res.hash;
  } catch (error) {
    return "Small malfunction on our side please double check yours";
  }
}

// Mint a nft
export async function mintNFT(amount: any) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const res = await contract.mint(amount, {
      value: ethers.utils.parseEther((0.042 * amount).toString()),
    });

    console.log(res.hash, "Transaction started")
    console.log(res);
    res.wait()

    console.log(res.hash, "Transaction ended")


  } catch (error) {
    console.log(error);
    toast(`☠ No worrk big error make sure metamask is worky: ${error?.toString()}`)
  }
}

// Grab all channels
export async function getAllChannels() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const channels = await contract.connect(signer).getAllChannels();

    return channels;
  } catch (error) {
    console.log(error);
  }
}


type createMysticGroup = {
  channelName: String;
  channelCost: BigNumber;
  channelImage: String;
}


// Create a group
export async function CreateMysticGroup({channelName, channelCost, channelImage}: createMysticGroup) {

  try {
    
    const contract = contractBB()

    // console.log(channelCost.toString())
    // const zzAsNumber = zz.toNumber();
    // console.log(Number(channelCost.toString()))
    // console.log(zz, "Method")
    // console.log(typeof zz)
    // Only holder c all
    const zz = ethers.utils.formatEther(channelCost.toString())
    const c = ethers.utils.parseUnits(zz, 18)
    const xx = await contract.createChannel(channelName, c, {
      value: ethers.utils.parseEther((0.024).toString()),
      gasLimit: "50000",
    })

    console.log(xx, "Starting")
    console.log(xx.hash)
    await xx.wait()
    console.log(xx.hash, "Completed")

    return 'hello'
  } catch (error) {
    console.log(error,"error homie")
  }

}

const contractBB = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};
