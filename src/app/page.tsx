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
import Photo1 from '@/assets/Ellipse 10.png'
import Photo2 from '@/assets/Ellipse 11.png'
import Photo3 from '@/assets/Ellipse 12.png'

// Components
import Dropdown from "@/components/dropdown"
import MenuBtn from "@/components/menubtn"
import Card from '@/components/card'
export default function Home() {
  return (
    <main>
      <header className="h-screen w-screen" style={{background: 'linear-gradient(293deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(228, 153, 255, 0.30) 100%);'}}>
        <nav className="flex justify-around py-10 items-center">
          <Link href='/' className="flex items-center gap-4 font-semibold text-xl tracking-[0.35em] animate-pulse">
            <Image
              src={Logo}
              alt="Logo"
              className="w-14 min-w-[3rem]"
            />
            <p className="uppercase  max-lg:hidden">blockshare</p>
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
            <div className="self-center flex flex-col mt-16 z-10">
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
            <Image src={Poly} alt="polygon" className="absolute left-[60%] w-[10%]  bottom-[15%] max-md:hidden"/>
            <Image src={Poly} alt="polygon" className="absolute left-[65%] w-[22%] bottom-[50%%] max-md:hidden"/>
            <Image src={Poly} alt="polygon" className="absolute left-[50%] w-[15%]  bottom-[35%] max-md:hidden"/>
            <Image src={PolyTrans} alt="polygon" className="absolute left-[40%] w-[5%]  bottom-[15%] max-md:hidden"/>
            <Image src={PolyTrans} alt="polygon" className="absolute left-[90%] w-[10%] bottom-[0%] max-md:hidden"/>
            <Image src={PolyTrans} alt="polygon" className="absolute left-[-10%] w-[20%] blur bottom-[40%] max-md:hidden"/>
        </div>
    </header>
    <div className="w-screen items-center flex justify-evenly flex-wrap px-5 overflow-hidden" style={{background: 'linear-gradient(67deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(228, 153, 255, 0.30) 100%'}}>
    <Image src={Poly} alt="polygon" className="absolute left-[0%] w-[20%] top-[150%] max-md:hidden"/>
    <Image src={Poly} alt="polygon" className="absolute left-[10%] w-[15%] top-[120%] max-md:hidden"/>
    <Image src={PolyTrans} alt="polygon" className="absolute left-[45%] w-[5%] top-[180%] max-md:hidden"/>
    <Image src={PolyTrans} alt="polygon" className="absolute left-[50%] w-[15%] top-[110%] max-md:hidden"/>
    <Image src={Poly} alt="polygon" className="absolute left-[80%] w-[20%] top-[180%] max-md:hidden"/>
      <div className="flex justify-center items-center gap-28 flex-wrap max-md:mt-10 z-10">
      <Image
      src={Image2}
      alt="img"
      className="w-[40rem] max-md:w-[20rem]"
      />
      <div className="flex flex-col w-[30rem]  gap-3 max-md:mr-0 max-md:w-[20rem] max-sm:w-[15rem]">
        <p className="uppercase text-end  w-[100%] font-semibold">Tópico</p>
        <p className="text-[4rem] leading-[4rem] uppercase text-end  font-semibold max-sm:text-[3rem]">Proteja seus dados online</p>
        <p className="text-end text-sm text-[#9E9D9E] font-medium">Um banco de dados blockchain armazena informações em blocos interligados em uma cadeia. Os dados são considerados cronologicamente consistentes porque não é possível excluir nem modificar a cadeia sem o consenso da rede.</p>
        <Link href='/' className="self-end flex items-center gap-3 group"><Image src={RightPoint} className="w-3 h-3  opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300 ease-out " alt="rightpoint"/><p className="text-end text-white font-medium">Leia mais sobre dados.</p></Link>
        
      </div>
      
      </div>
      
    </div>
    <div className=" w-screen flex flex-col justify-center items-center" style={{background: 'linear-gradient(293deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(233, 172, 255, 0.30) 100%'}}>
      <p className="uppercase text-[3rem] font-semibold mt-40">Feedbacks</p>
      <div className="flex flex-wrap justify-center mt-8 gap-10 mb-16">
        <Card photo={Photo1} name="Guilherme Silva" comment="A plataforma Block Share proporcionou-me uma experiência verdadeiramente excepcional. Através dela, fui capaz de explorar um mundo de oportunidades no mercado de criptomoedas e investimentos digitais."/>
        <Card photo={Photo2} name="Marcos Felipe" comment="Estou ansioso para continuar a minha jornada com a Block Share e explorar todas as possibilidades emocionantes que essa plataforma oferece."/>
        <Card photo={Photo3} name="Lia Melos" comment="A interface intuitiva e as ferramentas avançadas disponíveis tornaram minha jornada mais acessível e gratificante. Além disso, a comunidade ativa de usuários compartilhou valiosos insights e conhecimentos."/>
      </div>
    </div>
    <footer className="h-[50vh] bg-black text-white flex p-2 justify-around flex-wrap">
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
    </main>
  )
}
