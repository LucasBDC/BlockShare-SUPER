"use client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { SetStateAction, useState } from "react";
import {} from "@/app/( firebase )/firebase";
import { useRouter } from "next/navigation";
import { auth, app } from "@/app/( firebase )/firebase";
import Link from "next/link";
import Image from "next/image";

import { getFirestore, doc, setDoc } from "firebase/firestore";

import Logo from "@/assets/logo.svg";

// Components
import StyledInputs from "@/components/styledinputs";
import Printela from "@/components/printela";
import StyledButtons from "@/components/styledbuttons";
import { Router } from "next/router";

// Constants
const FIREBASE_AUTH = getAuth();

// Interfaces
interface User {
  displayName: string;
  age: number;
  gender: string;
}

// Function component
export default function Registro() {
<<<<<<< HEAD
  const router = useRouter();
  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  async function handleSignUp() {
<<<<<<< HEAD
    if (typeof window !== "undefined") {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      });
      setEmail("");
      setPassword("");
      setName("");
      setAge(0);
      setGender("");
      alert("Sign up successful!");
      router.push("/login");
    } else {
      alert(`Sign up failed`);
=======
    try {
      if(typeof window !== 'undefined') {
        // Create a new user with Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
    
        // Get the authenticated user
        const user = userCredential.user;
    
        // Update the user's profile
         updateProfile(user, {
          displayName: name,
        });
    
        // Save the user's age and gender to Firestore
    
        // Clear the sign up form
        setEmail('');
        setPassword('');
        setName('');
        setAge(0);
        setGender('');
    
        // Display an alert message to the user
        alert('Sign up successful!');
        router.push('/login')
      } else {
        // Display an error message to the user
        alert(`Sign up failed`);
      }
    } catch (error : any) {
      console.error("Error in sign up: ", error);
      alert(`Sign up failed due to an error: ${error.message}`);
>>>>>>> FIX001
=======
  const paginaRouter =  useRouter()
// Variáveis de estado
const [emailUsuario, setEmailUsuario] = useState('');
const [senhaUsuario, setSenhaUsuario] = useState('');
const [nomeUsuario, setNomeUsuario] = useState('');
const [idadeUsuario, setIdadeUsuario] = useState(0);
const [generoUsuario, setGeneroUsuario] = useState('');

async function handleRegistroUsuario() {
  try {
    if(typeof window !== 'undefined') {
      // Cria um novo usuário com o Firebase Auth
      const credencialUsuario = await createUserWithEmailAndPassword(
        auth,
        emailUsuario,
        senhaUsuario
      );

      // Obtém o usuário autenticado
      const usuario = credencialUsuario.user;

      // Atualiza o perfil do usuário
      updateProfile(usuario, {
        displayName: nomeUsuario,
      });

      // Salva a idade e o gênero do usuário no Firestore

      // Limpa o formulário de registro
      setEmailUsuario('');
      setSenhaUsuario('');
      setNomeUsuario('');
      setIdadeUsuario(0);
      setGeneroUsuario('');

      // Exibe uma mensagem de alerta para o usuário
      alert('Registro bem-sucedido!');
      paginaRouter.push('/login')
    } else {
      // Exibe uma mensagem de erro para o usuário
      alert(`Falha no registro`);
>>>>>>> FIX002
    }
  } catch (error : any) {
    console.error("Erro no registro: ", error);
    alert(`Falha no registro devido a um erro: ${error.message}`);
  }
}

<<<<<<< HEAD
  return (
    <Printela>
      <form
        onSubmit={handleSignUp}
        method="post"
        className="border-4 border-slate-600 px-16 py-10 rounded-tl-3xl rounded-br-3xl gap-2 flex flex-col max-2xl:w-[35%] max-sm:w-[100%] max-lg:w-[70%]"
      >
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
          value={email}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // You need to cast the event target value to a string here
            setEmail(e.target.value as string);
          }}
        />
        <StyledInputs
          type="password"
          placeholder="Senha"
          value={password}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // You need to cast the event target value to a string here
            setPassword(e.target.value as string);
          }}
        />
        <StyledInputs
          type="text"
          placeholder="Nome"
          value={name}
          onchange={(e: { target: { value: SetStateAction<string> } }) => {
            // You need to cast the event target value to a string here
            setName(e.target.value as string);
          }}
        />
        <StyledInputs
          type="number"
          placeholder="Idade"
          value={age}
          onchange={(e: { target: { value: SetStateAction<number> } }) => {
            // You need to cast the event target value to a number here
            setAge(e.target.value as number);
          }}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
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
        <StyledButtons texto="Cadastrar" />
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
      </form>
=======
return (
  <Printela>
      <form onSubmit={handleRegistroUsuario} method="post" className="border-4 border-slate-600 px-16 py-10 rounded-tl-3xl rounded-br-3xl gap-2 flex flex-col max-2xl:w-[35%] max-sm:w-[100%] max-lg:w-[70%]">
        <Link href='/' className="flex items-center justify-center gap-4 mb-5">
          <Image src={Logo} alt="/" className="w-14"/>
          <p className="uppercase font-semibold text-2xl animate-pulse">blockshare</p>
        </Link>
        <hr style={{borderColor: 
        'linear-gradient(270deg, #585858 0%, rgba(88, 88, 88, 0.00) 100%)'}} className="border border-slate-600 mb-3"/>
      <StyledInputs
        type="email"
        placeholder="E-Mail"
        value={emailUsuario}
        onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
          // Você precisa converter o valor do alvo do evento para uma string aqui
          setEmailUsuario(e.target.value as string);
        }}
      />
      <StyledInputs
        type="password"
        placeholder="Senha"
        value={senhaUsuario}
        onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
          // Você precisa converter o valor do alvo do evento para uma string aqui
          setSenhaUsuario(e.target.value as string);
        }}
      />
      <StyledInputs
        type="text"
        placeholder="Nome"
        value={nomeUsuario}
        onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
          // Você precisa converter o valor do alvo do evento para uma string aqui
          setNomeUsuario(e.target.value as string);
        }}
      />
      <StyledInputs
        type="number"
        placeholder="Idade"
        value={idadeUsuario}
        onchange={(e: { target: { value: SetStateAction<number>; }; }) => {
          // Você precisa converter o valor do alvo do evento para um número aqui
          setIdadeUsuario(e.target.value as number);
        }}
      />
      <select value={generoUsuario} onChange={(e) => setGeneroUsuario(e.target.value)} className="text-slate-400 border-slate-500 border-2  w-[100%] py-3 px-2 rounded-bl-md rounded-br-md" style={{background: 'linear-gradient(0deg, rgba(88, 88, 88, 0.15) 0%, rgba(88, 88, 88, 0.15) 100%), rgba(208, 208, 208, 0.05)'}}>
        <option value="">Selecione o gênero</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>
      <StyledButtons texto="Cadastrar"/>
        <Link href='/login' className="flex gap-2 self-center group items-center"><p className="text-slate-400 text-sm group-hover:text-slate-200">Já tem uma conta?</p><span className="font-semibold text-purple-600 text- group-hover:text-purple-500 group-active:text-purple-800">Entre</span></Link>
        </form>
>>>>>>> FIX002
    </Printela>
  );
}
