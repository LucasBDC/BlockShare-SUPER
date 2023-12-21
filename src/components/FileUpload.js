import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Não selecionado");

  const uploadFileToIPFS = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `079b241cbe4ba5e69735`,
        pinata_secret_api_key: `946949cd4b9f2d55dfc5b1bf5bdfd9637bbd242b2f34db9b4e6738595285d827`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const resFile = await uploadFileToIPFS(file);
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);
        alert("O arquivo foi enviado com sucesso");
      } catch (e) {
        alert("Não foi possível enviar o arquivo!");
      } finally {
        setFileName("Não selecionado");
        setFile(null);
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(data);
      setFileName(data.name);
    };
    e.preventDefault();
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose duration-300 hover:bg-purple-700">
          Escolher arquivo
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Arquivo: {fileName.substring(0, 15)}...</span>
        <button type="submit" className="upload cursor-pointer hover:bg-green-400 duration-200" disabled={!file}>
          Enviar arquivo
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
