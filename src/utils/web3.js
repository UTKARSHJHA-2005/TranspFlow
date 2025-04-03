import Web3 from "web3";
import supply from "../utils/supply.json" // Contract ABI

const web3 = new Web3(window.ethereum);
const contractAddress = "0x272497c9526021Ac17A8D402f585947C68dad136"; // Contract address
const contract = new web3.eth.Contract(supply, contractAddress);

export {web3,contract};