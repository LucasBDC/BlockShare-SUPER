'use client'
// Importar dependências
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/( firebase )/firebase";

// Componente de função
export default function LoggedInGuard({ children }: { children: React.ReactNode }): React.ReactElement {
  // Roteador
  const roteadorPagina = useRouter();

  // Verificar se o usuário está logado
useEffect(() =>{
  if(!auth.currentUser){
    roteadorPagina.push('/login')
   } 
}, )
return(
  <div>{children}</div>
)

}
