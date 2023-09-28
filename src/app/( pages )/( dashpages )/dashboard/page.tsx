'use client'
import LoggedInGuard from "@/app/( hooks )/loggedinguard"
import { getAuth } from "firebase/auth"
import {auth} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard(){
    return(
        <div className="flex h-screen justify-center items-center">
                <h1 className="text-center">Welcome to the dashboard, <span className="font-semibold">{auth.currentUser?.displayName}</span></h1>

        </div>
    )
}