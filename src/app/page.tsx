// Libs
import Image from 'next/image'

// Images
import Logo from '../assets/logo.svg'

// Components
import StyledInputs from '../components/styledinputs'
import StyledButtons from '../components/styledbuttons'
import Socials from '../components/socials'

export default function Home() {
  return (
    <main className='flex flex-col h-screen items-center justify-center gap-10'>
          <header className='items-center justify-center flex flex-col gap-4'>
            <Image
                src={Logo}
                alt='Logo'
                className='w-[100px]'
            />
            <p className='uppercase text-[40px]'>blockshare</p>
          </header>
          <div className="form xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] ">
            <form action="" className='gap-4 flex flex-col'>
            <StyledInputs type="email" placeholder='Insira seu Email aqui!'/>
            <StyledInputs type='password' placeholder='Insira sua Senha aqui!'/>
            <StyledButtons texto='ENTRAR'/>
            </form>
            <hr className='mt-5 border-slate-400' />
            <Socials/>
          </div>
    </main>
  )
}
