// Libs
import Link from "next/link"
import Image from "next/image"

export default function ThickButton(props : any){
    return(
        <div className="">
            <Link href={props.href}>
                <button className="bg-zinc-700 px-6 py-2 rounded-full text-zinc-400 flex items-center gap-8 justify-between cursor-pointer hover:bg-zinc-400 ease-in-out duration-100 group">
                    <Image
                        src={props.image}
                        alt={props.alt}
                        className="group-hover:brightness-75"
                    /> 
                    <p className="group-hover:brightness-50 font-medium">{props.texto}</p></button>
            </Link>
        </div>
    )
}