"use client";

import { signOut } from "next-auth/react";
import { Button } from "../components/ui/button";
import { redirect } from "next/navigation";

const UserLogout = () => {

  const handleSignout = () => {
    signOut()
    redirect(`${window.location.origin}/sign-in`)
  }



  return (
    <Button
      onClick={handleSignout}
      variant="destructive"
    >
      Sign out
    </Button>
  );
};

export default UserLogout;
