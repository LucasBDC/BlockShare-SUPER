'use client'
import LoggedInGuard from "@/app/( hooks )/loggedinguard"
import Footer from "@/components/Footer"
import { getAuth } from "firebase/auth"
import {auth} from '@/app/( firebase )/firebase'
import Printela from "@/components/printela"
import MenuBtn from "@/components/menubtn"
import Trespontos from '@/assets/menu-pontos-vertical.png'
import Image from "next/image"
import Tech from '@/assets/technology-blockchain-purple-93218114.png'
import Techzin from '@/assets/BYRKKpdWtHFHz3nQVYq5V.png'
import upload from '@/assets/upload-na-nuvem (1).png'
import Perfil from '@/assets/do-utilizador.png'

import StyledButtons from "@/components/styledbuttons"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Dashboard(){
    const router =  useRouter();
    function handleLogout(){
        router.push('/login')
    }
    return(
        <div className="w-screen flex flex-col gap-4 items-center justify-center backgroundera">
            <div className="h-screen w-screen flex items-center flex-col " style={{background: 'radial-gradient(184.84% 125.71% at 10.4% 16.76%, #C641DE 15.1%, #3722B2 81.25%)'}}>
                <div className="flex w-screen px-10 pt-10 justify-around">
                <Image src={Techzin} alt="techzin" className="w-[1000px] absolute max-lg:top-44 pointer-events-none"/>
                    <h1 className="text-xl hidden sm:block">Welcome to the dashboard,<br/><span className="font-semibold text-3xl">{auth.currentUser?.displayName}</span></h1>
                    <div className="group flex flex-col items-center gap-2">
                        <Image src={Perfil} alt="Perfil"  width={45} height={45} className="z-0"/>
                        <div className=" bg-gray-800 w-52 h-52 items-center flex flex-col gap-3 p-5 rounded-md opacity-0 group-hover:opacity-100 absolute top-[90px] transition-all duration-200 group-hover:translate-y-4 shadow-md shadow-black/50 "> 
                            <p className="font-medium cursor-pointer hover:underline text-lg">Profile</p>
                            <p className="font-medium cursor-pointer hover:underline text-lg">Meus Arquivos</p>
                            <p className="font-medium cursor-pointer hover:underline text-lg duration-150 transition-all">Excluir Conta</p>
                            <MenuBtn nome="LogOut" texto="LogOut" onclick={() => handleLogout()}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="h-screen w-screen text-white flex flex-col justify-center items-center gap-10 ">
                <p className="font-bold text-5xl ">Envie seus arquivos via Blockchain!</p>
                <div className="flex justify-around w-screen">
                <Link href='/uploadarch' className="flex flex-col justify-center items-center gap-2" >
                    <button className="bg-purple-600 rounded-full p-5 hover:bg-purple-500 duration-200"><Image src={upload} alt="upload" width={50}/></button>
                    <p className=" font-semibold">Upload</p>
                </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}