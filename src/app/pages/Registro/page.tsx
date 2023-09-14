// Libs
import Link from "next/link"

// Components
import Header from '../../../components/header'
import Formularios from "@/components/formularios"
import StyledInputs from "@/components/styledinputs"
import StyledButtons from "@/components/styledbuttons"
import Socials from "@/components/socials"
import Printela from "@/components/printela"

export default function Registro(){
    return(
        <Printela>
            <Header/>
            <Formularios>
                <form action="" className="gap-4 flex flex-col mt-10 text-slate-400">
                    <StyledInputs placeholder='Digite seu Nome!' type='text'/>
                    <StyledInputs placeholder='Digite seu Email!' type='email'/>
                    <StyledInputs placeholder='Digite sua Senha!' type='password'/>
                    <StyledInputs placeholder='Digite seu número Telefone!' type='number'/>
                    <StyledInputs type='date'/>
                    <StyledButtons texto='CADASTRAR'/>
                    <Link href='/' className="text-end text-slate-400 hover:text-slate-300">Já tem conta?</Link>
                </form>
                <hr className='mt-5 border-slate-400' />
            </Formularios>
            <Socials></Socials>
        </Printela>
    )
}