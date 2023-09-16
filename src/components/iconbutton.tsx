import Link from "next/link"
import Image from "next/image"

export default function IconButton(props: any, background : any){
    
    return(
        <div className="">
            <Link href={props.href} className="group">
                <button className={'p-2.5 rounded-full ' + props.background }>
                    <Image
                        src={props.src}
                        alt={props.alt}
                        className={'group-hover:scale-125 ease-in-out duration-200 group-hover:rotate-6 ' + props.filter}
                    />
                </button>
            </Link>
        </div>
    )
}