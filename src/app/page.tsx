// Libs
import Link from 'next/link'

// Components
import StyledInputs from '../components/styledinputs'
import StyledButtons from '../components/styledbuttons'
import Socials from '../components/socials'
import Header from '../components/header'
import Formularios from '@/components/formularios'
import Printela from '@/components/printela'

export default function Home() {
  return (
    <Printela>
          <Header/>
          <Formularios>
            <form action="" className='gap-4 flex flex-col'>
            <StyledInputs type="email" placeholder='Insira seu Email aqui!'/>
            <StyledInputs type='password' placeholder='Insira sua Senha aqui!'/>
            <Link href='/pages/SearchArchive'><StyledButtons texto='ENTRAR'/></Link>
            <Link href='/pages/Registro' className='text-end text-slate-400 text-sm hover:text-slate-300'>Nao tem uma conta?</Link>
            </form>
            <hr className='mt-5 border-slate-400' />
            <Socials/>
          </Formularios>
    </Printela>
  )
}
