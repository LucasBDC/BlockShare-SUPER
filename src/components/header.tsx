import Image from "next/image"

import Logo from "../assets/logo.svg"

export default function Header(){
    return(
        <header className='items-center justify-center flex flex-col gap-4'>
            <Image
                src={Logo}
                alt='Logo'
                className='w-[70px]'
            />
            <p className='uppercase text-[40px]'>blockshare</p>
          </header>
    )
}