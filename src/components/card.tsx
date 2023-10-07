import Image from "next/image"

export default function Card(props : any){
    return(
        <div className="flex justify-center flex-col gap-5 w-[20rem] py-10 px-4 rounded-ss-3xl rounded-br-3xl  border-slate-300 border-4">
          <div className=" justify-center flex h-[30%] mb-5 items-center content-center">
            <Image 
                src={props.photo}
                alt="user-1"
                className="w-32 self-center h-32"
            />
          </div>
          <p className="w-72 text-center text-sm px-2 text-gray-400 h-[40%]">{props.comment}</p>
          <p className="self-center font-semibold h-[30%] ">{props.name}</p>
        </div>
    )
}