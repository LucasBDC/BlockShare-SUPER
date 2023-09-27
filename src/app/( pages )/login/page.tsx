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
export default function Login(): React.ReactElement {
  // State variables
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Router
  const router = useRouter();

  // Function to handle sign in
  async function handleSignIn() {
    try {
      // Sign in with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to the home page
      router.push("/");
    } catch (error: any) {
      // Display an error message to the user
      alert(error.message);
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
