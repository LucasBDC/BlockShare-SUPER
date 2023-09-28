'use client'
// Import dependencies
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from '@/app/( firebase )/firebase';

// Function component
const LoggedInGuard = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  // Router
  const router = useRouter();

  // Check if the user is logged in
  if (!auth.currentUser) {
    router.push("/login");
  }

  return (
    <div>{children}</div>
  );
};

export default LoggedInGuard;
