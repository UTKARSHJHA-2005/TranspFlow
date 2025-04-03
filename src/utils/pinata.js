// Uploads the file to IPFS via pinata.
import axios from "axios"; // Axios
const pinataJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2OTliMjZkNy04MzE1LTQ4OTItOTA2YS0yZTcwMDI1NzEzMDIiLCJlbWFpbCI6ImpoYS51dGthcnNoMjAwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMWU4OWI2YWU3NzE4NDEyZmViODYiLCJzY29wZWRLZXlTZWNyZXQiOiIxOTkwZjAxYjZiMmFmOTc3OTgwNjY0MjQ3NGQwMWEzZjc2OTUzNjc3YjlmMmVjM2U2OTA5NDU0MTI1MjU2OWI3IiwiZXhwIjoxNzc0NzcxOTUyfQ.2dR5HawTZvktJETCaaPi9zYpfKxZgT6x6io7jkE7f2g"; // Replace with your Pinata JWT

export const uploadToPinata = async (file) => {
    const formData = new FormData(); // Stores the form data
    formData.append("file", file); // Appends the file
    const metadata = JSON.stringify({ name: file.name }); // Attaches metadata
    formData.append("pinataMetadata", metadata);// Appends the metadata
    const options = JSON.stringify({ cidVersion: 0 }); // Pinata settings
    formData.append("pinataOptions", options);// Appends the settings
    try {
        // POST Request to API.
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: { Authorization: `Bearer ${pinataJWT}` },
        });
        return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    } catch (error) {
        console.error("Pinata Upload Error:", error);
        return null;
    }
};
