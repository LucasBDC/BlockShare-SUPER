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
import Image2 from '@/assets/Image2.png'
import RightPoint from '@/assets/rightpointer.png'

// Components
import Dropdown from "@/components/dropdown"
import MenuBtn from "@/components/menubtn"
export default function Home() {
  return (
    <main>
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
          <Link href='/login'><p className="hover:font-semibold duration-200 ease-in-out">Login</p></Link>
          <Link href='/registro'><MenuBtn nome='Cadastrar'/></Link>
          </div>
        </nav>
        <div className="flex justify-between max-md:pl-5 max-lg:pl-5 pl-24 overflow-hidden flex-wrap max-sm:justify-center">
            <div className="self-center flex flex-col mt-16">
            <p className="font-semibold text-xl max-sm:text-sm">Tópico</p>
            <p className  ="text-[5rem] font-semibold leading-[4rem] uppercase max-sm:text-[3rem] max-lg:text-[3rem]">Landing<br />Page</p>
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
    <div className="h-screen w-screen items-center flex justify-evenly flex-wrap" style={{background: 'linear-gradient(67deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(228, 153, 255, 0.30) 100%'}}>
      <div className="flex justify-center items-center gap-28 flex-wrap max-md:mt-10">
      <Image
      src={Image2}
      alt="img"
      className="w-[40rem] max-md:w-[20rem]"
      />
      <div className="flex flex-col w-[30rem]  gap-3 max-md:mr-0 max-md:w-[20rem] max-sm:w-[15rem]">
        <p className="uppercase text-end  w-[100%] font-semibold">Tópico</p>
        <p className="text-[4rem] leading-[4rem] uppercase text-end  font-medium max-sm:text-[3rem]">Proteja seus dados online</p>
        <p className="text-end text-sm text-[#9E9D9E]">Um banco de dados blockchain armazena informações em blocos interligados em uma cadeia. Os dados são considerados cronologicamente consistentes porque não é possível excluir nem modificar a cadeia sem o consenso da rede.</p>
        <Link href='/' className="self-end flex items-center gap-3 group"><Image src={RightPoint} className="w-3 h-3  opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300 ease-out " alt="rightpoint"/><p className="text-end text-white font-medium">Leia mais sobre dados.</p></Link>
      </div>
      </div>
    </div>
    <div className="h-screen w-screen flex justify-center" style={{background: 'linear-gradient(293deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(233, 172, 255, 0.30) 100%'}}>
      <p className="uppercase text-[3rem] font-semibold mt-40">Feedbacks</p>
      <div className="flex flex-wrap"></div>
    </div>
    </main>
  )
}
