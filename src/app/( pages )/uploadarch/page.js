'use client'
import Upload from "../../../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "@/components/FileUpload";
import Display from "@/components/Display";
import Header from "@/components/header";
import './App.css'

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      window.ethereum.on("chainChanged", () => window.location.reload());
      window.ethereum.on("accountsChanged", () => window.location.reload());
      await provider.send("eth_requestAccounts", []);
      return provider;
    };

    const initializeContract = async (provider) => {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
      return { contract, address };
    };

    if (window.ethereum) {
      initializeProvider().then(provider => {
        setProvider(provider);
        initializeContract(provider).then(({ contract, address }) => {
          setContract(contract);
          setAccount(address);
        });
      });
    } else {
      console.error("Metamask não está instalado! Instale o Metamask para poder prosseguir");
    }
  }, []);

  return (
    <div className="App flex flex-col gap-4 items-center justify-center backgroundera min-h-screen">
      <Header/>
      <p className="text-lg font-medium" style={{ color: "white" }}>
        Conta : {account ? account : "Nenhuma conta conectada"}
      </p>
      <FileUpload account={account} provider={provider} contract={contract} />
      <Display contract={contract} account={account} />
    </div>
  );
};

export default App;
