'use client'
// Import dependencies
import React, { useState } from "react";
import {auth, app, provider} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import Google from '@/assets/google.png'
import Logo from '@/assets/logo.svg'
// Components
import StyledInputs from "@/components/styledinputs";
import StyledButtons from "@/components/styledbuttons";
import Printela from "@/components/printela";

// Function component
export default function Login() {

  // State variables
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  function HandleGoogleSignup() {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential =  GoogleAuthProvider.credentialFromResult(result);
    if(credential != null){
      const token = credential.accessToken;
    }
    // The signed-in user info.
    const user = result.user;
    router.push('/dashboard')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

   function handleSignIn() {
  // Function to handle sign in
     signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push('/dashboard')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message)
    });
  }

  // Render the component
  return (
    <Printela>
        <div className="flex flex-col border-4 border-slate-500 px-12 py-16 rounded-br-3xl rounded-tl-3xl gap-4  max-sm:w-[100%] max-md:w-[50%] max-2xl:w-[35%]" >
          <Link href='/' className="flex items-center justify-center gap-2 mb-3">
            <Image src={Logo} alt="logo" className="w-14"/> <p className="uppercase font-semibold text-2xl animate-pulse">blockshare</p>
          </Link>
          <hr className="border border-slate-600 mb-3"/>
        <form onSubmit={handleSignIn} method="post" className="flex flex-col gap-4">
          <StyledInputs
            type="email"
            placeholder="E-Mail"  
            value={email}
            name="email"
            onchange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
          />
          <StyledInputs
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onchange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
          />
          <StyledButtons texto="ENTRAR"/>
        </form>
        <form onSubmit={HandleGoogleSignup} method="post">
        <button className="flex  items-center justify-center w-[100%] gap-2 bg-zinc-800 py-3 rounded-lg cursor-pointer text-slate-300 hover:bg-zinc-700 duration-150 active:bg-zinc-900"><p className="text-md font-medium ">Entrar com Google</p>
        <Image src={Google} alt='google' className="w-7"/></button>
        </form>
        <Link href='/registro' className="flex gap-1 self-center group items-center"><p className="text-slate-400 text-sm group-hover:text-slate-200">Não tem conta?</p><span className="font-semibold text-purple-600 text- group-hover:text-purple-500 group-active:text-purple-800">Crie</span></Link>
        </div>
    </Printela>
  );
}
