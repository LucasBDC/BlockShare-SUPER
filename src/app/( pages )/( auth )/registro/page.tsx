'use client'
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SetStateAction, useState } from "react";
import {} from '@/app/( firebase )/firebase'
import { useRouter } from "next/navigation";
import {auth, app} from '@/app/( firebase )/firebase'

import { getFirestore, doc, setDoc } from "firebase/firestore";

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
  const router =  useRouter()
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  async function handleSignUp() {
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
  }

  

  // Render the component
  return (
    <Printela>
      
        <StyledInputs
          type="email"
          placeholder="E-Mail"
          value={email}
          onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
            // You need to cast the event target value to a string here
            setEmail(e.target.value as string);
          }}
        />
        <StyledInputs
          type="password"
          placeholder="Senha"
          value={password}
          onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
            // You need to cast the event target value to a string here
            setPassword(e.target.value as string);
          }}
        />
        <StyledInputs
          type="text"
          placeholder="Nome"
          value={name}
          onchange={(e: { target: { value: SetStateAction<string>; }; }) => {
            // You need to cast the event target value to a string here
            setName(e.target.value as string);
          }}
        />
        <StyledInputs
          type="number"
          placeholder="Idade"
          value={age}
          onchange={(e: { target: { value: SetStateAction<number>; }; }) => {
            // You need to cast the event target value to a number here
            setAge(e.target.value as number);
          }}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="text-white bg-transparent border-white border w-[100%] py-3 px-2 rounded-lg ">
          <option value="">Selecione o gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <StyledButtons texto="Cadastrar" onclick={() => {handleSignUp()}}/>
    </Printela>
  );
}