"use client";

import { signOut } from "next-auth/react";
import { Button } from "../components/ui/button";
import { redirect, useRouter } from "next/navigation";
import { Uuser } from "./request-client-user";
import { useEffect } from "react";

const UserLogout = () => {

  const profile = Uuser()
  const router = useRouter();

  const handleSignout = async () => {

    if (profile) {
      signOut({ redirect: false });
      router.push("/sign-in")
    } else if (profile === null || profile === undefined) {
      router.push("/");
    }

  }


  return (
    <Button
      onClick={handleSignout}
      variant="destructive"
      className="w-6 h-6 text-[10px]" 
    >
      Sign out
    </Button>
  );
};

export default UserLogout;
