// Import dependencies
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/( firebase )/firebase";
import Login from "../( pages )/( auth )/login/page";

// Function component
export default function LoggedInGuard({ children }: { children: React.ReactNode }): React.ReactElement {
  // Router
  const router = useRouter();
  const isLoggedIn = useRef(false);

  // Check if the user is logged in
  useEffect(() => {
    isLoggedIn.current = auth.currentUser !== null;
  }, [auth.currentUser]);

  // Conditionally render the dashboard
  if (isLoggedIn.current) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>Welcome to the dashboard, <span className="font-semibold">{auth.currentUser?.displayName}</span></h1>
      </div>
    );
  } else {
    // Redirect the user to the login page
    router.push("/login");
    return <Login/>;
  }
}
