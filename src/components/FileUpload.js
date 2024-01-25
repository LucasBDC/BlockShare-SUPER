import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import { db, auth } from '@/app/( firebase )/firebase'
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
import { update } from "firebase/database";

const FileUploader = ({ contract, account, provider }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("Não selecionado");

  const uploadFileToIPFS = async (selectedFile) => {
    const fileData = new FormData();
    fileData.append("file", selectedFile);

    return await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: fileData,
      headers: {
        pinata_api_key: `079b241cbe4ba5e69735`,
        pinata_secret_api_key: `946949cd4b9f2d55dfc5b1bf5bdfd9637bbd242b2f34db9b4e6738595285d827`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleFileSubmission = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      try {
        const fileResponse = await uploadFileToIPFS(selectedFile);
        const fileHashURL = `https://gateway.pinata.cloud/ipfs/${fileResponse.data.IpfsHash}`;
        contract.add(account, fileHashURL);
        alert("O arquivo foi enviado com sucesso");
        const logCollectionRef = collection(db, "Log");
        const user = auth.currentUser
        const logDocRef = doc(logCollectionRef);
        await setDoc(logDocRef, {
          ticketId: logDocRef.id,
          userId: user.uid,
          imgHash : fileHashURL
        });

      } catch (error) {
        alert("Não foi possível enviar o arquivo!");
      } finally {
        setSelectedFileName("Não selecionado");
        setSelectedFile(null);
      }
      
    }
  };

  const handleFileRetrieval = (event) => {
    const fileData = event.target.files[0];
    const fileReader = new window.FileReader();
    fileReader.readAsArrayBuffer(fileData);
    fileReader.onloadend = () => {
      setSelectedFile(fileData);
      setSelectedFileName(fileData.name);
    };
    event.preventDefault();
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleFileSubmission}>
        <label htmlFor="file-upload" className="choose duration-300 hover:bg-purple-700">
          Escolher arquivo
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={handleFileRetrieval}
        />
        <span className="textArea">Arquivo: {selectedFileName.substring(0, 15)}...</span>
        <button type="submit" className="upload cursor-pointer hover:bg-green-400 duration-200" disabled={!selectedFile}>
          Enviar arquivo
        </button>
      </form>
    </div>
  );
};

export default FileUploader;
