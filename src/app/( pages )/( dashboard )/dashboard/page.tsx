'use client'
import LoggedInGuard from "@/app/( hooks )/loggedinguard"
import { getAuth } from "firebase/auth"
import {auth} from '@/app/( firebase )/firebase'
import router from "next/router";

export default function Dashboard(){
    const location = router.pathname;

    return(
        <div>
            <LoggedInGuard>
                <h1 className="text-center">Welcome to the dashboard, {auth.currentUser?.displayName}</h1>
            </LoggedInGuard>
        </div>
    )
}