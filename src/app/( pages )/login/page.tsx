'use client'

// Import dependencies
import React, { useState } from "react";
import {auth, app} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

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

  // Router
  const router = useRouter();

  // Function to handle sign in
  async function handleSignIn() {
    async function handleSignIn() {
        if (typeof window !== 'undefined') {
          // Sign in with Firebase Auth
          await signInWithEmailAndPassword(auth, email, password);
    
          // Redirect to the home page
          router.push("/");
        } else {
            console.log('error')
          // Do something else if the `window` object is not defined
        }
      }
  }
    

  // Render the component
  return (
    <div className="h-screen flex justify-center items-center ">
      <form method="POST" onSubmit={handleSignIn}>
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
        <StyledButtons texto="ENTRAR"/>
      </form>
    </div>
  );
}
