// Libs
import Link from 'next/link'

// Components
import StyledInputs from '../components/styledinputs'
import StyledButtons from '../components/styledbuttons'
import Socials from '../components/socials'
import Header from '../components/header'

export default function Home() {
  return (
    <main className='flex flex-col h-screen items-center justify-center gap-10'>
          <Header/>
          <div className="form xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] ">
            <form action="" className='gap-4 flex flex-col'>
            <StyledInputs type="email" placeholder='Insira seu Email aqui!'/>
            <StyledInputs type='password' placeholder='Insira sua Senha aqui!'/>
            <StyledButtons texto='ENTRAR'/>
            <Link href='/pages/Registro' className='text-end text-slate-400 text-sm hover:text-slate-300'>Nao tem uma conta?</Link>
            </form>
            <hr className='mt-5 border-slate-400' />
            <Socials/>
          </div>
    </main>
  )
}
