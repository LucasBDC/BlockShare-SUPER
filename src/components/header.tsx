import Image from "next/image"

import Logo from "../assets/logo.svg"

export default function Header(props : any){
    return(
        <header className={'items-center justify-center flex flex-col gap-4 ' + props.className}>
            <Image
                src={Logo}
                alt='Logo'
                className='w-[70px]'
            />
            <p className='uppercase text-[40px]' style={{display: props.hidden}}>blockshare</p>
          </header>
    )
}