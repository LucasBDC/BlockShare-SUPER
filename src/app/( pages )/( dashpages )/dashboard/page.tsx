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
            <div className="h-screen w-screen flex items-center  flex-col" style={{background: 'radial-gradient(184.84% 125.71% at 10.4% 16.76%, #C641DE 15.1%, #3722B2 81.25%)'}}>
                <div className="flex w-screen px-10 pt-10 items-center justify-between">
                    <h1 className="text-xl">Welcome to the dashboard,<br/><span className="font-semibold text-3xl">{auth.currentUser?.displayName}</span></h1>
                    <MenuBtn nome="LogOut" texto="LogOut" onclick={() => handleLogout()}/>
                </div>
                <Image src={Techzin} alt="techzin" className="w-[1000px] absolute max-lg:top-44 "/>
            </div>
            <div className="h-screen w-screen text-white flex flex-col justify-center items-center gap-10 ">
                <p className="font-bold text-5xl ">Envie seus arquivos via Blockchain!</p>
                <div className="flex justify-around w-screen">
                <Link href='/uploadshit' className="flex flex-col justify-center items-center gap-2" >
                    <button className="bg-purple-600 rounded-full p-5 hover:bg-purple-500 duration-200"><Image src={upload} alt="upload" width={50}/></button>
                    <p className=" font-semibold">Upload</p>
                </Link>
                </div>
            </div>
            <Footer></Footer>
        <div className="flex h-screen justify-center items-center">
            <LoggedInGuard>
            <h1 className="text-center">Welcome to the dashboard, <span className="font-semibold">{auth.currentUser?.displayName}</span></h1>
            <StyledButtons texto="LogOut" onclick={() => handleLogout()}/>
            <Link href='/uploadshit'>Upload</Link>
            </LoggedInGuard>
        </div>
        </div>
    )
}