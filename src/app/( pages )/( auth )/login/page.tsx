'use client'

// Import dependencies
import React, { useState } from "react";
import {auth, app, provider} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Components
import StyledInputs from "@/components/styledinputs";
import StyledButtons from "@/components/styledbuttons";

// Function component
export default function Login() {
  // State variables
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

 function HandleGoogleSignup(){
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
    <div className="h-screen flex justify-center items-center flex-col">
        <form action="" onSubmit={handleSignIn} method="post">
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
        <StyledButtons texto="GOOGLE" onclick={() => {HandleGoogleSignup()}}/>
        </form>
    </div>
  );
}
