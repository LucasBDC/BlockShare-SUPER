'use client'
import LoggedInGuard from "@/app/( hooks )/loggedinguard"
import { getAuth } from "firebase/auth"
import {auth} from '@/app/( firebase )/firebase'

export default function Dashboard(){
    return(
        <div>
            <LoggedInGuard>
                <h1 className="text-center">Welcome to the dashboard, {auth.currentUser?.displayName}</h1>
            </LoggedInGuard>
        </div>
    )
}