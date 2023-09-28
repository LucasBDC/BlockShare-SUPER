// Import dependencies
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/( firebase )/firebase";

// Function component
export default function LoggedInGuard({ children }: { children: React.ReactNode }): React.ReactElement {
  // Router
  const router = useRouter();

  // Check if the user is logged in
  if(!auth.currentUser){
    return(<div></div>)
    router.push('/login')
  }
  else{
    return(
      <div>{children}</div>
    )
  }
}
