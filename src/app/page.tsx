// Libs
import Image from "next/image"
import Link from "next/link"

// Imagens
import Logo from '@/assets/logo.svg'
import Img1 from '@/assets/landing1.png'
import Brilho from '@/assets/brilho.png'
import Poly from '@/assets/Group 11.png'
import PolyTrans from '@/assets/Polygon 10.png'
import Ufam from '@/assets/ufam_branca1.png'

// Components
import Dropdown from "@/components/dropdown"
import MenuBtn from "@/components/menubtn"
export default function Home() {
  return (
    <header className="h-screen w-screen" style={{background: 'linear-gradient(293deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(228, 153, 255, 0.30) 100%);'}}>
        <nav className="flex justify-around py-10 items-center">
          <Link href='/' className="flex items-center gap-4 font-semibold text-xl tracking-[0.35em]">
            <Image
              src={Logo}
              alt="Logo"
              className="w-14 min-w-[3rem]"
            />
            <p className="uppercase animate-pulse max-lg:hidden">blockshare</p>
          </Link>
          <div className="flex gap-10 items-center justify-start max-md:hidden">
          <Dropdown name='Produtos'>
          <Link href='/'><p>Batata</p></Link>
          </Dropdown>
          <Dropdown name='Compania'>
            <Link href='/'><p>Oi</p></Link>
          </Dropdown>
          <Dropdown name='Imagens'>
            <Link href='/'><p>Oi</p></Link>
          </Dropdown>
          </div>
          <div className="flex items-center gap-5 max-sm:text-sm">
          <Link href='/'><p className="hover:font-semibold duration-200 ease-in-out">Login</p></Link>
          <Link href='/'><MenuBtn nome='Cadastrar'/></Link>
          </div>
        </nav>
        <div className="flex justify-between max-md:pl-5 max-lg:pl-5 pl-24 overflow-hidden flex-wrap max-sm:justify-center">
            <div className="self-center flex flex-col mt-16">
            <p className="font-semibold text-xl max-sm:text-sm">Tópico</p>
            <p className="text-[5rem] font-semibold leading-[4rem] uppercase max-sm:text-[3rem] max-lg:text-[3rem]">Landing<br />Page</p>
            <Link href='/'><MenuBtn nome='Saiba Mais' className='mt-5'/></Link>
            <Image src={Ufam} alt="ufam" className="mt-24 w-16 max-sm:self-center"/>
            </div>
            <Image
                src={Img1}
                alt="img"
                className="w-[30rem] z-10 max-sm:hidden max-md:w-[20rem] max-md:h-[24rem]"
            />
        </div>
        
        

        
    </header>
  )
}
