'use client'
import Upload from "../../../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "@/components/FileUpload";
import Display from "@/components/Display";
import Header from "@/components/header";
import LoggedInGuard from '../../( hooks )/loggedinguard'
import './App.css'
require('dotenv').config();

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        window.ethereum.on("chainChanged", () => window.location.reload());
        window.ethereum.on("accountsChanged", () => window.location.reload());
        await provider.send("eth_requestAccounts", []);
        return provider;
      } catch (error) {
        console.error("Error initializing provider: ", error);
        alert(`Failed to initialize provider due to an error: ${error.message}`);
      }
    };

    const initializeContract = async (provider) => {
      try {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
        return { contract, address };
      } catch (error) {
        console.error("Error initializing contract: ", error);
        alert(`Failed to initialize contract due to an error: ${error.message}`);
      }
    };

    if (window.ethereum) {
      initializeProvider().then(provider => {
        setProvider(provider);
        initializeContract(provider).then(({ contract, address }) => {
          setContract(contract);
          setAccount(address);
        }).catch((error) => {
          console.error("Error in contract initialization: ", error);
          alert(`Contract initialization failed due to an error: ${error.message}`);
        });
      }).catch((error) => {
        console.error("Error in provider initialization: ", error);
        alert(`Provider initialization failed due to an error: ${error.message}`);
      });
    } else {
      console.error("Metamask não está instalado! Instale o Metamask para poder prosseguir");
    }
  }, []);

  return (
    <LoggedInGuard>
    <div className="App flex flex-col gap-4 items-center justify-center backgroundera min-h-screen">
      <Header/>
      <p className="text-lg font-medium text-black">
        Conta : {account ? account : "Nenhuma conta conectada"}
      </p>
      <FileUpload account={account} provider={provider} contract={contract} />
      <Display contract={contract} account={account} />
    </div>
    </LoggedInGuard>
  );
};

export default App;
