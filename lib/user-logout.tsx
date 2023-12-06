"use client";

import { signOut } from "next-auth/react";
import { Button } from "../components/ui/button";

const UserLogout = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
      variant="destructive"
    >
      Sign out
    </Button>
  );
};

export default UserLogout;
