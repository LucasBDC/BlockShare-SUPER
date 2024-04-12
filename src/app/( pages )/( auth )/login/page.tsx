"use client"
// Import dependencies
// Import dependencies
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import Image from "next/image"
import Link from "next/link"

// Components
import StyledInputs from "@/components/styledinputs"
import StyledButtons from "@/components/styledbuttons"
import Printela from "@/components/printela"

// Firebase
import { auth, provider } from "@/app/( firebase )/firebase"

// Assets
import Google from "@/assets/google.png"
import Logo from "@/assets/logo.svg"

export default function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const pageRouter = useRouter()

  const handleGoogleUserSignup = () => {
    try {
      signInWithPopup(auth, provider)
        .then(() => {
          pageRouter.push("/dashboard")
        })
        .catch((error) => {
          console.error("Error in Google user sign up: ", error)
          alert(`Google user sign up failed due to an error: ${error.message}`)
        })
    } catch (error: any) {
      console.error("Error in Google user sign up: ", error)
      alert(`Google user sign up failed due to an error: ${error.message}`)
    }
  }

  const handleUserSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          pageRouter.push("/dashboard")
        })
        .catch((error) => {
          console.error("Error in user sign in: ", error)
          alert(`User sign in failed due to an error: ${error.message}`)
        })
    } catch (error: any) {
      console.error("Error in user sign in: ", error)
      alert(`User sign in failed due to an error: ${error.message}`)
    }
  }

  return (
    <Printela>
      <div className="flex flex-col border-4 border-slate-500 px-12 py-16 rounded-br-3xl rounded-tl-3xl gap-4  max-sm:w-[100%] max-md:w-[50%] max-2xl:w-[35%]">
        <Link href="/">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image src={Logo} alt="logo" className="w-14" />
            <p className="uppercase font-semibold text-2xl animate-pulse">
              blockshare
            </p>
          </div>
        </Link>
        <hr className="border border-slate-600 mb-3" />
        <div className="flex flex-col gap-4">
          <StyledInputs
            type="email"
            placeholder="E-Mail"
            value={userEmail}
            name="email"
            onchange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => setUserEmail(e.target.value)}
          />
          <StyledInputs
            type="password"
            name="password"
            placeholder="Senha"
            value={userPassword}
            onchange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => setUserPassword(e.target.value)}
          />
          <StyledButtons texto="ENTRAR" onclick={handleUserSignIn} />
        </div>
        <div>
          <button
            className="flex  items-center justify-center w-[100%] gap-2 bg-zinc-800 py-3 rounded-lg cursor-pointer text-slate-300 hover:bg-zinc-700 duration-150 active:bg-zinc-900"
            onClick={handleGoogleUserSignup}
          >
            <p className="text-md font-medium ">Entrar com Google</p>
            <Image src={Google} alt="google" className="w-7" />
          </button>
        </div>
        <Link href="/registro">
          <div className="flex gap-1 justify-end items-center group w-[100%]">
            <p className="text-slate-400 text-sm group-hover:text-slate-200">
              Não tem conta?
            </p>
            <span className="font-semibold text-purple-600 text- group-hover:text-purple-500 group-active:text-purple-800">
              Crie
            </span>
          </div>
        </Link>
      </div>
    </Printela>
  )
}
