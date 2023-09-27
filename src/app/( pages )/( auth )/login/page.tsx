'use client'

// Import dependencies
import React, { useState } from "react";
import {auth, app, provider} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Components
import StyledInputs from "@/components/styledinputs";
import StyledButtons from "@/components/styledbuttons";

// Interfaces
interface User {
  email: string;
  password: string;
}
// Function component
export default function Login() {
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function HandleGoogleSignup(){
    signInWithPopup(auth, provider)
  .then((result : any) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    router.push('/dashboard')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error : any) => {
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
  // Router
  const router = useRouter();

  // Function to handle sign in
  async function handleSignIn() {
        if (typeof window !== 'undefined') {
          // Sign in with Firebase Auth
          signInWithEmailAndPassword(auth, email, password);
    
          // Redirect to the home page
          router.push("/dashboard");
        } else {
            console.log('error')
          // Do something else if the `window` object is not defined
        }
  }
    

  // Render the component
  return (
    <div className="h-screen flex justify-center items-center ">
      <form method="POST">
        <StyledInputs
          type="email"
          placeholder="E-Mail"  
          value={email}
          onchange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
        />
        <StyledInputs
          type="password"
          placeholder="Senha"
          value={password}
          onchange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
        />
        <StyledButtons texto="ENTRAR" onclick={() => {handleSignIn()}}/>
        <StyledButtons texto="google" onclick={() => {HandleGoogleSignup()}}/>
      </form>
    </div>
  );
}
