import Web3 from "web3";
import supply from "./supply.json"

const CONTRACT_ADDRESS = '0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B';

const getWeb3 = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        return web3;
    } else {
        console.error("MetaMask not found. Please install MetaMask.");
    }
};

const getContract = async (web3) => {
    return new web3.eth.Contract(supply, CONTRACT_ADDRESS);
};

export { getWeb3, getContract };
