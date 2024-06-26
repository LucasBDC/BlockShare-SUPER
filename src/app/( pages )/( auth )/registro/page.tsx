"use client"
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { SetStateAction, useState } from "react"
import { db } from "@/app/( firebase )/firebase"
import { useRouter } from "next/navigation"
import { auth, app } from "@/app/( firebase )/firebase"
import Link from "next/link"
import Image from "next/image"

import { getFirestore, doc, setDoc, collection } from "firebase/firestore"

import Logo from "@/assets/logo.svg"

// Components
import StyledInputs from "@/components/styledinputs"
import Printela from "@/components/printela"
import StyledButtons from "@/components/styledbuttons"
import { Router } from "next/router"

// Constants
const FIREBASE_AUTH = getAuth()

// Interfaces
interface User {
  displayName: string
  age: number
  gender: string
}

const usersCollectionRef = collection(db, "users")
// Function component
export default function Registro() {
  const paginaRouter = useRouter()
  // Variáveis de estado
  const [emailUsuario, setEmailUsuario] = useState("")
  const [senhaUsuario, setSenhaUsuario] = useState("")
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [generoUsuario, setGeneroUsuario] = useState("")

  async function handleRegistroUsuario() {
    if (
      emailUsuario !== "" &&
      senhaUsuario !== "" &&
      nomeUsuario !== "" &&
      generoUsuario !== ""
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailUsuario,
          senhaUsuario
        )
        const user = userCredential.user
        await updateProfile(user, { displayName: nomeUsuario })
        const userDocRef = doc(usersCollectionRef, user.uid)
        await setDoc(userDocRef, {
          id: user.uid,
          email: emailUsuario,
          password: senhaUsuario,
          name: nomeUsuario,
          genero: generoUsuario,
        })
        alert("Cadastro feito com sucesso! Aproveite o BlockShare!")
        paginaRouter.push("/login")
      } catch (e: any) {
        alert(e)
      }
    }
  }
  return (
    <Printela>
      <div className="border-4 border-slate-600 px-16 py-10 rounded-tl-3xl rounded-br-3xl gap-2 flex flex-col max-2xl:w-[35%] max-sm:w-[100%] max-lg:w-[70%]">
        <Link href="/" className="flex items-center justify-center gap-4 mb-5">
          <Image src={Logo} alt="/" className="w-14" />
          <p className="uppercase font-semibold text-2xl animate-pulse">
            blockshare
          </p>
        </Link>
        <hr
          style={{
            borderColor:
              "linear-gradient(270deg, #585858 0%, rgba(88, 88, 88, 0.00) 100%)",
          }}
          className="border border-slate-600 mb-3"
        />
        <StyledInputs
          type="email"
          placeholder="E-Mail"
          value={emailUsuario}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // Você precisa converter o valor do alvo do evento para uma string aqui
            setEmailUsuario(e.target.value as string)
          }}
        />
        <StyledInputs
          type="password"
          placeholder="Senha"
          value={senhaUsuario}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // Você precisa converter o valor do alvo do evento para uma string aqui
            setSenhaUsuario(e.target.value as string)
          }}
        />
        <StyledInputs
          type="text"
          placeholder="Nome"
          value={nomeUsuario}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // Você precisa converter o valor do alvo do evento para uma string aqui
            setNomeUsuario(e.target.value as string)
          }}
        />
        <select
          value={generoUsuario}
          onChange={(e) => setGeneroUsuario(e.target.value)}
          className="text-slate-400 border-slate-500 border-2  w-[100%] py-3 px-2 rounded-bl-md rounded-br-md"
          style={{
            background:
              "linear-gradient(0deg, rgba(88, 88, 88, 0.15) 0%, rgba(88, 88, 88, 0.15) 100%), rgba(208, 208, 208, 0.05)",
          }}
        >
          <option value="">Selecione o gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <StyledButtons
          texto="Cadastrar"
          onclick={() => {
            handleRegistroUsuario()
          }}
        />
        <Link
          href="/login"
          className="flex gap-2 self-center group items-center"
        >
          <p className="text-slate-400 text-sm group-hover:text-slate-200">
            Já tem uma conta?
          </p>
          <span className="font-semibold text-purple-600 text- group-hover:text-purple-500 group-active:text-purple-800">
            Entre
          </span>
        </Link>
      </div>
    </Printela>
  )
}
