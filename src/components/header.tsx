import Image from "next/image"

import Logo from "../assets/logo.svg"

export default function Header(props : any){
    return(
        <header className={'items-center justify-center flex flex-col gap-4 pointer-events-none' + props.className}>
            <Image
                src={Logo}
                alt='Logo'
                className='w-[70px] pointer-events-none'
            />
            <p className='uppercase text-[40px] pointer-events-none' style={{display: props.hidden}}>blockshare</p>
          </header>
    )
}