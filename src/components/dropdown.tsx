import Image from "next/image"

import ArrowDown from '@/assets/Arrowdown.svg'

export default function Dropdown(props : any){
    return(
        <div className="group flex flex-col gap-2 cursor-pointer">
            <div className="flex gap-1 items-center ">
            <p className="group-hover:font-semibold duration-300 ease-in-out">{props.name}</p>
            <Image
                src={ArrowDown}
                alt="VerMais"
                className="w-5"
            />
            </div>
            <ul className="list-none flex flex-col items-center">
                <li className="leading-10 hidden group-hover:inline-block absolute duration-300 ease-in-out text-sm">{props.children}</li>
            </ul>
        </div>
    )
}