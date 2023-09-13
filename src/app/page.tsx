import Image from 'next/image'
import Logo from '../assets/logo.svg'

// Components
import StyledInputs from '../components/styledinputs'
import StyledButtons from '../components/styledbuttons'

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
          <div className="form">
            <form action="" className='gap-4 flex flex-col'>
            <StyledInputs type="email" placeholder='Insira seu Email aqui!'/>
            <StyledInputs type='password' placeholder='Insira sua Senha aqui!'/>
            <StyledButtons texto='ENTRAR'/>
            </form>
          </div>
    </main>
  )
}
