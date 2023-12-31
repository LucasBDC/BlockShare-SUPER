import { useState } from "react";
import File from '../assets/file-chart-line (1).png'
import Image from "next/image";
import Link from "next/link";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const fetchData = async (address) => {
    try {
      return await contract.display(address);
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  const getdata = async () => {
    const Otheraddress = document.querySelector(".address").value;
    const address = Otheraddress || account;
    const dataArray = await fetchData(address);

    if (dataArray && Object.keys(dataArray).length !== 0) {
      const images = dataArray.toString().split(",").map((item, i) => {
        const urlFetch = 'https://gateway.pinata.cloud/ipfs/'+item.substring(34)
        const source = urlFetch || File;
        return (
          <Link href={item} key={i} target="_blank" className="w-36 flex flex-col items-center justify-center p-2 rounded-xl" style={{background: 'linear-gradient(180deg, rgba(172, 98, 207, 0.00) 0%, #8323B0 100%)'}}>
            <Image
              key={i}
              src={source}
              alt="O arquivo não é uma imagem"
              className=" h-28 w-28" width={112} height={112} 
            />
            <p className="text-sm mt-5 w-28 overflow-hidden text-center">{item.substring(70)}...</p>
          </Link>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="image-list self-center flex w-[800px] flex-wrap gap-10 mb-5">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="border-slate-500 border-2 text-slate-400 rounded-md py-6 w-[60%] h-[55px] focus:border-slate-200 px-4 
        address"
        style={{background: 'linear-gradient(0deg, rgba(88, 88, 88, 0.15) 0%, rgba(88, 88, 88, 0.15) 100%), rgba(208, 208, 208, 0.05)'}}
      ></input>
      <button className="font-medium text-xl border-2 border-purple-800 px-8 py-2 rounded-tl-xl rounded-br-xl hover:bg-purple-800 ease-in-out duration-150 hover:font-semibold mt-10 self-center" onClick={getdata}>
        Get Data
      </button>
    </div>
  );
};
export default Display;
