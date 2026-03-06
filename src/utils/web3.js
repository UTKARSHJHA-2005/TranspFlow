import Web3 from "web3";
import supply from "../utils/supply.json";

let web3;

if (typeof window !== "undefined" && window.ethereum) {
    web3 = new Web3(window.ethereum);
} else {
    web3 = new Web3(
        "https://rpc.sepolia.org"
    );
}

const contractAddress = "0x272497c9526021Ac17A8D402f585947C68dad136";

const contract = new web3.eth.Contract(
    supply,
    contractAddress
);

export { web3, contract };