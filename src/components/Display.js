import { useState } from "react";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank" className="w-5">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt={item.substring(34)}
              className="bg-blue-500 w-5 rounded-lg"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <div className="flex flex-col ">
      <div className="image-list flex w-5 gap-10 m-5">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="border-slate-500 border-2 text-slate-400 rounded-md py-6 w-[60%] h-[55px] focus:border-slate-200 px-4 address"
        style={{background: 'linear-gradient(0deg, rgba(88, 88, 88, 0.15) 0%, rgba(88, 88, 88, 0.15) 100%), rgba(208, 208, 208, 0.05)'}}
      ></input>
      <button className="font-medium text-xl border-2 border-purple-800 px-8 py-2 rounded-tl-xl rounded-br-xl hover:bg-purple-800 ease-in-out duration-150 hover:font-semibold mt-10 self-center" onClick={getdata}>
        Get Data
      </button>
    </div>
  );
};
export default Display;
