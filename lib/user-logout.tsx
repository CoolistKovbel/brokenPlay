"use client"

import React from 'react'
import { signOut } from 'next-auth/react';
import { Button } from "../components/ui/button";

type Props = {}

const UserLogout = ({}: Props) => {
  return (
    <Button onClick={() => signOut({
        redirect: true,
        callbackUrl: "/"
    })} variant='destructive' >Sign out</Button>
  )
}

export default UserLogout