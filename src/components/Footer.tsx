import Image from "next/image"
import Logo from '@/assets/logo.svg'
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="h-[50vh] bg-black text-white flex p-2 justify-around flex-wrap w-screen">
          <Link href='/' className="flex items-center gap-4 font-semibold text-xl tracking-[0.35em] animate-pulse">
            <Image
              src={Logo}
              alt="Logo"
              className="w-14 min-w-[3rem]"
            />
            <p className="uppercase  max-lg:hidden">blockshare</p>
          </Link>
          <div className="flex items-baseline gap-8 self-center align-top">
          <div className="flex flex-col self-center">
            <p className="font-bold text-sm">Sobre</p>
            <p className="text-sm font-medium text-zinc-600 w-52">A empresa é um projeto realizado na Task WP3-Software realizado no projeto SUPER</p>
          </div>
          <div className="flex flex-col self-center">
            <p className="font-bold text-sm">Ajuda</p>
            <p className="text-sm font-medium text-zinc-600 w-56">Uma colaboração com Glauber Patrik bolsista da Task WP2 - Iniciação Ciêntifica</p>
          </div>
          <div className="flex flex-col self-center">
            <p className="font-bold text-sm">Projeto SUPER</p>
            <p className="text-sm font-medium text-zinc-600 w-56">Realizado em parceria com a Universidade Federal do Amazonas UFAM com a FAEPI...</p>
          </div>
          </div>
    </footer>
    )
}