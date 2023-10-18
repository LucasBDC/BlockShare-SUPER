'use client'
import LoggedInGuard from "@/app/( hooks )/loggedinguard"
import { getAuth } from "firebase/auth"
import {auth} from '@/app/( firebase )/firebase'

import StyledButtons from "@/components/styledbuttons"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Dashboard(){
    const router =  useRouter();
    function handleLogout(){
        router.push('/login')
    }
    return(
        <div className="flex h-screen justify-center items-center">
            <LoggedInGuard>
            <h1 className="text-center">Welcome to the dashboard, <span className="font-semibold">{auth.currentUser?.displayName}</span></h1>
            <StyledButtons texto="LogOut" onclick={() => handleLogout()}/>
            <Link href='/uploadshit'>Upload</Link>
            </LoggedInGuard>
        </div>
    )
}